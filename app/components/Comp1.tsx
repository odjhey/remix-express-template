import React from "react";

export interface CompProps {
  label: string;
  backgroundColor: string;
}

const Comp1 = (props: CompProps) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <h1>{props.label || "lesl"}</h1>
    </div>
  );
};

export default Comp1;
