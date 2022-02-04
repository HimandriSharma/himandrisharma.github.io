import './NoneContact.css';
import GithubLogo from '../../images/GitHub.png';
import TwitterLogo from '../../images/Twitter.png';
import LinkedInLogo from '../../images/LinkedIn.png';
import GmailLogo from '../../images/Gmail.png';
import {Link} from 'react-router-dom';


function NoneContact() {
  return (
    <div className="NoneContactStyle">
      <div className="NoneNavbar"><a href="https://drive.google.com/file/d/1dCDo0LqkU6jgN4XOwzLP_nNgKsgkjMxJ/view?usp=sharing" style={{textDecoration:"none"}}>Resume</a>&nbsp;&nbsp;&nbsp;<Link to="/experience" style={{textDecoration:"none"}}>About</Link>&nbsp;&nbsp;&nbsp;<Link to="/" style={{textDecoration:"none"}}>Home</Link> </div>
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