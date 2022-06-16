import './projects.css';
import CardProject from '../../Card/cardProject';

function Projects() {
  return (
    <div className="ProjectsStyle">
      <div className="ProjectsContent">
        <div className="ProjectsHeading">Projects</div>
        <div className="ProjectsSpecific">
          <CardProject title="Emotion Logs" stacks="TypeScript, Jest" text={["Built TypeScript NPM Module from scratch to ease out printing colorful console logs by calling functions with your emotion name.","Integerated automated tests using Jest."]} link="https://github.com/HimandriSharma/emotion-logs"/>
          <CardProject title="Payments SDK" stacks="TypeScript" text={["A TypeScript NPM Module built for generating payment link, QR Code and Validate Transaction for GoodDollar.","Used ethers NPM package for integration with Fuse RPC.","Tests done using Mocha/Chai."]} link="https://github.com/GoodDollar/PaymentSDK"/>
          <CardProject title="InstaDoge" stacks="ReactJS" text={["A React.JS website to scroll through dog images for fun.","Integrated API using Axios to fetch images.","Responsive gallery look using CSS."]} link="/"/>
          <CardProject title="NoQueue" stacks="Flutter" text={["A mobile application built using flutter.","Creates appointments for students to avoid standing in long queues.","Helps to maintain social distancing during COVID time while maximizing the efficiency."]} link="https://github.com/HimandriSharma/Instadoge"/>
          <CardProject title="Domain Specific Learner and Facilitator Assist Software"  stacks="Python NLTK" text={["Built software to summarize corpus of data to indexed data and generating ppts, enable contextual searching, and n level summarization.","Uses python to generate ppts and NLTK to summarize content logically.","Helps teachers to devote minimum time on formatting and arranging data."]} link="https://github.com/HimandriSharma/NoQueue"/>
          <CardProject title="Spider Bots" stacks="Arduino ESP8266" text={["It is a nature-inspired robot that is capable of walking on most terrains.","A quadruped robot built with spider structure, using the networking via esp8266 and sync via Arduino."]} link="https://github.com/HimandriSharma/Spider_bots"/>
        </div>
      </div>
    </div>
  );
}

export default Projects;