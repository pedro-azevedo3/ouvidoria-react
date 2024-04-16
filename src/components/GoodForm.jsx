import React from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";


const GoodForm = ({ addReport }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => { 
    addReport(data);
    alert("Report done with success!!✅");
    reset();
  };

  console.log("RENDER");

  return (
    <form className="">
      <div className="form-group">
        <label>Name</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Your name"
          {...register("name", { required: true })}
        />
        {errors?.name?.type === "required" && (
          <p className="error-message">Name is required.</p>
        )}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          className={errors?.email && "input-error"}
          type="email"
          placeholder="Your e-mail"
          {...register("email", {
            required: true,
            validate: (value) => isEmail(value),
          })}
        />
        {errors?.email?.type === "required" && (
          <p className="error-message">Email is required.</p>
        )}

        {errors?.email?.type === "validate" && (
          <p className="error-message">Email is invalid.</p>
        )}
      </div>


      <div className="form-group">
        <label>Describe your report</label>
        <textarea
          className={`${
            errors?.description && "input-error"
          } form-textarea`}
          placeholder="Type here what was the problem"
          {...register("description", {
            required: true,
            maxLength: 300,
          })}
        />
        {errors?.description?.type === "required" && (
          <p className="error-message">Description is required.</p>
        )}
        {errors?.description?.type === "maxLength" && (
          <p className="error-message">
            Description cannot exceed 300 characters.
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Choose the type of your report</label>
        <select
          className={errors?.profession && "input-error"}
          defaultValue="0"
          {...register("typeOfReport", { validate: (value) => value !== "0" })}
        >
          <option value="0">Type of your report</option>
          <option value="denounce">Denounce 🚨</option>
          <option value="praise">Praise 👍🏻</option>
          <option value="complaint">Complaint 🫱🏻‍🫲🏻</option>
          <option value="simplify">Simplify 😎</option>
          <option value="support">Support ✅</option>
        </select>

        {errors?.profession?.type === "validate" && (
          <p className="error-message">Type of report is required.</p>
        )}
      </div>

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="privacy-policy"
            {...register("privacyTerms", {
              validate: (value) => value === true,
            })}
          />
          <label>I agree with the privacy terms.</label>
        </div>

        {errors?.privacyTerms?.type === "validate" && (
          <p className="error-message">
            You must agree with the privacy terms.
          </p>
        )}
      </div>

      <div className="form-group">
        <button onClick={handleSubmit(onSubmit)}>Send report</button>
      </div>

    </form>
  );
};

export default GoodForm;
