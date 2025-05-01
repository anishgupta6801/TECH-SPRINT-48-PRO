// Types for the Predictive Maintenance application

// Equipment data types
export interface Equipment {
  id: string;
  name: string;
  type: string;
  manufacturer: string;
  model: string;
  installationDate: string;
  expectedLifespan: number; // in years
  location: string;
  department: string;
  costPerHour: number; // downtime cost per hour
}

// Maintenance log entry
export interface MaintenanceLog {
  id: string;
  equipmentId: string;
  date: string;
  type: 'preventive' | 'corrective' | 'predictive';
  action: string;
  technician: string;
  parts: MaintenancePart[];
  duration: number; // in hours
  cost: number;
  notes: string;
}

export interface MaintenancePart {
  id: string;
  name: string;
  quantity: number;
  cost: number;
}

// Failure history entry
export interface FailureHistory {
  id: string;
  equipmentId: string;
  startDate: string;
  endDate: string;
  duration: number; // in hours
  failureType: string;
  failureCode: string;
  impact: 'low' | 'medium' | 'high' | 'critical';
  costImpact: number;
  rootCause: string;
  resolution: string;
}

// Production data
export interface ProductionData {
  id: string;
  equipmentId: string;
  date: string;
  shift: 'morning' | 'afternoon' | 'night';
  operator: string;
  hoursOperated: number;
  outputVolume: number;
  qualityIssues: number;
  notes: string;
}

// Prediction types
export interface EquipmentRiskScore {
  equipmentId: string;
  score: number; // 0-100%
  predictionDate: string;
  timeFrame: 7 | 14 | 30 | 90; // days
  contributingFactors: ContributingFactor[];
  confidence: number; // 0-100%
  recommendedActions: RecommendedAction[];
}

export interface ContributingFactor {
  factor: string;
  impact: number; // 0-100%
  description: string;
}

export interface RecommendedAction {
  action: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedCost: number;
  potentialSavings: number;
  timeframe: string; // e.g., "within 7 days"
}

// Maintenance schedule type
export interface MaintenanceSchedule {
  id: string;
  equipmentId: string;
  plannedDate: string;
  estimatedDuration: number; // in hours
  type: 'preventive' | 'corrective' | 'predictive';
  priority: 'low' | 'medium' | 'high' | 'critical';
  technician: string;
  estimatedCost: number;
  potentialSavings: number;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

// Dashboard types
export interface DashboardStats {
  totalEquipment: number;
  highRiskCount: number;
  scheduledMaintenance: number;
  estimatedSavings: number;
  averageHealthScore: number;
}

// Settings type
export interface PredictionSettings {
  riskThresholds: {
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
  predictionTimeframes: number[]; // days to predict ahead
  costFactors: {
    labor: number; // hourly rate
    downtime: number; // per hour
    inventory: number; // multiplier for parts
  };
}