import React from 'react';
import { Settings, BarChart2, FileText, Database } from 'lucide-react';
import { DashboardStats } from '../types';
import InfoCard from './ui/InfoCard';

type DashboardHeaderProps = {
  stats: DashboardStats;
  className?: string;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ stats, className = '' }) => {
  return (
    <div className={`${className}`}>
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Predictive Maintenance Dashboard</h1>
        <div className="mt-2 md:mt-0 flex space-x-2">
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FileText className="mr-2 h-4 w-4" />
            Export Report
          </button>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </button>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          title="Total Equipment"
          value={stats.totalEquipment}
          icon={<Database className="h-5 w-5" />}
        />
        <InfoCard
          title="High Risk Equipment"
          value={stats.highRiskCount}
          icon={<BarChart2 className="h-5 w-5" />}
          trend={{ value: 8, direction: 'up' }}
        />
        <InfoCard
          title="Average Health Score"
          value={`${Math.round(stats.averageHealthScore)}%`}
          icon={<BarChart2 className="h-5 w-5" />}
          trend={{ value: 3, direction: 'down' }}
        />
        <InfoCard
          title="Estimated Savings"
          value={`$${stats.estimatedSavings.toLocaleString()}`}
          icon={<BarChart2 className="h-5 w-5" />}
          trend={{ value: 12, direction: 'up' }}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;