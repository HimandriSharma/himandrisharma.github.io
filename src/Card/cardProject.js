import './cardProject.css';
import GitHub from '../images/GitHub.png';
import useWindowDimensions from '../useWindowDimensions';

function CardProject(props) {
  const ratio = useWindowDimensions();
  const isDesktop = ratio > 1.67 ;
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