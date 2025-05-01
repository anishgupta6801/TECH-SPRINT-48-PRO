import { 
  Equipment, 
  MaintenanceLog, 
  FailureHistory, 
  ProductionData,
  EquipmentRiskScore,
  MaintenanceSchedule
} from '../types';

// Defining DashboardStats at the top for better declaration order
export interface DashboardStats {
  totalEquipment: number;
  highRiskCount: number;
  scheduledMaintenance: number;
  estimatedSavings: number;
  averageHealthScore: number;
}

// Mock equipment data
export const mockEquipment: readonly Equipment[] = [
  {
    id: 'EQ001',
    name: 'Production Line A',
    type: 'Assembly Line',
    manufacturer: 'Siemens',
    model: 'AL-2000',
    installationDate: '2019-05-15',
    expectedLifespan: 15,
    location: 'Building 3, Floor 1',
    department: 'Production',
    costPerHour: 2500,
  },
  {
    id: 'EQ002',
    name: 'CNC Machine 1',
    type: 'Machining',
    manufacturer: 'Haas',
    model: 'VF-2',
    installationDate: '2020-02-20',
    expectedLifespan: 10,
    location: 'Building 2, Floor 1',
    department: 'Machining',
    costPerHour: 1200,
  },
  {
    id: 'EQ003',
    name: 'Packaging Unit 2',
    type: 'Packaging',
    manufacturer: 'ABB',
    model: 'PKG-500',
    installationDate: '2021-10-10',
    expectedLifespan: 12,
    location: 'Building 1, Floor 2',
    department: 'Packaging',
    costPerHour: 800,
  },
  {
    id: 'EQ004',
    name: 'Industrial Robot 3',
    type: 'Robotic Arm',
    manufacturer: 'KUKA',
    model: 'KR QUANTEC',
    installationDate: '2018-08-05',
    expectedLifespan: 8,
    location: 'Building 3, Floor 1',
    department: 'Assembly',
    costPerHour: 1800,
  },
  {
    id: 'EQ005',
    name: 'Hydraulic Press 2',
    type: 'Press',
    manufacturer: 'Schuler',
    model: 'HP-1000',
    installationDate: '2017-03-30',
    expectedLifespan: 20,
    location: 'Building 2, Floor 1',
    department: 'Pressing',
    costPerHour: 2000,
  },
  {
    id: 'EQ006',
    name: 'Conveyor System B',
    type: 'Conveyor',
    manufacturer: 'Interroll',
    model: 'CS-5000',
    installationDate: '2020-07-15',
    expectedLifespan: 15,
    location: 'Building 1-3 Connector',
    department: 'Logistics',
    costPerHour: 500,
  },
] as const;

// Mock maintenance logs
export const mockMaintenanceLogs: readonly MaintenanceLog[] = [
  {
    id: 'ML001',
    equipmentId: 'EQ001',
    date: '2023-10-15',
    type: 'preventive',
    action: 'Lubrication and inspection',
    technician: 'John Smith',
    parts: [
      { id: 'P001', name: 'Lubricant', quantity: 2, cost: 45 },
      { id: 'P002', name: 'Filter', quantity: 1, cost: 75 }
    ],
    duration: 3,
    cost: 420,
    notes: 'Everything in good condition.',
  },
  {
    id: 'ML002',
    equipmentId: 'EQ002',
    date: '2023-09-05',
    type: 'corrective',
    action: 'Replace spindle bearings',
    technician: 'Maria Garcia',
    parts: [
      { id: 'P003', name: 'Spindle bearing set', quantity: 1, cost: 850 }
    ],
    duration: 8,
    cost: 1650,
    notes: 'Observed unusual vibration before replacement.',
  },
  {
    id: 'ML003',
    equipmentId: 'EQ003',
    date: '2023-11-20',
    type: 'preventive',
    action: 'Software update and calibration',
    technician: 'Alex Johnson',
    parts: [],
    duration: 2,
    cost: 150,
    notes: 'Updated to software version 3.5.2',
  },
  {
    id: 'ML004',
    equipmentId: 'EQ001',
    date: '2023-08-12',
    type: 'corrective',
    action: 'Replace broken belt',
    technician: 'John Smith',
    parts: [
      { id: 'P004', name: 'Drive belt', quantity: 1, cost: 120 }
    ],
    duration: 4,
    cost: 520,
    notes: 'Belt snapped during normal operation.',
  },
  {
    id: 'ML005',
    equipmentId: 'EQ004',
    date: '2023-10-25',
    type: 'predictive',
    action: 'Recalibrate arm joint',
    technician: 'Lisa Chen',
    parts: [],
    duration: 2,
    cost: 200,
    notes: 'Detected positioning drift in recent operations.',
  },
  {
    id: 'ML006',
    equipmentId: 'EQ005',
    date: '2023-07-30',
    type: 'preventive',
    action: 'Hydraulic fluid change',
    technician: 'Maria Garcia',
    parts: [
      { id: 'P005', name: 'Hydraulic fluid', quantity: 20, cost: 300 },
      { id: 'P006', name: 'Seals', quantity: 4, cost: 80 }
    ],
    duration: 6,
    cost: 880,
    notes: 'Regular scheduled maintenance.',
  },
  {
    id: 'ML007',
    equipmentId: 'EQ002',
    date: '2023-11-05',
    type: 'predictive',
    action: 'Tool holder inspection',
    technician: 'Alex Johnson',
    parts: [],
    duration: 1,
    cost: 100,
    notes: 'Predicted wear based on usage patterns.',
  },
] as const;

// Mock failure history
export const mockFailureHistory: readonly FailureHistory[] = [
  {
    id: 'F001',
    equipmentId: 'EQ001',
    startDate: '2023-08-10',
    endDate: '2023-08-12',
    duration: 48,
    failureType: 'Mechanical',
    failureCode: 'BELT-01',
    impact: 'high',
    costImpact: 120000,
    rootCause: 'Belt wear due to misalignment',
    resolution: 'Replaced belt and realigned pulleys',
  },
  {
    id: 'F002',
    equipmentId: 'EQ002',
    startDate: '2023-09-03',
    endDate: '2023-09-05',
    duration: 16,
    failureType: 'Bearing',
    failureCode: 'BRG-03',
    impact: 'medium',
    costImpact: 19200,
    rootCause: 'Insufficient lubrication',
    resolution: 'Replaced bearings and updated lubrication schedule',
  },
  {
    id: 'F003',
    equipmentId: 'EQ005',
    startDate: '2023-06-15',
    endDate: '2023-06-18',
    duration: 72,
    failureType: 'Hydraulic',
    failureCode: 'HYD-05',
    impact: 'critical',
    costImpact: 144000,
    rootCause: 'Seal failure causing fluid leak',
    resolution: 'Replaced all seals and hydraulic fluid',
  },
  {
    id: 'F004',
    equipmentId: 'EQ004',
    startDate: '2023-10-20',
    endDate: '2023-10-21',
    duration: 8,
    failureType: 'Software',
    failureCode: 'SW-02',
    impact: 'low',
    costImpact: 14400,
    rootCause: 'Software crash due to memory leak',
    resolution: 'System reboot and software patch',
  },
  {
    id: 'F005',
    equipmentId: 'EQ003',
    startDate: '2023-11-15',
    endDate: '2023-11-15',
    duration: 4,
    failureType: 'Electrical',
    failureCode: 'EL-04',
    impact: 'low',
    costImpact: 3200,
    rootCause: 'Power surge damaged control board',
    resolution: 'Replaced control board and installed surge protector',
  },
] as const;

// Mock production data
export const mockProductionData: readonly ProductionData[] = [
  {
    id: 'PD001',
    equipmentId: 'EQ001',
    date: '2023-11-25',
    shift: 'morning',
    operator: 'Robert Lee',
    hoursOperated: 8,
    outputVolume: 2450,
    qualityIssues: 12,
    notes: 'Normal operation',
  },
  {
    id: 'PD002',
    equipmentId: 'EQ001',
    date: '2023-11-25',
    shift: 'afternoon',
    operator: 'Sarah Miller',
    hoursOperated: 8,
    outputVolume: 2380,
    qualityIssues: 15,
    notes: 'Slight decrease in output rate during last hour',
  },
  {
    id: 'PD003',
    equipmentId: 'EQ002',
    date: '2023-11-25',
    shift: 'morning',
    operator: 'James Wilson',
    hoursOperated: 8,
    outputVolume: 85,
    qualityIssues: 2,
    notes: 'New material batch, performing well',
  },
  {
    id: 'PD004',
    equipmentId: 'EQ003',
    date: '2023-11-25',
    shift: 'morning',
    operator: 'Emily Davis',
    hoursOperated: 8,
    outputVolume: 3200,
    qualityIssues: 18,
    notes: 'Higher than normal defect rate',
  },
  {
    id: 'PD005',
    equipmentId: 'EQ004',
    date: '2023-11-25',
    shift: 'afternoon',
    operator: 'Michael Brown',
    hoursOperated: 7.5,
    outputVolume: 520,
    qualityIssues: 3,
    notes: 'Stopped for 30 min calibration check',
  },
  {
    id: 'PD006',
    equipmentId: 'EQ005',
    date: '2023-11-25',
    shift: 'night',
    operator: 'Jennifer Taylor',
    hoursOperated: 8,
    outputVolume: 1200,
    qualityIssues: 5,
    notes: 'Normal operation',
  },
] as const;

// Mock risk scores
export const mockRiskScores: readonly EquipmentRiskScore[] = [
  {
    equipmentId: 'EQ001',
    score: 35,
    predictionDate: '2023-11-26',
    timeFrame: 30,
    contributingFactors: [
      { factor: 'Age', impact: 20, description: 'Equipment age is 60% of expected lifespan' },
      { factor: 'Recent failure', impact: 40, description: 'Experienced a belt failure within last 4 months' },
      { factor: 'Production output trending down', impact: 25, description: 'Gradual 5% decrease in efficiency over 30 days' },
      { factor: 'Maintenance cycle', impact: 15, description: 'Last preventive maintenance was over 40 days ago' }
    ],
    confidence: 75,
    recommendedActions: [
      {
        action: 'Schedule belt inspection',
        priority: 'medium',
        estimatedCost: 300,
        potentialSavings: 120000,
        timeframe: 'within 14 days'
      }
    ]
  },
  {
    equipmentId: 'EQ002',
    score: 68,
    predictionDate: '2023-11-26',
    timeFrame: 14,
    contributingFactors: [
      { factor: 'Recent bearing replacement', impact: 60, description: 'Bearings replaced within last 3 months' },
      { factor: 'Vibration pattern', impact: 75, description: 'Similar vibration pattern to pre-failure state' },
      { factor: 'Temperature increase', impact: 50, description: '5°C increase in operating temperature over 2 weeks' },
      { factor: 'Usage hours', impact: 30, description: 'Operating at 110% of recommended usage hours' }
    ],
    confidence: 85,
    recommendedActions: [
      {
        action: 'Inspect and replace spindle bearings',
        priority: 'high',
        estimatedCost: 1800,
        potentialSavings: 19200,
        timeframe: 'within 7 days'
      },
      {
        action: 'Reduce operational load by 15%',
        priority: 'medium',
        estimatedCost: 0,
        potentialSavings: 5000,
        timeframe: 'immediate'
      }
    ]
  },
  {
    equipmentId: 'EQ003',
    score: 12,
    predictionDate: '2023-11-26',
    timeFrame: 30,
    contributingFactors: [
      { factor: 'Recent maintenance', impact: 10, description: 'Software updated within last 7 days' },
      { factor: 'Age', impact: 5, description: 'Equipment is relatively new (2 years old)' },
      { factor: 'Quality issues', impact: 25, description: 'Slight increase in defect rate' }
    ],
    confidence: 90,
    recommendedActions: [
      {
        action: 'Routine quality check',
        priority: 'low',
        estimatedCost: 100,
        potentialSavings: 800,
        timeframe: 'within 30 days'
      }
    ]
  },
  {
    equipmentId: 'EQ004',
    score: 24,
    predictionDate: '2023-11-26',
    timeFrame: 30,
    contributingFactors: [
      { factor: 'Recent calibration', impact: 15, description: 'Arm recalibrated within last 30 days' },
      { factor: 'Software stability', impact: 30, description: 'Previous software issues may recur' },
      { factor: 'Usage pattern', impact: 20, description: 'Operating within normal parameters' }
    ],
    confidence: 80,
    recommendedActions: [
      {
        action: 'Software diagnostic check',
        priority: 'low',
        estimatedCost: 150,
        potentialSavings: 14400,
        timeframe: 'within 14 days'
      }
    ]
  },
  {
    equipmentId: 'EQ005',
    score: 82,
    predictionDate: '2023-11-26',
    timeFrame: 7,
    contributingFactors: [
      { factor: 'Pressure readings', impact: 90, description: 'Hydraulic pressure fluctuations increasing' },
      { factor: 'Previous failure pattern', impact: 85, description: 'Similar pattern to June 2023 failure' },
      { factor: 'Age', impact: 40, description: 'One of the oldest equipment in the facility' },
      { factor: 'Fluid analysis', impact: 75, description: 'Contaminants detected in recent sample' }
    ],
    confidence: 92,
    recommendedActions: [
      {
        action: 'Complete hydraulic system overhaul',
        priority: 'critical',
        estimatedCost: 12000,
        potentialSavings: 144000,
        timeframe: 'immediate'
      },
      {
        action: 'Replace seals and fluid',
        priority: 'critical',
        estimatedCost: 2500,
        potentialSavings: 144000,
        timeframe: 'within 2 days'
      }
    ]
  },
  {
    equipmentId: 'EQ006',
    score: 18,
    predictionDate: '2023-11-26',
    timeFrame: 90,
    contributingFactors: [
      { factor: 'Routine maintenance', impact: 15, description: 'Regular maintenance performed on schedule' },
      { factor: 'Age', impact: 10, description: 'Relatively new installation' },
      { factor: 'Motor current', impact: 25, description: 'Slight increase in motor current draw' }
    ],
    confidence: 85,
    recommendedActions: [
      {
        action: 'Motor inspection during next scheduled downtime',
        priority: 'low',
        estimatedCost: 250,
        potentialSavings: 1000,
        timeframe: 'within 60 days'
      }
    ]
  }
] as const;

// Mock maintenance schedule
export const mockMaintenanceSchedule: readonly MaintenanceSchedule[] = [
  {
    id: 'MS001',
    equipmentId: 'EQ005',
    plannedDate: '2023-11-28',
    estimatedDuration: 12,
    type: 'predictive',
    priority: 'critical',
    technician: 'Maria Garcia',
    estimatedCost: 12000,
    potentialSavings: 144000,
    status: 'scheduled'
  },
  {
    id: 'MS002',
    equipmentId: 'EQ002',
    plannedDate: '2023-11-30',
    estimatedDuration: 8,
    type: 'predictive',
    priority: 'high',
    technician: 'John Smith',
    estimatedCost: 1800,
    potentialSavings: 19200,
    status: 'scheduled'
  },
  {
    id: 'MS003',
    equipmentId: 'EQ001',
    plannedDate: '2023-12-10',
    estimatedDuration: 4,
    type: 'preventive',
    priority: 'medium',
    technician: 'Alex Johnson',
    estimatedCost: 300,
    potentialSavings: 120000,
    status: 'scheduled'
  },
  {
    id: 'MS004',
    equipmentId: 'EQ004',
    plannedDate: '2023-12-15',
    estimatedDuration: 2,
    type: 'preventive',
    priority: 'low',
    technician: 'Lisa Chen',
    estimatedCost: 150,
    potentialSavings: 14400,
    status: 'scheduled'
  },
  {
    id: 'MS005',
    equipmentId: 'EQ003',
    plannedDate: '2023-12-20',
    estimatedDuration: 1,
    type: 'preventive',
    priority: 'low',
    technician: 'Alex Johnson',
    estimatedCost: 100,
    potentialSavings: 800,
    status: 'scheduled'
  }
] as const;

// Dashboard stats calculation
export const getDashboardStats = (): DashboardStats => {
  const highRiskCount = mockRiskScores.filter(risk => risk.score > 50).length;
  const scheduledMaintenance = mockMaintenanceSchedule.filter(m => m.status === 'scheduled').length;
  const totalSavings = mockMaintenanceSchedule.reduce((sum, schedule) => sum + (schedule.potentialSavings || 0), 0);
  
  // Added defensive check for division by zero
  const averageHealthScore = mockRiskScores.length > 0 
    ? 100 - (mockRiskScores.reduce((sum, risk) => sum + (risk.score || 0), 0) / mockRiskScores.length)
    : 100;
  
  return {
    totalEquipment: mockEquipment.length,
    highRiskCount,
    scheduledMaintenance,
    estimatedSavings: totalSavings,
    averageHealthScore
  };
};

// Helper function to get equipment by ID with input validation
export const getEquipmentById = (id: string): Equipment | undefined => {
  if (!id || typeof id !== 'string') return undefined;
  return mockEquipment.find(eq => eq.id === id);
};

// Helper function to get maintenance logs for equipment with input validation
export const getMaintenanceLogsForEquipment = (equipmentId: string): MaintenanceLog[] => {
  if (!equipmentId || typeof equipmentId !== 'string') return [];
  return mockMaintenanceLogs.filter(log => log.equipmentId === equipmentId);
};

// Helper function to get failure history for equipment with input validation
export const getFailureHistoryForEquipment = (equipmentId: string): FailureHistory[] => {
  if (!equipmentId || typeof equipmentId !== 'string') return [];
  return mockFailureHistory.filter(failure => failure.equipmentId === equipmentId);
};

// Helper function to get production data for equipment with input validation
export const getProductionDataForEquipment = (equipmentId: string): ProductionData[] => {
  if (!equipmentId || typeof equipmentId !== 'string') return [];
  return mockProductionData.filter(data => data.equipmentId === equipmentId);
};

// Helper function to get risk score for equipment with input validation
export const getRiskScoreForEquipment = (equipmentId: string): EquipmentRiskScore | undefined => {
  if (!equipmentId || typeof equipmentId !== 'string') return undefined;
  return mockRiskScores.find(risk => risk.equipmentId === equipmentId);
};

// Helper to get maintenance schedule for equipment with input validation
export const getMaintenanceScheduleForEquipment = (equipmentId: string): MaintenanceSchedule[] => {
  if (!equipmentId || typeof equipmentId !== 'string') return [];
  return mockMaintenanceSchedule.filter(schedule => schedule.equipmentId === equipmentId);
};