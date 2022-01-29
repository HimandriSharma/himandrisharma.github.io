import './skills.css';
import CardSkill from '../../Card/cardskill';

function Skills() {
  return (
    <div className="SkillsStyle">
      <div className="SkillsContent">
        <div className="SkillsHeading">Skills</div>
        <div className="SkillsSpecific">
            <CardSkill title="Languages" text={["JavaScript/Typescript","HTML","Java","CSS","XML","Markdown"]}/>
            <CardSkill title="Frameworks" text={["ReactJs","NextJS","NodeJS","Flutter","Mocha/Chai"]}/>
            <CardSkill title="Tools" text={["GitHub CLI","VS Code"]}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;