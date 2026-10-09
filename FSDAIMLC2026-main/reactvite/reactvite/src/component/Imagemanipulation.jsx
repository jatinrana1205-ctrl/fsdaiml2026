
import React, { useState } from "react";

import cat from "../images/cat.png";

function Imagemanipulation() {
  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth] = useState(200);
  const [marginLeft, setMarginLeft] = useState(0);
  const [rotation, setRotation] = useState(0);

  const rotateCat = () => {
    setRotation(rotation + 90);
  };

  const resetPosition = () => {
    setMarginLeft(0);
    setRotation(0);
    setCatHeight(200);
    setCatWidth(200);
  };

  return (
    <div>
      <h2 style={{ color: "red", backgroundColor: "black" }}>
        Imagemanipulation
      </h2>

      <div
        style={{
          border: "2px solid red",
          height: "400px",
          width: "400px",
          marginLeft: "300px",
        }}
      >
        <img
          src={cat}
          height={catHeight}
          width={catWidth}
          alt="Cat"
          style={{
            marginLeft: `${marginLeft}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>

      <br />

      <button onClick={() => setCatHeight(catHeight + 10)}>
        Increase Height
      </button>

      <button onClick={() => setCatWidth(catWidth + 10)}>
        Increase Width
      </button>

      <button onClick={() => setMarginLeft(marginLeft - 20)}>
        Move Left
      </button>

      <button onClick={() => setMarginLeft(marginLeft + 20)}>
        Move Right
      </button>

      <button onClick={rotateCat}>
        Rotate Cat
      </button>

      <button onClick={resetPosition}>
        Reset Position
      </button>
    </div>
  );
}

export default Imagemanipulation;
