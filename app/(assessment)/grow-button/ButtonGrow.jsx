"use client";

import { useState } from "react";

export default function ButtonGrow() {
  const [size, setSize] = useState(150);
  const [color, setColor] = useState("blue");

  const handleClick = () => {
    setSize((prevSize) => prevSize * 2);

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        color: "white",
        fontSize: "2rem",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      GROW
    </button>
  );
}
