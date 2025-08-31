import Navbar from "@/components/Navbar";
import AlertsCard from "@/components/AlertsCard";
import LogsTable from "@/components/LogTable";

const mockLogs = [
  { timestamp: "2025-08-31 14:10", source: "Firewall", event: "Blocked suspicious IP" },
  { timestamp: "2025-08-31 14:12", source: "Server01", event: "Failed login attempt" },
];

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <div className="flex gap-6 mb-6">
          <AlertsCard title="Critical Alerts" count={5} />
          <AlertsCard title="Warnings" count={12} />
          <AlertsCard title="Info" count={42} />
        </div>
        <LogsTable logs={mockLogs} />
      </div>
    </div>
  );
}

export default DashboardPage;
