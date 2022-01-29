import './education.css';
import CardEducation from '../../Card/cardEducation';

function Education() {
  return (
    <div className="EducationStyle">
      <div className="EducationContent">
        <div className="EducationHeading">Education</div>
        <div className="EducationSpecific">
            <CardEducation title="Education" date="date" text={["skill1"]}/>
        </div>
      </div>
    </div>
  );
}

export default Education;