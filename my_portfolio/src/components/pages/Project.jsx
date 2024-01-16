import "../../css/project.css";

export function Project() {
  return (
    <>
      <section id="projects">
        <article className="project">
          <img src="./images/SPURS.png" alt="spurs" />
          <h2>Tottenham Hotspur</h2>
          <p>본 프로젝트는 React-route를 이용하여 로그인, 페이지전환, 등으로 구성되어 있는 Web Project 입니다.</p>
          <p className="front">
            <span>skill</span>
            React, HTML, CSS3, Java-script, Swiper, jQuery
          </p>
          <a href="https://kimnaewoo.github.io/kimnaewoo-react-pj/" target="_blank">
            View Project
          </a>
        </article>
        <article className="project">
          <img src="./images/BEAN.jpg" alt="빈폴" />
          <h2>BEANPOLE</h2>
          <p>본 프로젝트는 React-route를 이용하여 로그인, 페이지전환, 등으로 구성되어 있는 Web Project 입니다.</p>
          <p className="front">
            <span>skill</span>
            HTML, CSS3, Java-script
          </p>
          <a
            href="http://127.0.0.1:5501/%EB%B9%88%ED%8F%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/main.html"
            target="_blank"
          >
            View Project
          </a>
        </article>
      </section>
    </>
  );
}
