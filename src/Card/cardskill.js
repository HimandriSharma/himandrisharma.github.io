import './cardSkill.css';
import useWindowDimensions from '../useWindowDimensions';

function CardSkill(props) {
    const ratio = useWindowDimensions();
    const isNotDesktop = !(ratio < 0.88) ;
    const ulcardSkill = isNotDesktop?"ulcardSkill":"ulcardMobile";
    const licardSkill = isNotDesktop?"licardSkill":"";
    return (
      <div className="CardSkillStyle">
        <div className="CardSkillHeading">{props.title}</div>
        <div className="CardSkillText">
          <ul className={ulcardSkill}>
          {props.text.map(function(point, index){
              return <li className={licardSkill} key={ index }>{point}</li>;
          })}
          </ul>
        </div>
      </div>
    );
  }
  
  export default CardSkill;