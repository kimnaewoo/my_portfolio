import '../../css/aboutme.css';

export function Aboutme() {
  return (
    <>
      <div id="about">
        <h1 className="about-tit">👨🏻‍💻 MY PROFILE</h1>
        <div className="aboutme">
          <div className="imgbox">
            <img className="img" src="./images/profile.jpg" alt="프로필사진" />
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
                2023년 코딩을 처음 접하였고 더 많은 발전을 하기 위해 지금까지 열심히 달리고 있습니다. 다소 부족하지만
                부족한 지식은 하루하루 노력으로 채워가고 있습니다.
                <br /><br/> 빠르게 변하는 웹개발 트랜드 속에서,다양한 시도와 함께 사용자 입장을 고려하며 성실하게 성장하는
                프론트엔드 개발자가 되겠습니다.
              </p>
              <ul className="career">
                <li>2016. 8. 01 ~ 2017. 12. 30 젠하이드어웨이 파트셰프</li>
                <li>2020. 5. 08 ~ 2022. 6. 08 남양유업 생산장비관리직</li>
                <li>2022. 8. 01 ~ 2023. 6. 01 쿠쿠 앤 홈시스 A/S수리</li>
              </ul>
              <ul className="exp">
                <li>2019. 4. 10 ~ 2020. 4. 05 호주 워킹 & 홀리데이</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
