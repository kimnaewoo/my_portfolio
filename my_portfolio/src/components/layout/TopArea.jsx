import { useEffect } from "react";
import { Aboutme } from "../pages/Aboutme";
import { Project } from "../pages/Project";

export function TopArea() {
  const showPJ = () => {
    let about = document.querySelector("#about");
    let pj = document.querySelector("#projects");
    let skl = document.querySelector(".skill");
    let skls = document.querySelector(".skill span");
    let itd = document.querySelector(".introduce");
    let itds = document.querySelector(".introduce span");
    about.style.display = "none";
    pj.style.display = "flex";
    skl.style.backgroundColor = "#fff";
    skls.style.color = "rgb(0, 71, 187)";
    itd.style.backgroundColor = "rgb(0, 71, 187)";
    itds.style.color = "#fff";
    itds.style.fontSize = "1rem";
    skls.style.fontSize = "1.4rem";
  };
  const showAM = () => {
    let about = document.querySelector("#about");
    let pj = document.querySelector("#projects");
    let itd = document.querySelector(".introduce");
    let itds = document.querySelector(".introduce span");
    let skl = document.querySelector(".skill");
    let skls = document.querySelector(".skill span");
    about.style.display = "block";
    pj.style.display = "none";
    itd.style.backgroundColor = "#fff";
    itds.style.color = "rgb(0, 71, 187)";
    skl.style.backgroundColor = "rgb(0, 71, 187)";
    skls.style.color = "#fff";
    skls.style.fontSize = "1rem";
    itds.style.fontSize = "1.4rem";
  };

  useEffect(() => {
    const homeText = document.querySelector("h1");

    const content = "Front-end　developer";
    let count = 0;

    function typing() {
      homeText.innerText += content[count++];
      if (count > content.length) {
        homeText.innerText = "";
        count = 0;
      }
    }
    setInterval(typing, 150);
  });

  return (
    <>
      <header>
        <div className="head-back">
          <img src="./images/head_back.png" alt="head-back" />
        </div>
        <h1>{/* Front-end developer */}</h1>
        <p>안녕하세요. 신입 개발자 김내우입니다.</p>
      </header>
      <nav>
        <div className="skill">
          <span onClick={showPJ}>PROJECT</span>
        </div>
        <div className="introduce">
          <span onClick={showAM}>ABOUT ME</span>
        </div>
      </nav>
      <Project />
      <Aboutme />
    </>
  );
} // topArea 컴포넌트
