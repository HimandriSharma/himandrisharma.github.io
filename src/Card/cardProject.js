import './cardProject.css';
import GitHub from '../images/GitHub.png';
import { useWindowSize } from 'react-use';

function CardProject(props) {
  const size = useWindowSize();
  const isMobile = size.width/size.height < 0.88 ;
    return (
      <div className={isMobile?"CardProjectMobileStyle":"CardProjectStyle"}>
        <div className="CardProjectHeading">{props.title}</div>
        <div className="CardProjectStacks">{props.stacks}</div>
        <div className="CardProjectText">
            <ul>
            {props.text.map(function(point, index){
              return <li key={ index }>{point}</li>;
            })}
            </ul>
        </div>
        {props.link?<a href={props.link}><img src={GitHub} alt="github link here" className="CardProjectLogo"/></a>:<div/>}
      </div>
    );
  }
  
  export default CardProject;