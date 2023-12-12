import "./home.css";
import side from "../../images/GameBoard.svg";
import Title from "../../AnimatedText/Title";
import { Link } from "react-router-dom";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";

function Home() {
  const gaEventTracker = useAnalyticsEventTracker("Socials");
  return (
    <div className="HomeStyle">
      <div className="navbar">
        <a
          className="navIcon"
          onClick={() => gaEventTracker("resume")}
          href="https://drive.google.com/file/d/1ueZlkiE-17-scAGr5rY0Yk1ieeIKC8cX/view?usp=sharing"
        >
          Resume
        </a>
        // &nbsp;&nbsp;&nbsp;
        // <Link className="navIcon" to="/About">
        //   About
        // </Link>
        &nbsp;&nbsp;&nbsp;
        <Link className="navIcon" to="/Socials">
          Socials
        </Link>{" "}
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
        {/* <a
          href="https://himandrisharma.tk/landing-on-three/"
          target="_blank"
          rel="noreferrer"
          className="blink_me HomeParaText"
          style={{ paddingLeft: "2rem" }}
        >
          checkout the latest threeJS project by clicking here.
        </a> */}
      </div>
    </div>
  );
}

export default Home;
