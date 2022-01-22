import './home.css';
import side from '../images/GameBoard.svg';
import Title from '../AnimatedText/Title';

function Home() {
  return (
    <div>
    <div className="HomeStyle">
      <img alt="" src={side} className="Image"/>
      <div className="Text">
        <div className="subText">Hello 👋🏼, I am</div>
        <Title text="Himandri"/>
        <div className="paraText">I am a Front-End Developer who loves connecting with people<br/> through tech communities and learn new tech<br/> stacks to build cool things!</div>
      </div>
    </div>
    </div>
  );
}

export default Home;