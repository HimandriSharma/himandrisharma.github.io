import './home.css';
import side from '../../images/GameBoard.svg';
import Title from '../../AnimatedText/Title';

function Home() {
  return (
    <div className="HomeStyle">
      <div className="navbar"><a href="/about" style={{textDecoration:"none"}}>About</a>&nbsp;&nbsp;&nbsp;<a href="/contact" style={{textDecoration:"none"}}>Contact</a> </div>
      <img alt="" src={side} className="HomeImage"/>
      <div className="Text">
        <div className="HomeSubText">Hello 👋🏼, I am</div>
        <Title text="Himandri"/>
        <div className="HomeParaText">I am a Front-End Developer who loves connecting with people<br/> through tech communities and learn new tech<br/> stacks to build cool things!</div>
        <a className="HomeResumeLink" href="https://drive.google.com/file/d/1dCDo0LqkU6jgN4XOwzLP_nNgKsgkjMxJ/view?usp=sharing">Link me to Resume</a>
      </div>
    </div>
  );
}

export default Home;