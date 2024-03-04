import "../App.css";

function AboutSection({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="about_section">
      <h2 className="second_title">{title}</h2>
      <hr></hr>
      {children}
    </div>
  );
}

export default AboutSection;
