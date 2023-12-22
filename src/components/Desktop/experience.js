import "./experience.css";
import CardDesktop from "../../Card/cardDesktop";
import Education from "../Common/education";
import Projects from "../Common/projects";
import Skills from "../Common/skills";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <>
      <div className="ExperienceStyle">
        <div className="ExperienceNavbar">
          <a
            className="navIcon"
            href="https://drive.google.com/file/d/111e4q2Gk6QZ7aaWVU7s4EjepIyzrVF7Z/view?usp=sharing"
          >
            Resume
          </a>
          &nbsp;&nbsp;&nbsp;
          <Link className="navIcon" to="/">
            Home
          </Link>
          {/* &nbsp;&nbsp;&nbsp;
          <Link className="navIcon" to="/Socials">
            Socials
          </Link>{" "} */}
        </div>
        <div className="ExperienceHeading">Experience</div>
        <CardDesktop
          title="Senior Front-End Developer at Add3"
          date="Feb. 2023 to present​"
          text={[
            `Collaborated closely with Designers, Backend, and Blockchain Engineers to develop an end-to-end Web3 Product.`,
            `Utilized React, TypeScript, Redux, Redux-Thunk, Websockets, react-i18next, and ChakraUI to ensure seamless feature functionality and provide an intuitive user experience.`,
            `Managed a team of front-end developers, fostering clear communication and achievable deadlines between the Development team and Management.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/Add3.png")}
        />
        <CardDesktop
          title="Front-End Developer at Ecocrumb"
          date="Jan. 2022 to Jan. 2023"
          text={[
            `Worked with designers and backend developers to build a dashboard with complex UI components and data flow within the application.`,
            `Delivered features with search, CRUD, dynamic tables, and accurate styling. Realized redundancy in front-end code and built common components.`,
            `Received outstanding customer reviews on UI and styling on the front end and smooth interaction with features.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/ecocrumb.png")}
        />
        <CardDesktop
          title="Front-End Developer at Happily"
          date="Aug. 2021​ to Oct. 2021​"
          text={[
            `Built feature-rich dashboards using ReactJS, Redux, Redux-thunk, and AntD with LESS.`,
            `Integrated Cypress for e2e testing and component testing.`,
            `Reduced build time by 40% using Esbuild with Webpack.`,
            `Designed and restructured the user interface to improve user efficiency by 50%.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/happily.png")}
        />
        <CardDesktop
          title="Front-End Developer at Disecto"
          date="July. 2021​ to Aug. 2021​"
          text={[
            `Built the Front-End of a medical application.`,
            `Integration with APIs which work on abundance data for multiple patients to predict desired results.`,
            `Used ReactJS and ChakraUI for complex design implementation on the front-end.`,
            `Managed data flows within the application using Redux.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/Disecto.png")}
        />
        <CardDesktop
          title="Software Developer at Nexstem Cortex BCI inc."
          date="Nov. 2020​ to Jan. 2021​"
          text={[
            `Built authentication system using NodeJS and Passport.`,
            `Used AWS Cognito for user authentication.`,
            `Deployed application using AWS Amplify.`,
            `Worked on integration of Flutter with esp32 via Bluetooth.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/cortexbci.png")}
        />
        <CardDesktop
          title="Google Cloud Facilitator"
          date="· Sept. 2020​ to Nov. 2020​​"
          text={[
            `Got trained under Developer Student Clubs(Powered by Google Developers) and Qwiklabs.`,
            `Organized 5+ Cloud workshops and gave hands-on with Google Cloud Platform.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/gcp.png")}
        />
        <CardDesktop
          title="Lead at DSC BVP"
          date="Aug. 2020​ to Aug. 2021"
          text={[
            `Worked as a community manager on campus chosen via Google Developer Student Clubs.`,
            `Organized 15 + workshops with hands-on sessions on software and hardware fundamentals.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/dsc.png")}
        />
        {/* <CardDesktop
          title="Software Developer at Sunrun Motors"
          date="July 2020​ to Oct. 2020​​"
          text={[
            `Built a server to automate messaging through whatsapp using express.js and node.js.`,
            `Worked on building a mobile application using Flutter to track delivery vehicles.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/sunrun.png")}
        />
        <CardDesktop
          title="Robotics Trainer at Ardubotics"
          date="July 2019​ to Jan. 2020​​"
          text={[
            `Robotics Trainer at Amity International School for primary grade students.`,
            `Worked for the development of students' technical knowledge and to give them exposure of the real world working of technical things that they're surrounded by and coding Arduino.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/Ardubotics.png")}
        />
        <CardDesktop
          title="Robotics Expert at WTM BVP"
          date="June 2019​ to June 2020​"
          text={[
            `Worked for the representation of women community on campus and to promote more women.`,
            `Organized women-centric workshops on software and hardware fundamentals.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/wtmbvp.png")}
        />
        <CardDesktop
          title="Executive, RNIS-H at DSC BVP"
          date="June 2020​ to June 2020​​"
          text={[
            `Robotics and Intelligence Systems (Hardware) in DSC BVP by Google.`,
            `Worked on the development of hardware projects.`,
            `Organized workshops on software and hardware fundamentals.`,
          ]}
          src={require("/home/himandri/Dev/React/himandrisharma.github.io/src/images/dsc.png")}
        /> */}
        <Projects />
        <Skills />
        <Education />
      </div>
    </>
  );
}

export default Experience;
