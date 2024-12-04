import "./NoneHome.css";
import Title from "../../AnimatedText/Title";
// import { Link } from "react-router-dom";

function NoneHome() {
  return (
    <div className="NoneHomeStyle">
      <div className="NoneNavbar">
        <a
          className="navIcon"
          href="https://drive.google.com/file/d/1BtrvWoVix-gvVzDjQJQolf7cTmTeBuVE/view?usp=sharing"
        >
          Resume
        </a>
        {/* &nbsp;&nbsp;&nbsp;
         <Link className="navIcon" to="/About">
           About
        </Link> */}
        {/* &nbsp;&nbsp;&nbsp;
        <Link className="navIcon" to="/Socials">
          Socials
        </Link>{" "} */}
      </div>
      <div className="NoneText">
        <div className="NoneHomeSubText">Hello 👋🏼, I am</div>
        <Title text="Himandri" />
        <div className="NoneHomeParaText">
          I am a Software Engineer who loves connecting with people
          <br /> and learn new tech stacks to build cool things!
        </div>
        {/* <a
          href="https://himandrisharma.tk/landing-on-three/"
          target="_blank"
          rel="noreferrer"
          className="blink_me HomeParaText"
        >
          checkout the latest threeJS project by clicking here.
        </a> */}
      </div>
    </div>
  );
}

export default NoneHome;
