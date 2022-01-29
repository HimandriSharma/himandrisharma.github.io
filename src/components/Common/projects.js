import './projects.css';
import CardProject from '../../Card/cardProject';

function Projects() {
  return (
    <div className="ProjectsStyle">
      <div className="ProjectsContent">
        <div className="ProjectsHeading">Projects</div>
        <div className="ProjectsSpecific">
            <CardProject title="InstaDoge" stacks="ReactJS" text={["A React.JS website to scroll through dog images for fun."]}/>
            <CardProject title="NoQueue" stacks="Flutter" text={["A mobile application built using flutter.","Creates appointments for students to avoid standing in long queues.","Helps to maintain social distancing during COVID time while maximizing the efficiency."]}/>
            <CardProject title="Domain Specific Learner and Facilitator Assist Software"  stacks="Python NLTK" text={["Built software to summarize corpus of data to indexed data and generating ppts, enable contextual searching, and n level summarization.","Uses python to generate ppts and NLTK to summarize content logically.","Helps teachers to devote minimum time on formatting and arranging data."]}/>
            <CardProject title="Spider Bots" stacks="Arduino ESP8266" text={["It is a nature-inspired robot that is capable of walking on most terrains.","A quadruped robot built with spider structure, using the networking via esp8266 and sync via Arduino."]}/>
        </div>
      </div>
    </div>
  );
}

export default Projects;