import "../../css/aboutme.css";

export function Aboutme() {
  return (
    <>
      <div id="about">
        <h1 className="about-tit">👨🏻‍💻 MY PROFILE</h1>
        <div className="aboutme">
          <div className="imgbox">
            <img className="img" src="./images/profile.jpg" alt="프로필사진" />
            <img className="img" src="./images/profile2.jpg" alt="프로필사진2" />
          </div>
          <div className="content">
            <div className="introTitle">
              <b className="name">
                김내우 <span>KIM NAE WOO</span>
              </b>
              <p className="birth">1994년 7월 15일</p>
              <p className="email">gnag0403@naver.com</p>
            </div>
            <div className="introInfo">
              <p className="info">
                2023년 코딩을 처음 접하였고 웹개발을 하기 위해 지금까지 열심히 달리고 있습니다.
                <br /> 다소 부족하지만 부족한 지식은 하루하루 노력으로 채워가고 있습니다. <br />
                빠르게 변하는 웹개발 트랜드 속에서,다양한 시도와 함께 사용자 입장을 고려하며 성실하게 성장하는
                프론트엔드 개발자가 되겠습니다.
              </p>
              <div className="career">
                <li>2016. 8. 01 ~ 2017. 12. 30 젠하이드어웨이 파트셰프</li>
                <li>2020. 5. 08 ~ 2022. 06. 08 남양유업 생산장비관리직</li>
                <li>2022. 8. 01 ~ 2023. 06. 01 쿠쿠 앤 홈시스 A/S수리</li>
              </div>
              <div className="exp">
                <li>2019. 4. 10 ~ 2020. 04. 05 호주 워킹 & 홀리데이</li>
              </div>
            </div>
          </div>
        </div>
        <div className="my-skill">
          <h1 className="skill-tit">💻 MY SKILL</h1>
          <ul className="skill">
            <li>
              <img src="./images/skill/html.png" alt="html" />
            </li>
            <li>
              <img src="./images/skill/css.png" alt="css" />
            </li>
            <li>
              <img src="./images/skill/javascript.png" alt="javascript" />
            </li>
            <li>
              <img src="./images/skill/jquery.png" alt="jquery" />
            </li>
            <li>
              <img src="./images/skill/react.png" alt="react" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
