import './MobileHome.css';
import GameBoard from '../../images/GameBoard.svg';
import Title from '../../AnimatedText/Title';
import {Link} from 'react-router-dom';

function MobileHome() {
  return (
    <div className="MobileHomeStyle">
        <div className="MobileNavbar"><a href="https://drive.google.com/file/d/1dCDo0LqkU6jgN4XOwzLP_nNgKsgkjMxJ/view?usp=sharing" style={{textDecoration:"none"}}>Resume</a>&nbsp;&nbsp;&nbsp;<Link to="/about" style={{textDecoration:"none"}}>About</Link>&nbsp;&nbsp;&nbsp;<Link to="/contact" style={{textDecoration:"none"}}>Contact</Link> </div>
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