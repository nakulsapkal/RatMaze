import React from "react";
import "./Cell.css";
export default function Cell(props) {
  return (
    <>
      <div className="cell">
        {props.valueInner}
        {props.valueouter}
        <img src={props.img} alt="" />
      </div>
    </>
  );
}
