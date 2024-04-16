import React from "react";

const MyReports = ({ reports }) => {
  // Função para obter o emoji correspondente ao tipo de relatório
  const getReportEmoji = (type) => {
    switch (type) {
      case "denounce":
        return "🚨";
      case "praise":
        return "👍🏻";
      case "complaint":
        return "🫱🏻‍🫲🏻";
      case "simplify":
        return "😎";
      case "support":
        return "✅";
      default:
        return "";
    }
  };

  // Função para obter o nome do tipo de relatório
  const getReportName = (type) => {
    switch (type) {
      case "denounce":
        return "Denounce";
      case "praise":
        return "Praise";
      case "complaint":
        return "Complaint";
      case "simplify":
        return "Simplify";
      case "support":
        return "Support";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="my-reports-container">
      {reports.length === 0 && <div className="error-message">There's no reports available.</div>}
      {reports.map((report, index) => (
        <div key={index} className="card">
          <div className="card-content">
            {/* Utilizando a função getReportEmoji para obter o emoji correspondente */}
            <p className="card-title">{getReportName(report.typeOfReport)} {getReportEmoji(report.typeOfReport)} </p>
            <p>{report.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReports;
