import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="border-brand-100 area-header flex items-center justify-between border-b bg-white/70 px-6 backdrop-blur-xl">
      <button onClick={onMenuClick} className="lg:hidden">
        <LuMenu size={24} />
      </button>

      <NavLink
        to="/"
        className="text-xl font-bold tracking-tight text-slate-900"
      >
        Product Dashboard
      </NavLink>

      <div>admin</div>
    </header>
  );
}
