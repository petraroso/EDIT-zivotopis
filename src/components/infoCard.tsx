import "../App.css";

function InfoCard({ label, info }: { label: string; info: string }) {
  return (
    <div className="info_card">
      <p className="info_label">{label}:</p>
      <p className="info_value">{info}</p>
    </div>
  );
}

export default InfoCard;
