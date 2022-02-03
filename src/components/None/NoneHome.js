import './NoneHome.css';
import Title from '../../AnimatedText/Title';

function NoneHome() {
  return (
    <div className="NoneHomeStyle">
      <div className="NoneNavbar"><a href="/experience" style={{textDecoration:"none"}}>About</a>&nbsp;&nbsp;&nbsp;<a href="/contact" style={{textDecoration:"none"}}>Contact</a> </div>
      <div className="NoneText">
        <div className="NoneHomeSubText">Hello 👋🏼, I am</div>
        <Title text="Himandri"/>
        <div className="NoneHomeParaText">I am a Front-End Developer who loves connecting with people<br/> through tech communities and learn new tech<br/> stacks to build cool things!</div>
        <a className="HomeResumeLink" href="https://drive.google.com/file/d/1dCDo0LqkU6jgN4XOwzLP_nNgKsgkjMxJ/view?usp=sharing">Link me to Resume</a>
      </div>
    </div>
  );
}

export default NoneHome;