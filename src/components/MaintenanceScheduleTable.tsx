import React from 'react';
import { MaintenanceSchedule, Equipment } from '../types';
import Badge from './ui/Badge';

type MaintenanceScheduleTableProps = {
  schedules: MaintenanceSchedule[];
  equipment: Equipment[];
  className?: string;
};

const MaintenanceScheduleTable: React.FC<MaintenanceScheduleTableProps> = ({ 
  schedules, 
  equipment,
  className = '' 
}) => {
  const getEquipmentName = (equipmentId: string) => {
    const found = equipment.find(item => item.id === equipmentId);
    return found ? found.name : 'Unknown Equipment';
  };

  const getPriorityBadge = (priority: 'low' | 'medium' | 'high' | 'critical') => {
    switch (priority) {
      case 'critical':
        return <Badge variant="danger">Critical</Badge>;
      case 'high':
        return <Badge variant="warning">High</Badge>;
      case 'medium':
        return <Badge variant="info">Medium</Badge>;
      case 'low':
        return <Badge variant="success">Low</Badge>;
    }
  };

  const getTypeBadge = (type: 'preventive' | 'corrective' | 'predictive') => {
    switch (type) {
      case 'preventive':
        return <Badge variant="info" size="sm">Preventive</Badge>;
      case 'corrective':
        return <Badge variant="warning" size="sm">Corrective</Badge>;
      case 'predictive':
        return <Badge variant="success" size="sm">Predictive</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Sort schedules by date and priority
  const sortedSchedules = [...schedules].sort((a, b) => {
    // First by date
    const dateComparison = new Date(a.plannedDate).getTime() - new Date(b.plannedDate).getTime();
    if (dateComparison !== 0) return dateComparison;
    
    // Then by priority
    const priorityMap = { 'critical': 0, 'high': 1, 'medium': 2, 'low': 3 };
    return priorityMap[a.priority] - priorityMap[b.priority];
  });

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Equipment
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Priority
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Duration
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Est. Cost
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Potential Savings
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Technician
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedSchedules.map((schedule) => (
            <tr key={schedule.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {getEquipmentName(schedule.equipmentId)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(schedule.plannedDate)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {getTypeBadge(schedule.type)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getPriorityBadge(schedule.priority)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {schedule.estimatedDuration} hrs
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${schedule.estimatedCost.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                ${schedule.potentialSavings.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {schedule.technician}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaintenanceScheduleTable;