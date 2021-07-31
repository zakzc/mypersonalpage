import React from "react";

const SubTitle = ({ color, subTitle }) => (
  <h1
    style={{
      textAlign: "right",
      color: `${color}`,
      marginTop: "10px",
    }}
  >
    {subTitle}
  </h1>
);

export default SubTitle;
