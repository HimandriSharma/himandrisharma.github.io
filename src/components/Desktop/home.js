import "./home.css";
import side from "../../images/GameBoard.svg";
import Title from "../../AnimatedText/Title";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";

function Home() {
  const gaEventTracker = useAnalyticsEventTracker("Socials");
  return (
    <div className="HomeStyle">
      <div className="navbar">
        <a
          className="navIcon"
          onClick={() => gaEventTracker("resume")}
          href="https://drive.google.com/file/d/111e4q2Gk6QZ7aaWVU7s4EjepIyzrVF7Z/view?usp=sharing"
        >
          Resume
        </a>
      </div>
      <img alt="" src={side} className="HomeImage" />
      <div className="Text">
        <div className="HomeSubText">Hello 👋🏼, I am</div>
        <Title text="Himandri" />
        <div className="HomeParaText">
          I am a Front-End Developer who loves connecting with people
          <br /> through tech communities and learn new tech
          <br /> stacks to build cool things!
        </div>
      </div>
    </div>
  );
}

export default Home;
