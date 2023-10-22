import { ReactNode } from "react";
import { MenuIcon } from "./icons/menu-icon";
import { SettingsIcon } from "./icons/settings-icon";
import { Logo } from "./logo";

const SidebarItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center rounded-xl w-11 h-11 cursor-pointer hover:bg-slate/10">
      {children}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between p-1 border-r border-lightgray gap-1">
      <div>
        <SidebarItem>
          <Logo />
        </SidebarItem>
      </div>
      <div className="flex flex-col justify-between items-center h-full">
        <div>
          <SidebarItem>
            <MenuIcon />
          </SidebarItem>
        </div>

        <div className="flex flex-col items-center">
          <SidebarItem>
            <SettingsIcon />
          </SidebarItem>
          <SidebarItem>
            <div className="rounded-full bg-blue w-8 h-8"></div>
          </SidebarItem>
        </div>
      </div>
    </div>
  );
};

type LayoutProps = {
  children: React.ReactNode;
  title: React.ReactNode;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="px-3 py-3 w-full h-screen overflow-auto">
        <header className="py-1 mb-4">
          <h2 className="font-medium text-xl">{title}</h2>
        </header>
        {children}
      </div>
    </div>
  );
};
