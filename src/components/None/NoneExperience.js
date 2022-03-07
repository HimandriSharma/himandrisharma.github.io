import './NoneExperience.css';
import CardMobile from '../../Card/cardMobile';
import Education from '../Common/education';
import Projects from '../Common/projects';
import Skills from '../Common/skills';
import {Link} from 'react-router-dom';

function NoneExperience() {
  return (
    <>
      <div className="NoneExperienceStyle">
        <div className="NoneNavbar"><a className="navIcon" href="https://drive.google.com/file/d/1dCDo0LqkU6jgN4XOwzLP_nNgKsgkjMxJ/view?usp=sharing"  >Resume</a>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/">Home</Link>&nbsp;&nbsp;&nbsp;<Link className="navIcon" to="/Socials">Socials</Link> </div>
        <div className="NoneExperienceContent">
          <div className="NoneExperienceHeading">Experience</div>
          <CardMobile title="Front-End Development Intern at Happily" date="Aug. 2021​ to Oct. 2021​" text={[`Incorporated Contentful within NextJS for smooth and quick content delivery on the Front-End.`,`Delivered content on Figma to the client for an easy and quick preview of the product.`,`Delivered content on Figma to cliet for easy and quick preview of product.`,`Made ongoing application responsive and implemented image optimization.`]} src={require("/home/himandri/Dev/himandrisharma.github.io/src/images/happily.png")}/>
          <CardMobile title="Front-End Developer Intern at Disecto" date="July. 2021​ to Aug. 2021​" text={[`Front-End to build a medical application.`,`Integration with APIs which work on abundance data for multiple patients to predict desired results.`,`Used ReactJS and ChakraUI for complex design implementation on the front-end.`,`Managed data flows within the application using Redux.`]} src={require("/home/himandri/Dev/himandrisharma.github.io/src/images/Disecto.png")}/>
          <CardMobile title="Software Developer Intern at Nexstem Cortex BCI inc." date="Nov. 2020​ to Jan. 2021​" text={[`Built authentication system using NodeJS and Passport.`,`Used AWS Cognito for user authentication.`,`Deployed application using AWS Amplify.`,`Worked on integration of Flutter with esp32 via Bluetooth.`]} src={require("/home/himandri/Dev/himandrisharma.github.io/src/images/cortexbci.png")}/>
          <CardMobile title="Google Cloud Facilitator" date="· Sept. 2020​ to Nov. 2020​​" text={[`Got trained under Developer Student Clubs(Powered by Google Developers) and Qwiklabs.`,`Organized 5+ Cloud workshops and gave hands-on with Google Cloud Platform.`]} src={require("/home/himandri/Dev/himandrisharma.github.io/src/images/gcp.png")}/>
          <CardMobile title="Lead at DSC BVP" date="Aug. 2020​ to Aug. 2021" text={[`Worked as a community manager on campus chosen via Google Developer Student Clubs.`,`Organized 15 + workshops with hands-on sessions on software and hardware fundamentals.`]} src={require("/home/himandri/Dev/himandrisharma.github.io/src/images/dsc.png")}/>
          <CardMobile title="Software Development Intern at Sunrun Motors" date="July 2020​ to Oct. 2020​​" text={[`Built a server to automate messaging through whatsapp using express.js and node.js.`,`Worked on building a mobile application using Flutter to track delivery vehicles.`]} src={require("/home/himandri/Dev/himandrisharma.github.io/src/images/sunrun.png")}/>
          <CardMobile title="Robotics Trainer at Ardubotics" date="July 2019​ to Jan. 2020​​" text={[`Robotics Trainer at Amity International School for primary grade students.`,`Worked for the development of students' technical knowledge and to give them exposure of the real world working of technical things that they're surrounded by and coding Arduino.`]} src={require("/home/himandri/Dev/himandrisharma.github.io/src/images/Ardubotics.png")}/>
          <CardMobile title="Robotics Expert at WTM BVP" date="June 2019​ to June 2020​" text={[`Worked for the representation of women community on campus and to promote more women.`,`Organized women-centric workshops on software and hardware fundamentals.`]} src={require("/home/himandri/Dev/himandrisharma.github.io/src/images/wtmbvp.png")}/>
          <CardMobile title="Executive, RNIS-H at DSC BVP" date="June 2020​ to June 2020​​" text={[`Robotics and Intelligence Systems (Hardware) in DSC BVP by Google.`,`Worked on the development of hardware projects.`,`Organized workshops on software and hardware fundamentals.`]} src={require("/home/himandri/Dev/himandrisharma.github.io/src/images/dsc.png")}/>
        </div>
        <Projects/>
        <Skills/>
        <Education/>
      </div>
    </>
  );
}

export default NoneExperience;