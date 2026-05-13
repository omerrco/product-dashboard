import { NavLink } from "react-router-dom";

type SidebarLogo = {
  onCloseMobile?: () => void | undefined;
};

export default function SidebarLogo({ onCloseMobile }: SidebarLogo) {
  return (
    <NavLink
      to="/"
      onClick={onCloseMobile}
      className="flex min-w-0 items-center overflow-hidden"
    >
      <div className="bg-brand-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-white">
        PD
      </div>

      <span className="ml-3 text-lg font-semibold tracking-tight whitespace-nowrap text-slate-900">
        Product D
      </span>
    </NavLink>
  );
}
