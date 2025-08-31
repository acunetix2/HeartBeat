import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Logs from "@/pages/Logs";
import Alerts from "@/pages/Alerts";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes inside layout */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AppLayout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="logs" element={<Logs />} />
        <Route path="alerts" element={<Alerts />} />
      </Route>
    </Routes>
  );
}

export default App;
