import React from "react";

export const Head = ({styler, h1 }) => {
  return (
    <div className={styler}>
      <p>{h1}</p>
    </div>
  );
};
