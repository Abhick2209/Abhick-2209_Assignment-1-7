function StatusBadge({ status }) {
  return (
    <span className={`status-badge ${status.toLowerCase()}`}>
      <span></span>
      {status}
    </span>
  );
}

export default StatusBadge;