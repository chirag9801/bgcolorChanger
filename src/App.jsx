import { useState } from "react";

function App() {
  const [color, setColor] = useState("lavender");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-end bottom-12 inset-x-0 px-2 py-4">
        <div className="flex flex-col justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-2 py-2 rounded text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-2 py-2 rounded text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-2 py-2 rounded text-white shadow-lg"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-2 py-2 rounded text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-2 py-2 rounded text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-2 py-2 rounded text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-2 py-2 rounded text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-2 py-2 rounded text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-2 py-2 rounded text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-2 py-2 rounded text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
