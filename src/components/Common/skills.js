import './skills.css';
import CardSkill from '../../Card/cardskill';

function Skills() {
  return (
    <div className="SkillsStyle">
      <div className="SkillsContent">
        <div className="SkillsHeading">Skills</div>
        <div className="SkillsSpecific">
            <CardSkill title="Skills" text={["skill1","skill2"]}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;