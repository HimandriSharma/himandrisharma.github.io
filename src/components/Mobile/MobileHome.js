import './MobileHome.css';
import GameBoard from '../../images/GameBoard.svg';
import Title from '../../AnimatedText/Title';
import {Link} from 'react-router-dom';

function MobileHome() {
  return (
    <div className="MobileHomeStyle">
        <div className="MobileNavbar"><a className="navIcon" href="https://drive.google.com/file/d/1ueZlkiE-17-scAGr5rY0Yk1ieeIKC8cX/view?usp=sharing"  >Resume</a>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/About"  >About</Link>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/Socials"  >Socials</Link> </div>
        <img src={GameBoard} alt="" className="MobileHomeImage"/>
        <div className="MobileHomeText">
            <div className="MobileHomeSubText">Hello 👋🏼, I am</div>
            <Title text="Himandri"/>
            <div className="MobileHomeParaText">I am a Front-End Developer who loves connecting <br/> with people through tech communities and learn<br/> new tech stacks to build cool things!</div>
        </div>
    </div>
  );
}

export default MobileHome;