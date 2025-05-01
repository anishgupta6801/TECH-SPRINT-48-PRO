import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/Card';
import HealthIndicator from './ui/HealthIndicator';
import ProgressBar from './ui/ProgressBar';
import Badge from './ui/Badge';
import { 
  Equipment, 
  MaintenanceLog, 
  FailureHistory,
  ProductionData,
  EquipmentRiskScore 
} from '../types';

type EquipmentDetailProps = {
  equipment: Equipment;
  maintenanceLogs: MaintenanceLog[];
  failureHistory: FailureHistory[];
  productionData: ProductionData[];
  riskScore: EquipmentRiskScore | undefined;
  className?: string;
};

const EquipmentDetail: React.FC<EquipmentDetailProps> = ({ 
  equipment, 
  maintenanceLogs, 
  failureHistory,
  productionData,
  riskScore,
  className = '' 
}) => {
  const healthScore = riskScore ? 100 - riskScore.score : 100;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const calculateAge = (installationDate: string) => {
    const installed = new Date(installationDate);
    const now = new Date();
    const diffYears = (now.getTime() - installed.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears.toFixed(1);
  };

  const calculateTotalDowntime = () => {
    return failureHistory.reduce((total, failure) => total + failure.duration, 0);
  };
  
  const calculateTotalMaintenanceCost = () => {
    return maintenanceLogs.reduce((total, log) => total + log.cost, 0);
  };

  const calculateLastMaintenanceDays = () => {
    if (maintenanceLogs.length === 0) return 'Never';
    
    const sortedLogs = [...maintenanceLogs].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    const lastMaintenanceDate = new Date(sortedLogs[0].date);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - lastMaintenanceDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return `${diffDays} days ago`;
  };

  const recentFailures = failureHistory.length > 0 
    ? [...failureHistory].sort((a, b) => 
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      ).slice(0, 3)
    : [];

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Equipment information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{equipment.name}</span>
              {riskScore && <HealthIndicator score={healthScore} />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Type</h3>
                <p className="mt-1">{equipment.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Manufacturer</h3>
                <p className="mt-1">{equipment.manufacturer}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Model</h3>
                <p className="mt-1">{equipment.model}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="mt-1">{equipment.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Installation Date</h3>
                <p className="mt-1">{formatDate(equipment.installationDate)}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Age</h3>
                <p className="mt-1">{calculateAge(equipment.installationDate)} years</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Department</h3>
                <p className="mt-1">{equipment.department}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Downtime Cost</h3>
                <p className="mt-1">${equipment.costPerHour}/hour</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Expected Lifespan</h3>
                <p className="mt-1">{equipment.expectedLifespan} years</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk score information */}
        {riskScore && (
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-500">Risk Score</span>
                  <span className="text-sm font-medium">{riskScore.score}%</span>
                </div>
                <ProgressBar 
                  value={riskScore.score} 
                  max={100} 
                  variant={riskScore.score >= 75 ? 'danger' : riskScore.score >= 50 ? 'warning' : 'default'}
                />
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Prediction Timeframe</h3>
                <Badge 
                  variant={riskScore.timeFrame <= 7 ? 'danger' : riskScore.timeFrame <= 14 ? 'warning' : 'info'}
                >
                  {riskScore.timeFrame} Days
                </Badge>
                <span className="ml-2 text-sm text-gray-500">Confidence: {riskScore.confidence}%</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Top Contributing Factors</h3>
                <ul className="space-y-2">
                  {riskScore.contributingFactors.map((factor, index) => (
                    <li key={index} className="text-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span>{factor.factor}</span>
                        <span className="text-xs font-medium">{factor.impact}%</span>
                      </div>
                      <ProgressBar value={factor.impact} max={100} size="sm" />
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Recommended actions */}
      {riskScore && riskScore.recommendedActions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recommended Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-gray-200">
              {riskScore.recommendedActions.map((action, index) => (
                <li key={index} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-medium">{action.action}</h4>
                      <p className="text-sm text-gray-500 mt-1">Timeframe: {action.timeframe}</p>
                    </div>
                    <Badge 
                      variant={
                        action.priority === 'critical' ? 'danger' : 
                        action.priority === 'high' ? 'warning' :
                        action.priority === 'medium' ? 'info' : 'success'
                      }
                    >
                      {action.priority.charAt(0).toUpperCase() + action.priority.slice(1)}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm">
                      <span className="text-gray-500">Estimated Cost: </span>
                      <span className="font-medium">${action.estimatedCost.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-green-600 mt-1 sm:mt-0">
                      <span>Potential Savings: </span>
                      <span className="font-medium">${action.potentialSavings.toLocaleString()}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Maintenance Cost</h3>
            <p className="text-2xl font-bold mt-1">${calculateTotalMaintenanceCost().toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Downtime</h3>
            <p className="text-2xl font-bold mt-1">{calculateTotalDowntime()} hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm font-medium text-gray-500">Last Maintenance</h3>
            <p className="text-2xl font-bold mt-1">{calculateLastMaintenanceDays()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm font-medium text-gray-500">Failure Count (YTD)</h3>
            <p className="text-2xl font-bold mt-1">{failureHistory.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent failures */}
      {recentFailures.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Failures</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-gray-200">
              {recentFailures.map((failure) => (
                <li key={failure.id} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-medium">{failure.failureType}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatDate(failure.startDate)} • {failure.duration} hours downtime
                      </p>
                    </div>
                    <Badge 
                      variant={
                        failure.impact === 'critical' ? 'danger' : 
                        failure.impact === 'high' ? 'warning' :
                        failure.impact === 'medium' ? 'info' : 'success'
                      }
                    >
                      {failure.impact.charAt(0).toUpperCase() + failure.impact.slice(1)}
                    </Badge>
                  </div>
                  <div className="mt-2">
                    <div className="text-sm">
                      <span className="text-gray-500">Root Cause: </span>
                      <span>{failure.rootCause}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      <span className="text-gray-500">Resolution: </span>
                      <span>{failure.resolution}</span>
                    </div>
                    <div className="text-sm text-red-600 mt-1">
                      <span>Cost Impact: </span>
                      <span className="font-medium">${failure.costImpact.toLocaleString()}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View all failure history →
            </button>
          </CardFooter>
        </Card>
      )}

      {/* Maintenance log summary */}
      {maintenanceLogs.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Maintenance History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Technician
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[...maintenanceLogs]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .slice(0, 5)
                    .map((log) => (
                    <tr key={log.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(log.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Badge 
                          variant={
                            log.type === 'corrective' ? 'warning' :
                            log.type === 'predictive' ? 'success' : 'info'
                          }
                          size="sm"
                        >
                          {log.type.charAt(0).toUpperCase() + log.type.slice(1)}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.technician}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.duration} hrs
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${log.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View all maintenance logs ({maintenanceLogs.length}) →
            </button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default EquipmentDetail;