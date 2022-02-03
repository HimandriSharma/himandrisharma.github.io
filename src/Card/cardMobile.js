import './cardMobile.css';

function CardMobile(props) {
  return (
    <div className="CardMobileStyle">
      <div className="CardMobileHeading">{props.title}</div>
      <img src={props.src} alt="" className="CardMobileImage"/>
        <div className="CardMobileDate">{props.date}</div>
        <div className="CardMobileText">
            <ul>
            {props.text.map(function(point, index){
                return <li key={ index }>{point}</li>;
            })}
            </ul>
        </div>
    </div>
  );
}

export default CardMobile;