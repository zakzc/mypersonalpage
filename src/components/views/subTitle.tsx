import React from "react";

interface SubTitleProps {
  color: string, 
  subTitle: string
}

const SubTitle: React.FC<SubTitleProps> = ({ color, subTitle }) => (
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
