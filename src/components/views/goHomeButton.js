import React from "react";
import { useHistory } from "react-router";
// assets
import goBackHome from "../../assets/svg/goHome.svg";

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
          src={goBackHome}
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
