import './NoneSkills.css';
import CardSkill from '../../Card/cardskill';

function NoneSkills() {
  return (
    <div className="NoneSkillsStyle">
      <div className="NoneSkillsContent">
        <div className="NoneSkillsHeading">NoneSkills</div>
        <div className="NoneSkillsSpecific">
            <CardSkill title="NoneSkills" text={["skill1","skill2"]}/>
        </div>
      </div>
    </div>
  );
}

export default NoneSkills;