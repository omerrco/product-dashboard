import { LuEllipsisVertical } from "react-icons/lu";
import useSidebar from "./useSidebar";

export default function SidebarUser() {
  const { isExpanded } = useSidebar();
  return (
    <div
      className={`border-brand-100 mt-5 flex items-center border-t pt-5 ${isExpanded ? "justify-start" : "justify-center"} `}
    >
      <div className="bg-brand-100 text-brand-700 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-medium">
        JD
      </div>

      <div
        className={`flex min-w-0 items-center justify-between overflow-hidden transition-all duration-300 ${isExpanded ? "ml-3 max-w-52 opacity-100" : "ml-0 max-w-0 opacity-0"} `}
      >
        <div className="min-w-0 leading-4">
          <h4 className="truncate font-semibold text-slate-900">John Doe</h4>

          <span className="block truncate text-sm text-slate-500">
            johndoe@gmail.com
          </span>
        </div>

        <button className="ml-3 shrink-0 text-slate-500 transition hover:text-slate-900">
          <LuEllipsisVertical size={20} />
        </button>
      </div>
    </div>
  );
}
