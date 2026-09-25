function StatCard({ label, value, detail, icon, accent }) {
  return (
    <div className={`stat-card ${accent}`}>
      <div className="stat-card-top">
        <span>{label}</span>
        <div className="stat-card-icon">{icon}</div>
      </div>

      <strong>{value}</strong>

      <small>{detail}</small>
    </div>
  );
}

export default StatCard;