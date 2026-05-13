import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
import SidebarLogo from "./SidebarLogo";
import useSidebar from "./useSidebar";

const iconButtonClass =
  "flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-brand-100";

export default function SidebarHeader() {
  const { isExpanded, isMobile, closeMobile, toggleExpanded } = useSidebar();
  return (
    <div
      className={`border-brand-100 mb-5 flex items-center border-b pb-4 ${isExpanded ? "justify-between" : "justify-center"} `}
    >
      {isExpanded && <SidebarLogo onCloseMobile={closeMobile} />}

      {isMobile ? (
        <button onClick={closeMobile} className={iconButtonClass}>
          <LuX size={22} />
        </button>
      ) : (
        <button onClick={toggleExpanded} className={iconButtonClass}>
          {isExpanded ? (
            <LuChevronLeft size={20} />
          ) : (
            <LuChevronRight size={22} />
          )}
        </button>
      )}
    </div>
  );
}
