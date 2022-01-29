import './cardEducation.css';

function CardEducation(props) {
  return (
    <div className="CardEducationStyle">
        <div className="CardEducationHeading">{props.title}</div>
        <div className="CardEducationDate">{props.date}</div>
    </div>
  );
}

export default CardEducation;