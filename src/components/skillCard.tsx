import "../App.css";

function SkillCard({
  skill,
  percentage,
}: {
  skill: string;
  percentage: number;
}) {
  return (
    <>
      <p className="skill_label">{skill}:</p>
      <div
        className="progressbar"
        title={percentage.toString()}
        style={
          {
            "--width": `${percentage}%`,
          } as React.CSSProperties
        }
      ></div>
    </>
  );
}

export default SkillCard;
