import './MobileContact.css';
import GithubLogo from '../../images/GitHub.png';
import TwitterLogo from '../../images/Twitter.png';
import LinkedInLogo from '../../images/LinkedIn.png';
import GmailLogo from '../../images/Gmail.png';
import {Link} from 'react-router-dom';

function MobileContact() {
  return (
    <div className="MobileContactStyle">
      <div className="MobileContactNavbar"><Link to="/about" style={{textDecoration:"none"}}>About</Link>&nbsp;&nbsp;&nbsp;<Link to="/" style={{textDecoration:"none"}}>Home</Link></div>
      <div className="MobileContactText">
        <div className="MobileContactSubText">Social Links</div>
        <div className="MobileContactParaText">
          <div className="MobileContactAlign"><img src={GithubLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://github.com/HimandriSharma" style={{padding:"10px",textDecoration:"none",color:"black"}}>HimandriSharma 🔗</a></div> 
          <div className="MobileContactAlign"><img src={TwitterLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://twitter.com/himandri5" style={{padding:"10px",textDecoration:"none",color:"black"}}>@Himandri5 🔗</a></div>
          <div className="MobileContactAlign"><img src={LinkedInLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://www.linkedin.com/in/himandri-sharma/" style={{padding:"10px",textDecoration:"none",color:"black"}}>himandri-sharma 🔗</a></div>
          <div className="MobileContactAlign"><img src={GmailLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><div style={{padding:"10px",textDecoration:"none",color:"black"}}>himandrisharma27@gmail.com</div></div>
        </div>
      </div>
    </div>
  );
}

export default MobileContact;