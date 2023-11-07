import './NoneSocials.css';
import GithubLogo from '../../images/GitHub.png';
import TwitterLogo from '../../images/Twitter.png';
import LinkedInLogo from '../../images/LinkedIn.png';
import GmailLogo from '../../images/Gmail.png';
import {Link} from 'react-router-dom';


function NoneSocials() {
  return (
    <div className="NoneSocialsStyle">
      <div className="NoneNavbar"><a className="navIcon" href="https://drive.google.com/file/d/1ueZlkiE-17-scAGr5rY0Yk1ieeIKC8cX/view?usp=sharing"  >Resume</a>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/About"  >About</Link>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/"  >Home</Link> </div>
      <div className="NoneSocialsText">
        <div className="NoneSocialsSubText">Socials</div>
        <div className="NoneSocialsParaText">
          <div className="NoneSocialsAlign"><img src={GithubLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://github.com/HimandriSharma" style={{padding:"10px",textDecoration:"none",color:"black"}}>HimandriSharma 🔗</a></div> 
          <div className="NoneSocialsAlign"><img src={TwitterLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://twitter.com/himandri5" style={{padding:"10px",textDecoration:"none",color:"black"}}>@Himandri5 🔗</a></div>
          <div className="NoneSocialsAlign"><img src={LinkedInLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://www.linkedin.com/in/himandri-sharma/" style={{padding:"10px",textDecoration:"none",color:"black"}}>himandri-sharma 🔗</a></div>
          <div className="NoneSocialsAlign"><img src={GmailLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="mailto:himandrisharma27@gmail.com" style={{padding:"10px",textDecoration:"none",color:"black"}}>himandrisharma27@gmail.com</a></div>
        </div>
      </div>
    </div>
  );
}

export default NoneSocials;