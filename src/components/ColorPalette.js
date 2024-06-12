import React from "react";
import "./ColorPalette.css";

const colors = [
  { name: "Primary Brand", className: "primary-brand", hex: "#0996FF" },
  { name: "Black", className: "black", hex: "#111111" },
  { name: "Gray", className: "gray", hex: "#999999" },
  { name: "Light Gray", className: "light-gray", hex: "#D6D6D6" },
  { name: "Snow", className: "snow", hex: "#FAFAFA" },
  { name: "White", className: "white", hex: "#FFFFFF" },
];

const ColorPalette = () => {
  return (
    <div className="color-palette">
      {colors.map((color) => (
        <div key={color.name} className="color-swatch">
          <div className={`color-box ${color.className}`}></div>
          <div className="color-info">
            <p className="color-name headline">{color.name}</p>
            <p className="color-hex body-1">{color.hex}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
