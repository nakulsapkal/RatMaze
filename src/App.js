import { useState, useRef } from "react";
import "./App.css";
import Maze from "./Maze.js";
function App() {
  const sizeAllocate = useRef(null);
  const [size, setSize] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    setSize(sizeAllocate.current.value);
  };

  return (
    <div>
      <div className="App-form">
        <form onSubmit={submitForm}>
          <label>Insert size for maze:</label>
          <input type="text" ref={sizeAllocate} />
          <button>SET SIZE</button>
        </form>
      </div>

      <div className="App-Grid">
        {size && <Maze size={size} />}
        <p>Initial Maze</p>
        <p>Total Paths:0</p>
      </div>
    </div>
  );
}

export default App;
