import React from "react";

import "./index.css";

export const TodoColorBox = props => {
  const { chosenColor, setColor, color } = props;
  return (
    <div
      style={
        chosenColor === color
          ? { backgroundColor: color, border: "2px solid #555555" }
          : { backgroundColor: color }
      }
      className={"box"}
      onClick={() => setColor(color)}
    ></div>
  );
};

export default TodoColorBox;
