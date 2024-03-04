import avatar from "../assets/avatar.jpg";
import "../App.css";
import AboutSection from "./aboutSection";
import InfoCard from "./infoCard";
import SkillCard from "./skillCard";

function Curriculum() {
  return (
    <>
      <h1>Petra Web Dev</h1>
      <a href="https://github.com/petraroso" target="_blank">
        <img
          src={avatar}
          className="avatar_image"
          alt="Avatar image of Petra"
          title="Go to Petra's GitHub"
        />
      </a>
      <AboutSection title={"Opći podaci"}>
        <InfoCard label="Godina rođenja" info="90's"></InfoCard>
        <InfoCard label="Adresa" info="Hrvatska"></InfoCard>
        <InfoCard label="Kontakt" info="primjer@gmail.com"></InfoCard>
      </AboutSection>
      <AboutSection title={"Vještine"}>
        <SkillCard skill="React" percentage={70}></SkillCard>
        <SkillCard skill="HTML" percentage={70}></SkillCard>
        <SkillCard skill="CSS" percentage={70}></SkillCard>
        <SkillCard skill="JavaScript" percentage={60}></SkillCard>
        <SkillCard skill="SQL" percentage={60}></SkillCard>
        <SkillCard skill="Git/GitHub" percentage={50}></SkillCard>
        <SkillCard skill="C/C++" percentage={50}></SkillCard>
        <SkillCard skill="TypeScript" percentage={20}></SkillCard>
      </AboutSection>
    </>
  );
}

export default Curriculum;
