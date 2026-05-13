import { LuLayoutDashboard, LuPackage, LuUser } from "react-icons/lu";
import NavItem from "./NavItem";
import useSidebar from "./useSidebar";
import SidebarHeader from "./SidebarHeader";
import SidebarUser from "./SidebarUser";

const navItems = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: LuLayoutDashboard,
  },
  {
    to: "/products",
    label: "Products",
    icon: LuPackage,
  },
  {
    to: "/account",
    label: "Account",
    icon: LuUser,
  },
];

export default function SidebarContent() {
  const { isExpanded, closeMobile } = useSidebar();
  return (
    <nav className="flex h-full flex-col">
      <SidebarHeader />

      <ul
        className={`flex flex-1 flex-col gap-3 ${isExpanded ? "items-stretch" : "items-center"} `}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={<item.icon />}
            isExpanded={isExpanded}
            onClick={closeMobile}
          >
            {item.label}
          </NavItem>
        ))}
      </ul>

      <SidebarUser />
    </nav>
  );
}
