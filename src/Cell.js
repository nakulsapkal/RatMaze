import React from "react";
import "./Cell.css";
export default function Cell(props) {
  //console.log("Path", props.pathData);

  return (
    <>
      {props.matrix.map((rows, rowIndex) => {
        console.log("rowindex:", rowIndex);
        return (
          <>
            {rows.map((data, columnindex) =>
              rowIndex === 0 && columnindex === 0 ? (
                <div className="cell">
                  {rowIndex}
                  {columnindex}
                  <img
                    style={{ width: "100%", height: "90%" }}
                    alt="complex"
                    src={props.img}
                  />
                </div>
              ) : rowIndex === 3 && columnindex === 3 ? (
                <div className="cell">
                  {rowIndex}
                  {columnindex}
                  <img
                    style={{ width: "100%" }}
                    alt="complex"
                    src={props.img2}
                  />
                </div>
              ) : data === 1 ? (
                <div className="cell-red">
                  {rowIndex}
                  {columnindex}
                </div>
              ) : props.pathData?.find(
                  (coordinates) =>
                    coordinates[0] === rowIndex &&
                    coordinates[1] === columnindex
                ) ? (
                <div className="cell-green">
                  {rowIndex}
                  {columnindex}
                </div>
              ) : (
                <div className="cell">
                  {rowIndex}
                  {columnindex}
                </div>
              )
            )}
          </>
        );
      })}
    </>
  );
}
