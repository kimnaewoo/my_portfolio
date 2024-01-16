// 폰트어썸 불러오기

import { Aboutme } from "../pages/Aboutme";
import { Project } from "../pages/Project";

export function TopArea() {
  const showPJ = () => {
    let about = document.querySelector("#about");
    let pj = document.querySelector("#projects");
    about.style.display = "none";
    pj.style.display = "block";
  };
  const showAM = () => {
    let about = document.querySelector("#about");
    let pj = document.querySelector("#projects");
    about.style.display = "block";
    pj.style.display = "none";
  };
  return (
    <>
      <header>
        <div className="head-back">
          <img src="./images/head_back.png" alt="head-back" />
        </div>
        <h1>Front-end developer</h1>
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
      <Aboutme />
      <Project />
    </>
  );
} // topArea 컴포넌트
