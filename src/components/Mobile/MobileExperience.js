import './MobileExperience.css';
import CardDesktop from '../../Card/cardDesktop';

function MobileExperience() {
  return (
    <div className="MobileExperienceStyle">
      <div className="MobileExperienceHeading">Experience</div>
      <CardDesktop title="Front-End Development Intern at Happily" date="Aug. 2021​ to Oct. 2021​" text={[`Worked as a sole bridge between marketing and web development.`,`Incorporated Contentful within NextJS for smooth and quick content delivery on the Front-End.`,`Delivered content on Figma to cliet for easy and quick preview of product.`,`Quality Assured all the deliverables.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/happily.png")}/>
      <CardDesktop title="Front-end Developer Intern at Disecto" date="July. 2021​ to Aug. 2021​" text={[`Initialized Front-End to build medical application which work on abundance data for multiple patients to predict desired results using machine learning and mathematical computations with complete responsiveness using chakraUI.`,`Worked with data flow within the application using Redux.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/Disecto.png")}/>
      <CardDesktop title="Web Developer Intern at Nexstem Cortex BCI inc." date="Nov. 2020​ to Jan. 2021​" text={[`Experience on working with AWS services i.e. Cognito and Amplify.`,`Built React App.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/cortexbci.png")}/>
      <CardDesktop title="Google Cloud Facilitator" date="· Sept. 2020​ to Nov. 2020​​" text={[`Working with Developer Student Clubs(Powered by Google Developers) and Qwiklabs.`,`Introduced more than 190 students to the concept of Cloud and gave hands-on with Google Cloud Platform.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/gcp.png")}/>
      <CardDesktop title="Lead at DSC BVP" date="Aug. 2020​ to Aug. 2021" text={[`Managing a community for betterment of Students to grow and help them to learn new Google technologies.`,`Working with group of 300 students to solve real world problems.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/dsc.png")}/>
      <CardDesktop title="Intern at Sunrun Motors" date="July 2020​ to Oct. 2020​​" text={[`Built a server to automate messaging through whatsapp using express.js and node.js.`,`Worked on building a mobile application using Flutter to track delivery vehicles.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/sunrun.png")}/>
      <CardDesktop title="Hardware Intern at Ardubotics" date="July 2019​ to Jan. 2020​​" text={[`Robotics Trainer at Amity International School for primary grade students.`,`Worked for the development of students' technical knowledge and to give them exposure of the real world working of technical things that they're surrounded by and coding Arduino.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/Ardubotics.png")}/>
      <CardDesktop title="Robotics Expert at WTM BVP" date="June 2019​ to June 2020​" text={[`Worked for the representation of women community on campus and to promote more women.`,`Organized women-centric workshops on software and hardware fundamentals.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/wtmbvp.png")}/>
      <CardDesktop title="Executive, RNIS-H at DSC BVP" date="June 2020​ to June 2020​​" text={[`Robotics and Intelligence Systems (Hardware) in DSC BVP by Google.`,`Worked on the development of hardware projects.`,`Organized workshops on software and hardware fundamentals.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/dsc.png")}/>
    </div>
  );
}

export default MobileExperience;