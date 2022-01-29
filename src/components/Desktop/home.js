import './home.css';
import side from '../../images/GameBoard.svg';
import Hello from '../../images/Hello.png';
import Title from '../../AnimatedText/Title';

function Home() {
  return (
    <div className="HomeStyle">
      <div className="navbar"><a href="/" style={{textDecoration:"none"}}>About</a>&nbsp;&nbsp;&nbsp;<a href="/" style={{textDecoration:"none"}}>Contact</a> </div>
      <img alt="" src={side} className="HomeImage"/>
      <div className="Text">
        <div className="HomeSubText">👋🏼<img src={Hello} alt="" style={{height:"3vmin"}}/>  I am</div>
        <Title text="Himandri"/>
        <div className="HomeParaText">I am a Front-End Developer who loves connecting with people<br/> through tech communities and learn new tech<br/> stacks to build cool things!</div>
      </div>
    </div>
  );
}

export default Home;