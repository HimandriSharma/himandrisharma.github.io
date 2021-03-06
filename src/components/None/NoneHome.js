import './NoneHome.css';
import Title from '../../AnimatedText/Title';
import {Link} from 'react-router-dom';

function NoneHome() {
  return (
    <div className="NoneHomeStyle">
      <div className="NoneNavbar"><a className="navIcon" href="https://drive.google.com/file/d/1UAVbtYNI1qz1kFOnxyzK-AlfNoDpBhTU/view"  >Resume</a>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/About"  >About</Link>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/Socials"  >Socials</Link> </div>
      <div className="NoneText">
        <div className="NoneHomeSubText">Hello 👋🏼, I am</div>
        <Title text="Himandri"/>
        <div className="NoneHomeParaText">I am a Front-End Developer who loves connecting with people<br/> through tech communities and learn new tech<br/> stacks to build cool things!</div>        
      </div>
    </div>
  );
}

export default NoneHome;