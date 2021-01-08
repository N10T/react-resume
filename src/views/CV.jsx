import Card from "../components/Card";

function CV(props) {
  return (
    <div id="resume" className="cv grid-container">
        <aside id="profile">
            <img className="picture" src={props.resume.picture} alt="profile"></img>
            <p className="content">
                TO DO
            </p>
        </aside>
      <Card id="work" array={props.resume.works} title="Works experience" />
      <Card id="education" array={props.resume.educations} title="Education" />
      <Card id="hobbies" array={props.resume.hobbies} title="Hobbies" noDate noDescription isHorizontal/>
    </div>
  );
}




export default CV;
