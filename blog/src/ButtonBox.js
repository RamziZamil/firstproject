import React from "react";
import "./Home.css";

function ButtonBox() {
  return (
    <div className="box-container">
      <div className="boxes">
        <div className="allbuttons">
          <button className="buttons" onClick={()=>{alert("test")}}>Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
          <button className="buttons">Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default ButtonBox;
