import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Bell, Shield, Activity, Server } from "lucide-react";

// === Navbar Component ===
function DashboardNavbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">HeartBeat SIEM</h1>
      <div className="flex gap-6">
        <button className="hover:text-orange-400">Dashboard</button>
        <button className="hover:text-orange-400">Alerts</button>
        <button className="hover:text-orange-400">Logs</button>
        <button className="hover:text-orange-400">Reports</button>
      </div>
      <div className="flex items-center gap-3">
        <Bell className="w-5 h-5 text-orange-400" />
        <span className="text-sm">Admin</span>
      </div>
    </nav>
  );
}

// === Footer Component ===
function DashboardFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-10 text-sm">
      © {new Date().getFullYear()} HeartBeat SIEM | Phantom Power Inc.
    </footer>
  );
}

// === Alerts Card ===
function AlertsCard({ title, count, icon: Icon, color }) {
  return (
    <div className="flex-1 bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{count}</p>
      </div>
    </div>
  );
}

// === Logs Table ===
function LogsTable({ logs }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Recent Logs</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="p-3">Timestamp</th>
            <th className="p-3">Source</th>
            <th className="p-3">Event</th>
          </tr>
        </thead>
        <tbody>
          {logs.length > 0 ? (
            logs.map((log, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3">{log.timestamp}</td>
                <td className="p-3">{log.source}</td>
                <td className="p-3">{log.event}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-3 text-gray-500">
                No logs available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// === Dashboard Component ===
function Dashboard() {
  const { token, loading } = useAuth();
  const [alerts, setAlerts] = useState({ critical: 0, warnings: 0, info: 0 });
  const [logs, setLogs] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        setLoadingData(true);
        const res = await fetch("http://localhost:5000/api/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setAlerts(data.alerts || { critical: 0, warnings: 0, info: 0 });
        setLogs(data.logs || []);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, [token]);

  if (loading || loadingData) return <div className="p-6 text-center">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <DashboardNavbar />
      <main className="flex-1 p-6">
        {/* Alerts Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <AlertsCard
            title="Critical Alerts"
            count={alerts.critical}
            icon={Shield}
            color="bg-red-500"
          />
          <AlertsCard
            title="Warnings"
            count={alerts.warnings}
            icon={Activity}
            color="bg-yellow-500"
          />
          <AlertsCard
            title="Info"
            count={alerts.info}
            icon={Server}
            color="bg-blue-500"
          />
        </div>

        {/* Logs Table */}
        <LogsTable logs={logs} />
      </main>
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;
