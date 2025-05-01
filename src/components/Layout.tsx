import React from 'react';
import { Home, Settings, BarChart2, PenTool as Tool, Clock, HardDrive, AlertCircle, Users, FileText } from 'lucide-react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-blue-900">
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-blue-950">
            <h1 className="text-xl font-bold text-white">PredictMaint</h1>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            <NavItem icon={<Home />} label="Dashboard" isActive />
            <NavItem icon={<HardDrive />} label="Equipment" />
            <NavItem icon={<BarChart2 />} label="Analytics" />
            <NavItem icon={<AlertCircle />} label="Alerts" />
            <NavItem icon={<Clock />} label="Maintenance Schedule" />
            <NavItem icon={<Tool />} label="Work Orders" />
            <NavItem icon={<Users />} label="Technicians" />
            <NavItem icon={<FileText />} label="Reports" />

            <div className="pt-4 mt-6 border-t border-blue-800">
              <NavItem icon={<Settings />} label="Settings" />
            </div>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white shadow-sm h-16 flex items-center">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
            <div className="md:hidden text-xl font-bold text-blue-900">PredictMaint</div>
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="User profile"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">Alex</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <a
      href="#"
      className={`
        flex items-center px-2 py-2 text-sm font-medium rounded-md 
        ${isActive ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800 hover:text-white'}
      `}
    >
      <span className="mr-3 h-5 w-5">{icon}</span>
      {label}
    </a>
  );
};

export default Layout;