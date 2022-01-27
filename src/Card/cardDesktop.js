import './cardDesktop.css';

function CardDesktop(props) {
  return (
    <div className="CardDesktopStyle">
      <img src={props.src} alt="" className="CardDesktopImage"/>
      <div className="CardDesktopContent">
        <div className="CardDesktopHeading">{props.title}</div>
        <div className="CardDesktopDate">{props.date}</div>
        <div className="CardDesktopText">
            <ul>
            {props.text.map(function(point, index){
                return <li key={ index }>{point}</li>;
            })}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default CardDesktop;