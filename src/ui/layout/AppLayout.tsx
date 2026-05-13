import { Outlet } from "react-router-dom";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

export default function AppLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="layout bg-app min-h-screen">
      <Header onMenuClick={() => setIsMobileSidebarOpen(true)} />

      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      <main className="area-main px-10 py-8">
        <Outlet />
      </main>
    </div>
  );
}
