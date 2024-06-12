import React from "react";
import "./Table.css";

const SpacingUnitsTable = () => {
  const spacingUnits = [
    {
      name: "s-0",
      size: "0px",
    },
    {
      name: "s-4",
      size: "4px",
    },
    {
      name: "s-8",
      size: "8px",
    },
    {
      name: "s-16",
      size: "16px",
    },
    {
      name: "s-24",
      size: "24px",
    },
    {
      name: "s-32",
      size: "32px",
    },
    {
      name: "s-40",
      size: "40px",
    },
    {
      name: "s-56",
      size: "56px",
    },
    {
      name: "s-80",
      size: "80px",
    },
    {
      name: "s-120",
      size: "120px",
    },
  ];

  return (
    <table className="styles-table">
      <thead>
        <tr>
          <th>Spacing Units</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody className="body-1">
        {spacingUnits.map((unit, index) => (
          <tr key={index}>
            <td>{unit.name}</td>
            <td>{unit.size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SpacingUnitsTable;
