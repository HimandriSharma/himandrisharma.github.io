import './cardProject.css';

function CardProject(props) {
    return (
      <div className="CardProjectStyle">
        <div className="CardProjectHeading">{props.title}</div>
        <div className="CardProjectStacks">{props.stacks}</div>
        <div className="CardProjectText">
            <ul>
            {props.text.map(function(point, index){
                return <li key={ index }>{point}</li>;
            })}
            </ul>
        </div>
      </div>
    );
  }
  
  export default CardProject;