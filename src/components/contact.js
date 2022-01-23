import './contact.css';
import HollowBoard from '../images/GameBoardHollow.svg';
import MyImage from '../images/MyImage.png';

function Contact() {
  return (
    <div className="ContactStyle">
      <div className="navbar"><a href="/" style={{textDecoration:"none"}}>About</a>&nbsp;&nbsp;&nbsp;<a href="/" style={{textDecoration:"none"}}>Home</a> </div>
      <img alt="" src={HollowBoard} className="Image"/>
      <img alt="" src={MyImage} className="MyImage"/>
      <div className="Text">
        <div className="subText">Social Links</div>
        <div className="paraText">Github: <br/> LinkedIn: <br/> Twitter: <br/> Gmail: <br/></div>
      </div>
    </div>
  );
}

export default Contact;