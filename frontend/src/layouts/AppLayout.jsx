import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Main content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
