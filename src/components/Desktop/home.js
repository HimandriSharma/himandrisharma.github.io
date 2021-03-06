import './home.css';
import side from '../../images/GameBoard.svg';
import Title from '../../AnimatedText/Title';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="HomeStyle">
      <div className="navbar"><a className="navIcon" href="https://drive.google.com/file/d/1UAVbtYNI1qz1kFOnxyzK-AlfNoDpBhTU/view"  >Resume</a>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/About"  >About</Link>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/Socials"  >Socials</Link> </div>
      <img alt="" src={side} className="HomeImage"/>
      <div className="Text">
        <div className="HomeSubText">Hello 👋🏼, I am</div>
        <Title text="Himandri"/>
        <div className="HomeParaText">I am a Front-End Developer who loves connecting with people<br/> through tech communities and learn new tech<br/> stacks to build cool things!</div>
      </div>
    </div>
  );
}

export default Home;