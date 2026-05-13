import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

type NavItemProps = {
  to: string;
  icon: ReactNode;
  children: ReactNode;
  isExpanded: boolean;
  onClick?: () => void;
};

export default function NavItem({
  to,
  icon,
  children,
  isExpanded,
  onClick,
}: NavItemProps) {
  return (
    <li className={isExpanded ? "w-full" : "w-10"}>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `flex items-center rounded-lg text-sm font-medium transition-all duration-200 ${isExpanded ? "justify-start gap-3 px-3 py-3" : "h-10 w-10 justify-center"} ${
            isActive
              ? "bg-brand-100 text-brand-700"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          } `
        }
      >
        <span className="shrink-0 text-xl transition-transform duration-200 hover:scale-105">
          {icon}
        </span>

        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isExpanded ? "max-w-40 opacity-100" : "max-w-0 opacity-0"} `}
        >
          {children}
        </span>
      </NavLink>
    </li>
  );
}
