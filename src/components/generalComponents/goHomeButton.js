import React from "react";
import { useHistory } from "react-router";
// assets
import lightHouse from "../../assets/svg/blackHouse.svg";

const GoHomeButton = () => {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        style={{
          outline: "none",
          border: "none",
          background: "transparent",
        }}
        onClick={() => history.push("/")}
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
