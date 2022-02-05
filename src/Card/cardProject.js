import './cardProject.css';
import GitHub from '../images/GitHub.png';
import { useWindowSize } from 'react-use';

function CardProject(props) {
  const size = useWindowSize();
  const isDesktop = size.width/size.height > 1.67 ; ;
    return (
      <div className={isDesktop?"CardProjectStyle":"CardProjectMobileStyle"}>
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