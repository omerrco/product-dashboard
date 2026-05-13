import { useState } from "react";
import SidebarContent from "./SidebarContent";
import { SidebarProvider } from "./SidebarContext";

type SidebarProps = {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
};

export default function Sidebar({ isMobileOpen, onCloseMobile }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded((curr) => !curr);

  return (
    <>
      {/* Desktop Sidebar */}
      <DesktopSidebar
        isExpanded={isExpanded}
        onToggleExpanded={toggleExpanded}
      />

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileOpen} onClose={onCloseMobile} />
    </>
  );
}

type DesktopSidebarProps = {
  isExpanded: boolean;
  onToggleExpanded: () => void;
};

function DesktopSidebar({ isExpanded, onToggleExpanded }: DesktopSidebarProps) {
  return (
    <aside
      className={`area-sidebar border-brand-100 hidden border-r bg-white/70 py-8 backdrop-blur-xl transition-all duration-300 lg:block ${isExpanded ? "w-72 px-6" : "w-20 px-2"}`}
    >
      <SidebarProvider
        value={{
          isExpanded,
          isMobile: false,
          toggleExpanded: onToggleExpanded,
        }}
      >
        <SidebarContent />
      </SidebarProvider>
    </aside>
  );
}

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`border-brand-100 fixed inset-y-0 left-0 z-50 w-72 border-r bg-white px-6 py-8 transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        <SidebarProvider
          value={{
            isExpanded: true,
            isMobile: true,
            closeMobile: onClose,
          }}
        >
          <SidebarContent />
        </SidebarProvider>
      </aside>
    </>
  );
}
