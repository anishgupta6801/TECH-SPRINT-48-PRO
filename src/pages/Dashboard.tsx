import React, { useState } from 'react';
import Layout from '../components/Layout';
import DashboardHeader from '../components/DashboardHeader';
import EquipmentRiskCard from '../components/EquipmentRiskCard';
import MaintenanceScheduleTable from '../components/MaintenanceScheduleTable';
import EquipmentDetail from '../components/EquipmentDetail';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

import { 
  mockEquipment, 
  mockMaintenanceSchedule, 
  mockRiskScores,
  getDashboardStats,
  getMaintenanceLogsForEquipment,
  getFailureHistoryForEquipment,
  getProductionDataForEquipment
} from '../data/mockData';

const Dashboard: React.FC = () => {
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string | null>(null);
  
  const stats = getDashboardStats();
  
  // Get sorted equipment by risk score (high to low)
  const sortedEquipment = [...mockEquipment].sort((a, b) => {
    const scoreA = mockRiskScores.find(risk => risk.equipmentId === a.id)?.score || 0;
    const scoreB = mockRiskScores.find(risk => risk.equipmentId === b.id)?.score || 0;
    return scoreB - scoreA;
  });

  const highRiskEquipment = sortedEquipment.filter(eq => {
    const score = mockRiskScores.find(risk => risk.equipmentId === eq.id)?.score || 0;
    return score >= 50;
  });

  const selectedEquipment = selectedEquipmentId 
    ? mockEquipment.find(eq => eq.id === selectedEquipmentId)
    : null;

  const handleEquipmentClick = (equipmentId: string) => {
    setSelectedEquipmentId(equipmentId === selectedEquipmentId ? null : equipmentId);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <DashboardHeader stats={stats} />
        
        {selectedEquipment ? (
          <div>
            <button 
              onClick={() => setSelectedEquipmentId(null)}
              className="mb-4 inline-flex items-center text-sm font-medium text-blue-800 hover:text-blue-900"
            >
              ← Back to Dashboard
            </button>
            
            <EquipmentDetail 
              equipment={selectedEquipment}
              maintenanceLogs={getMaintenanceLogsForEquipment(selectedEquipment.id)}
              failureHistory={getFailureHistoryForEquipment(selectedEquipment.id)}
              productionData={getProductionDataForEquipment(selectedEquipment.id)}
              riskScore={mockRiskScores.find(risk => risk.equipmentId === selectedEquipment.id)}
            />
          </div>
        ) : (
          <>
            {/* High Risk Equipment */}
            <Card>
              <CardHeader className="pb-0">
                <CardTitle className="text-xl text-red-700">High Risk Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {highRiskEquipment.map(equipment => (
                    <EquipmentRiskCard
                      key={equipment.id}
                      equipment={equipment}
                      riskScore={mockRiskScores.find(risk => risk.equipmentId === equipment.id)!}
                      onClick={() => handleEquipmentClick(equipment.id)}
                    />
                  ))}
                  {highRiskEquipment.length === 0 && (
                    <div className="col-span-full py-6 text-center text-gray-500">
                      No high-risk equipment detected at this time.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* All Equipment */}
            <Card>
              <CardHeader className="pb-0">
                <CardTitle className="text-xl">All Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedEquipment.filter(eq => {
                    const score = mockRiskScores.find(risk => risk.equipmentId === eq.id)?.score || 0;
                    return score < 50;
                  }).map(equipment => (
                    <EquipmentRiskCard
                      key={equipment.id}
                      equipment={equipment}
                      riskScore={mockRiskScores.find(risk => risk.equipmentId === equipment.id)!}
                      onClick={() => handleEquipmentClick(equipment.id)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Maintenance Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Upcoming Maintenance Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <MaintenanceScheduleTable
                  schedules={mockMaintenanceSchedule}
                  equipment={mockEquipment}
                />
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;