import React from "react";
import Text from "./Text";
import "./Table.css";

const stylesInfo = [
  {
    name: "Large-Title",
    font: "Titillium Web Semibold",
    weight: "Semibold",
    size: "32px",
    lineHeight: "40px",
  },
  {
    name: "Title-1",
    font: "Titillium Web Semibold",
    weight: "Semibold",
    size: "28px",
    lineHeight: "40px",
  },
  {
    name: "Title-2",
    font: "Titillium Web Semibold",
    weight: "Semibold",
    size: "22px",
    lineHeight: "28px",
  },
  {
    name: "Title-3",
    font: "Titillium Web Light",
    weight: "Light",
    size: "22px",
    lineHeight: "28px",
  },
  {
    name: "Headline",
    font: "Titillium Web Regular",
    weight: "Regular",
    size: "16px",
    lineHeight: "20px",
  },
  {
    name: "Body-1",
    font: "Titillium Web Regular",
    weight: "Regular",
    size: "14px",
    lineHeight: "16px",
  },
  {
    name: "Label-1",
    font: "Titillium Web Regular",
    weight: "Regular",
    size: "14px",
    lineHeight: "16px",
  },
  {
    name: "Body-2",
    font: "Titillium Web Regular",
    weight: "Regular",
    size: "10px",
    lineHeight: "14px",
  },
  {
    name: "Label-2",
    font: "Titillium Web Regular",
    weight: "Regular",
    size: "10px",
    lineHeight: "14px",
  },
];

const FontStylesTable = () => {
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
            <td>
              <Text>{style.font}</Text>
            </td>
            <td>
              <Text>{style.weight}</Text>
            </td>
            <td>
              <Text>{style.size}</Text>
            </td>
            <td>
              <Text>{style.lineHeight}</Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FontStylesTable;
