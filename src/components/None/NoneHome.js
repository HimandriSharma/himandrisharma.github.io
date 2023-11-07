import "./NoneHome.css";
import Title from "../../AnimatedText/Title";
import { Link } from "react-router-dom";

function NoneHome() {
  return (
    <div className="NoneHomeStyle">
      <div className="NoneNavbar">
        <a
          className="navIcon"
          href="https://drive.google.com/file/d/1ueZlkiE-17-scAGr5rY0Yk1ieeIKC8cX/view?usp=sharing"
        >
          Resume
        </a>
        &nbsp;&nbsp;&nbsp;
        <Link className="navIcon" to="/About">
          About
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link className="navIcon" to="/Socials">
          Socials
        </Link>{" "}
      </div>
      <div className="NoneText">
        <div className="NoneHomeSubText">Hello 👋🏼, I am</div>
        <Title text="Himandri" />
        <div className="NoneHomeParaText">
          I am a Front-End Developer who loves connecting with people
          <br /> through tech communities and learn new tech
          <br /> stacks to build cool things!
        </div>
        <a
          href="https://himandrisharma.tk/landing-on-three/"
          target="_blank"
          rel="noreferrer"
          className="blink_me HomeParaText"
        >
          checkout the latest threeJS project by clicking here.
        </a>
      </div>
    </div>
  );
}

export default NoneHome;
