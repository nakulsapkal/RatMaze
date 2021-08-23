import React from "react";
import "./Maze.css";
import Cell from "./Cell";
import Mice from "./mice.png";
import cheese from "./cheese.png";

export default function Maze(props) {
  let pathCount = 0;

  // function getRandomInt() {
  //   return Math.floor(Math.random() * (5 - 1 + 1) * 1);
  // }
  console.log("Size:", props.size);
  let rows = 4;
  let columns = 4;
  let matrix = Array(rows)
    .fill()
    .map(() => Array(columns).fill(0));

  console.log("Matrix", matrix);
  matrix[2][2] = 1;
  matrix[1][1] = 1;
  matrix[2][0] = 1;
  matrix[1][0] = 1;
  matrix[2][1] = 1;

  let paths = calculatePaths(matrix, 0, 0, rows, columns);

  function calculatePaths(matrix, i, j, rows, columns) {
    let paths = [];

    let visited = Array(rows)
      .fill()
      .map(() => Array(columns).fill(0));
    calculatePathsUtil(matrix, visited, i, j, rows, columns, []);
    //console.log("pathCount", pathCount);
    return paths;
    function calculatePathsUtil(
      matrix,
      visited,
      i,
      j,
      rows,
      columns,
      currentpath
    ) {
      console.log("i", i, "j", j);
      if (i < 0 || i >= rows || j < 0 || j >= columns) return;
      if (matrix[i][j] === 1 || visited[i][j] === 1) return;
      if (i === rows - 1 && j === columns - 1) {
        pathCount++;
        console.log("found a path");
        paths.push([...currentpath]);
        visited[i][j] = 0;
        return;
      }
      visited[i][j] = 1;
      //up
      console.log("UP:", i - 1, j, "currentPath", currentpath);
      currentpath.push([i - 1, j]);
      calculatePathsUtil(matrix, visited, i - 1, j, rows, columns, currentpath);
      currentpath.pop();

      //down
      console.log("DOWN:", i + 1, j, "currentPath", currentpath);
      currentpath.push([i + 1, j]);
      calculatePathsUtil(matrix, visited, i + 1, j, rows, columns, currentpath);
      currentpath.pop();

      //right
      console.log("Right:", i, j + 1, "currentPath", currentpath);
      currentpath.push([i, j + 1]);
      calculatePathsUtil(matrix, visited, i, j + 1, rows, columns, currentpath);
      currentpath.pop();

      //left
      console.log("LEFT:", i, j - 1, "currentPath", currentpath);
      currentpath.push([i, j - 1]);
      calculatePathsUtil(matrix, visited, i, j - 1, rows, columns, currentpath);
      currentpath.pop();

      visited[i][j] = 0;

      return;
    }
  }

  console.log("Paths:", paths);

  return (
    <>
      <p>Initial Maze</p>
      <div className="Maze-Grid">
        <Cell key={1} matrix={matrix} img={Mice} img2={cheese} />
      </div>
      <p>Total Paths:{pathCount}</p>
      {paths.map((pathData) => {
        return (
          <div className="Maze-Grid">
            <Cell
              key={1}
              matrix={matrix}
              img={Mice}
              img2={cheese}
              pathData={pathData}
            />
          </div>
        );
      })}
    </>
  );
}
