import React from "react";
import "./ColorPalette.css";

const lightColors = [
  { name: "Primary Brand", className: "primary-brand", hex: "#13ADC7" },
  { name: "Black", className: "black", hex: "#111111" },
  { name: "Gray", className: "gray", hex: "#999999" },
  { name: "Light Gray", className: "light-gray", hex: "#D6D6D6" },
  { name: "Snow", className: "snow", hex: "#F3F3F3" },
  { name: "White", className: "white", hex: "#FFFFFF" },
];

const darkColors = [
  {
    name: "Primary Brand (Dark)",
    className: "primary-brand-dark",
    hex: "#B133FF",
  },
  { name: "Accent (Dark)", className: "accent-dark", hex: "#F46737" },
  {
    name: "Foreground 1 (Dark)",
    className: "foreground-1-dark",
    hex: "#FFFFFF",
  },
  {
    name: "Foreground 2 (Dark)",
    className: "foreground-2-dark",
    hex: "#869DA9",
  },
  { name: "Border 1 (Dark)", className: "border-1-dark", hex: "#384767" },
  {
    name: "Background 1 (Dark)",
    className: "background-1-dark",
    hex: "#0E131F",
  },
  {
    name: "Background 2 (Dark)",
    className: "background-2-dark",
    hex: "#162032",
  },
];

const ColorPalette = () => {
  return (
    <div>
      <h2 className="palette-title">Light Mode Colors</h2>
      <div className="color-palette">
        {lightColors.map((color) => (
          <div key={color.name} className="color-swatch">
            <div className={`color-box ${color.className}`}></div>
            <div className="color-info">
              <p className="color-name">{color.name}</p>
              <p className="color-hex">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="palette-title">Dark Mode Colors</h2>
      <div className="color-palette">
        {darkColors.map((color) => (
          <div key={color.name} className="color-swatch">
            <div className={`color-box ${color.className}`}></div>
            <div className="color-info">
              <p className="color-name">{color.name}</p>
              <p className="color-hex">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
