import React from "react";
// assets
import lightHouse from "../../assets/svg/blackHouse.svg";
// comps
//import Button from "react-bootstrap/Button";

const GoHomeButton = () => {
  return (
    <div style={{ position: "absolute", top: "-5px", left: "90%" }}>
      <button
        type="button"
        style={{
          outline: "none",
          border: "none",
          background: "transparent",
        }}
      >
        <img
          src={lightHouse}
          style={{
            height: "80px",
            outline: "none",
            border: "none",
          }}
          alt="go back home"
        />
      </button>
    </div>
  );
};
export default GoHomeButton;
