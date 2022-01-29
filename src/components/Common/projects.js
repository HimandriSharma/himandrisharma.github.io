import './projects.css';
import CardProject from '../../Card/cardProject';

function Projects() {
  return (
    <div className="ProjectsStyle">
      <div className="ProjectsContent">
        <div className="ProjectsHeading">Projects</div>
        <div className="ProjectsSpecific">
            <CardProject title="Projects" stacks="stacks" text={["skill1","skill2","skill3"]}/>
            <CardProject title="Projects" stacks="stacks" text={["skill1","skill2","skill3"]}/>
            <CardProject title="Projects" stacks="stacks" text={["skill1","skill2","skill3"]}/>
        </div>
      </div>
    </div>
  );
}

export default Projects;