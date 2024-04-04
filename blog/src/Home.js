import React from "react";
import "./Home.css";
import Boxes from "./Boxes";
import ButtonBox from "./ButtonBox";

function Home() {
  return (
    <div>
      <header className="head">Tarmeez Academy</header>
      <div className="container">
        <div className="boxsss">
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
        </div>
        <div className="btn">
          <ButtonBox />
        </div>
      </div>
    </div>
  );
}

export default Home;
