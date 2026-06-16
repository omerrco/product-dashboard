import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="area-header flex items-center border-b border-b-slate-100 bg-white px-4 sm:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-md p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
        aria-label="Open navigation"
      >
        <LuMenu size={24} />
      </button>

      <NavLink
        to="/"
        className="mx-auto text-xl font-bold tracking-tight text-slate-900 lg:mx-0"
      >
        Product Dashboard
      </NavLink>
    </header>
  );
}
