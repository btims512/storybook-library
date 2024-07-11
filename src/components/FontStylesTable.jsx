import React from "react";
import Text from "./Text";
import "./Table.css";

const stylesInfo = [
  {
    name: "Large-Title",
    className: "large-title",
    font: "Titillium Web",
    weight: "Semibold",
    size: "32px",
    lineHeight: "40px",
  },
  {
    name: "Title-1",
    className: "title-1",
    font: "Titillium Web",
    weight: "Semibold",
    size: "28px",
    lineHeight: "40px",
  },
  {
    name: "Title-2",
    className: "title-2",
    font: "Titillium Web",
    weight: "Semibold",
    size: "22px",
    lineHeight: "28px",
  },
  {
    name: "Title-3",
    className: "title-3",
    font: "Titillium Web",
    weight: "Light",
    size: "22px",
    lineHeight: "28px",
  },
  {
    name: "Headline",
    className: "headline",
    font: "Titillium Web",
    weight: "Regular",
    size: "16px",
    lineHeight: "20px",
  },
  {
    name: "Body-1",
    className: "body-1",
    font: "Titillium Web",
    weight: "Regular",
    size: "14px",
    lineHeight: "16px",
  },
  {
    name: "Label-1",
    className: "label-1",
    font: "Titillium Web",
    weight: "Regular",
    size: "14px",
    lineHeight: "16px",
  },
  {
    name: "Body-2",
    className: "body-2",
    font: "Titillium Web",
    weight: "Regular",
    size: "10px",
    lineHeight: "14px",
  },
  {
    name: "Label-2",
    className: "label-2",
    font: "Titillium Web",
    weight: "Semibold",
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
          <tr key={index} className={style.className}>
            <td>
              <Text className={style.className}>{style.name}</Text>
            </td>
            <td>
              <Text className={style.className}>{style.font}</Text>
            </td>
            <td>
              <Text className={style.className}>{style.weight}</Text>
            </td>
            <td>
              <Text className={style.className}>{style.size}</Text>
            </td>
            <td>
              <Text className={style.className}>{style.lineHeight}</Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FontStylesTable;
