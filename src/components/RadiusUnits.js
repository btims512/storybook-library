import React from "react";
import "./Table.css";

const RadiusUnitsTable = () => {
  const radiusUnits = [
    {
      name: "radius-default",
      size: "4px",
    },
    {
      name: "radius-compact",
      size: "2px",
    },
    {
      name: "radius-round",
      size: "999px",
    },
    {
      name: "radius-0",
      size: "0px",
    },
  ];

  return (
    <table className="styles-table">
      <thead>
        <tr>
          <th>Radius Units</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody className="body-1">
        {radiusUnits.map((unit, index) => (
          <tr key={index}>
            <td>{unit.name}</td>
            <td>{unit.size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RadiusUnitsTable;
