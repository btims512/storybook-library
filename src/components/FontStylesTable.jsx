import React from "react";
import Text from "./Text";
import "./Table.css";

const FontStylesTable = () => {
  const stylesInfo = [
    {
      name: "Large-Title",
      font: "SF Pro Display",
      weight: "Semibold",
      size: "35px",
      lineHeight: "40px",
    },
    {
      name: "Title-1",
      font: "SF Pro Display",
      weight: "Semibold",
      size: "28px",
      lineHeight: "40px",
    },
    {
      name: "Title-2",
      font: "SF Pro Display",
      weight: "Semibold",
      size: "23px",
      lineHeight: "28px",
    },
    {
      name: "Title-3",
      font: "SF Pro Display",
      weight: "Light",
      size: "23px",
      lineHeight: "28px",
    },
    {
      name: "Headline",
      font: "SF Pro Text",
      weight: "Regular",
      size: "15px",
      lineHeight: "20px",
    },
    {
      name: "Body-1",
      font: "SF Pro Text",
      weight: "Regular",
      size: "13px",
      lineHeight: "16px",
    },
    {
      name: "Label-1",
      font: "SF Pro Text",
      weight: "Medium",
      size: "13px",
      lineHeight: "16px",
    },
    {
      name: "Body-2",
      font: "SF Pro Text",
      weight: "Regular",
      size: "11px",
      lineHeight: "14px",
    },
    {
      name: "Label-2",
      font: "SF Pro Text",
      weight: "Medium",
      size: "11px",
      lineHeight: "14px",
    },
  ];

  return (
    <table className="styles-table">
      <thead>
        <tr>
          <th>Text Style Name</th>
          <th>Font</th>
          <th>Weight</th>
          <th>Size</th>
          <th>Line Height</th>
        </tr>
      </thead>
      <tbody>
        {stylesInfo.map((style, index) => (
          <tr key={index}>
            <td>
              <Text className={style.name.replace(" ", "-").toLowerCase()}>
                {style.name}
              </Text>
            </td>
            <td>{style.font}</td>
            <td>{style.weight}</td>
            <td>{style.size}</td>
            <td>{style.lineHeight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FontStylesTable;
