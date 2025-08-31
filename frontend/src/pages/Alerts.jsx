import AlertCard from "@/components/AlertsCard";

function Alerts() {
  const alerts = [
    {
      id: 1,
      title: "Brute Force Attempt",
      severity: "high",
      description: "Multiple failed logins detected."
    },
    {
      id: 2,
      title: "Suspicious Traffic",
      severity: "medium",
      description: "Unusual outbound connections."
    },
    {
      id: 3,
      title: "System Stable",
      severity: "low",
      description: "No critical issues reported."
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Alerts</h1>
      {alerts.map((alert) => (
        <AlertCard key={alert.id} {...alert} />
      ))}
    </div>
  );
}

export default Alerts;
