import './experience.css';
import side from '../../images/Side.png';
import CardDesktop from '../../Card/cardDesktop';

function Experience() {
  return (
    <div className="ExperienceStyle">
      <img alt="" src={side} className="Experience-Image"/>
      <div className="ExperienceContent">
        <div className="ExperienceHeading">Experience</div>
        <CardDesktop title="Web Developer Intern at Nexstem Cortex BCI inc." date="Nov. 2020​ to Jan. 2021​" text={[`Experience on working with AWS services i.e. Cognito and Amplify.`,`Built React App.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/cortexbci.png")}/>
        <CardDesktop title="Web Developer Intern at Nexstem Cortex BCI inc." date="Nov. 2020​ to Jan. 2021​" text={[`Experience on working with AWS services i.e. Cognito and Amplify.`,`Built React App.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/Disecto.png")}/>
        <CardDesktop title="Web Developer Intern at Nexstem Cortex BCI inc." date="Nov. 2020​ to Jan. 2021​" text={[`Experience on working with AWS services i.e. Cognito and Amplify.`,`Built React App.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/dsc.png")}/>
        <CardDesktop title="Web Developer Intern at Nexstem Cortex BCI inc." date="Nov. 2020​ to Jan. 2021​" text={[`Experience on working with AWS services i.e. Cognito and Amplify.`,`Built React App.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/gcp.png")}/>
        <CardDesktop title="Web Developer Intern at Nexstem Cortex BCI inc." date="Nov. 2020​ to Jan. 2021​" text={[`Experience on working with AWS services i.e. Cognito and Amplify.`,`Built React App.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/wtmbvp.png")}/>
        <CardDesktop title="Web Developer Intern at Nexstem Cortex BCI inc." date="Nov. 2020​ to Jan. 2021​" text={[`Experience on working with AWS services i.e. Cognito and Amplify.`,`Built React App.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/happily.png")}/>
        <CardDesktop title="Web Developer Intern at Nexstem Cortex BCI inc." date="Nov. 2020​ to Jan. 2021​" text={[`Experience on working with AWS services i.e. Cognito and Amplify.`,`Built React App.`]} src={require("/home/himandri/Dev/reactfol/webme/src/images/Ardubotics.png")}/>
      </div>
    </div>
  );
}

export default Experience;