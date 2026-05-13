import { createContext, type ReactNode } from "react";

type SidebarContextValue = {
  isExpanded: boolean;
  isMobile: boolean;
  toggleExpanded?: () => void;
  closeMobile?: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

type SidebarProviderProps = {
  children: ReactNode;
  value: SidebarContextValue;
};

export function SidebarProvider({ children, value }: SidebarProviderProps) {
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export default SidebarContext;
