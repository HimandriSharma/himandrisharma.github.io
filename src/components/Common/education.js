import './education.css';
import CardEducation from '../../Card/cardEducation';

function Education() {
  return (
    <div className="EducationStyle">
      <div className="EducationContent">
        <div className="EducationHeading">Education</div>
        <div className="EducationSpecific">
            <CardEducation title="Bharati Vidyapeeth's College Of Engineering" date="July 2018 to July 2022"/>
            <CardEducation title="Lady Irwin School" date="April 2006 to April 2018"/>
        </div>
      </div>
    </div>
  );
}

export default Education;