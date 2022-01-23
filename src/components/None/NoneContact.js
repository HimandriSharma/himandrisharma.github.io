import './NoneContact.css';
import HollowBoard from '../../images/GameBoardHollow.svg';
import MyImage from '../../images/MyImage.png';
import GithubLogo from '../../images/GitHub.png';
import TwitterLogo from '../../images/Twitter.png';
import LinkedInLogo from '../../images/LinkedIn.png';
import GmailLogo from '../../images/Gmail.png';


function NoneContact() {
  return (
    <div className="NoneContactStyle">
      <div className="navbar"><a href="/" style={{textDecoration:"none"}}>About</a>&nbsp;&nbsp;&nbsp;<a href="/" style={{textDecoration:"none"}}>Home</a> </div>
      <div className="NoneContactText">
        <div className="NoneContactSubText">Social Links</div>
        <div className="NoneContactParaText">
          <div className="NoneContactAlign"><img src={GithubLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://github.com/HimandriSharma" style={{padding:"10px",textDecoration:"none",color:"black"}}>HimandriSharma 🔗</a></div> 
          <div className="NoneContactAlign"><img src={TwitterLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://twitter.com/himandri5" style={{padding:"10px",textDecoration:"none",color:"black"}}>@Himandri5 🔗</a></div>
          <div className="NoneContactAlign"><img src={LinkedInLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://www.linkedin.com/in/himandri-sharma/" style={{padding:"10px",textDecoration:"none",color:"black"}}>himandri-sharma 🔗</a></div>
          <div className="NoneContactAlign"><img src={GmailLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><div style={{padding:"10px",textDecoration:"none",color:"black"}}>himandrisharma27@gmail.com</div></div>
        </div>
      </div>
    </div>
  );
}

export default NoneContact;