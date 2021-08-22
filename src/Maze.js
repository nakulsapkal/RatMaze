import React from "react";
import "./Maze.css";
import { Grid } from "@material-ui/core";
import Cell from "./Cell";
import Mice from "./mice.png";
import cheese from "./cheese.png";

export default function Maze(props) {
  console.log(props.size);

  for (let index = 0; index < 5; index++) {
    <Grid className="Maze" item></Grid>;
  }

  return (
    <div className="Maze-Grid">
      {/* <Grid container spacing={0}>
        {[1, 2, 3, 4, 5].map((valueOuter) => {
          return [1, 2, 3, 4, 5].map((valueInner) => {
            return <Cell key={valueInner} mice={Mice} />;
          });
        })}
      </Grid> */}
      {[1, 2, 3, 4, 5].map((valueOuter) => {
        return [1, 2, 3, 4, 5].map((valueInner) => {
          if (valueOuter === 1 && valueInner === 1) {
            return <Cell key={valueInner} img={Mice} />;
          } else if (valueOuter === 5 && valueInner === 5) {
            return <Cell key={valueInner} img={Mice} />;
          } else {
            return <Cell key={valueInner} />;
          }
        });
      })}
    </div>
  );
}
