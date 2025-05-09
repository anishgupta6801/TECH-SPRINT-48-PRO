import React, { useState } from 'react';
import ClassicLayout from '../components/ClassicLayout';
import ArduinoConnection from '../components/ArduinoConnection';

// Mock data for MNC equipment
const equipmentData = [
  {
    id: "EQ001",
    name: "TATA Steel Blast Furnace I",
    type: "Primary Steel Processing",
    manufacturer: "TATA Steel Engineering",
    model: "BF-8500",
    installDate: "2019-05-20",
    lastMaintenance: "2023-10-15",
    nextMaintenance: "2024-04-15",
    status: "Operational",
    location: "Jamshedpur Plant, Section 1",
    operatingHours: 14250,
    efficiency: 94,
    failureRisk: "Low",
    functions: "Iron ore processing, Hot metal production, Slag separation",
    notes: "Upgraded lining in 2022, Connected to central monitoring system"
  },
  {
    id: "EQ002",
    name: "TATA Steel Robotic Coating System",
    type: "Surface Treatment",
    manufacturer: "TATA Automation",
    model: "RCS-720",
    installDate: "2021-08-10",
    lastMaintenance: "2023-12-05",
    nextMaintenance: "2024-06-05",
    status: "Operational",
    location: "Coating Division, Line 3",
    operatingHours: 7650,
    efficiency: 96,
    failureRisk: "Low",
    functions: "Anti-corrosion coating, Surface preparation, Quality inspection",
    notes: "Software update completed during last maintenance"
  },
  {
    id: "EQ003",
    name: "TATA Steel Emergency Generator",
    type: "Power Backup",
    manufacturer: "TATA Power",
    model: "TP-G8000",
    installDate: "2018-11-25",
    lastMaintenance: "2024-01-12",
    nextMaintenance: "2024-07-12",
    status: "Standby",
    location: "Power House B",
    operatingHours: 3120,
    efficiency: 89,
    failureRisk: "Low",
    functions: "Critical systems backup, Rolling mill emergency power, Safety systems support",
    notes: "Fuel system cleaned during last maintenance cycle"
  },
  {
    id: "EQ004",
    name: "TATA Steel CNC Cutting Machine",
    type: "Precision Steel Processing",
    manufacturer: "TATA Machine Tools",
    model: "TMT-C5000",
    installDate: "2020-07-15",
    lastMaintenance: "2023-09-28",
    nextMaintenance: "2024-04-12",
    status: "Under Maintenance",
    location: "Fabrication Department",
    operatingHours: 10320,
    efficiency: 91,
    failureRisk: "Medium",
    functions: "High-precision steel cutting, Multi-dimensional processing, Pattern automation",
    notes: "Cutting head replacement in progress, Expected completion in 2 days"
  },
  {
    id: "EQ005",
    name: "TATA Steel Environmental Control System",
    type: "Emissions Management",
    manufacturer: "TATA Environmental Solutions",
    model: "TES-9500",
    installDate: "2022-02-10",
    lastMaintenance: "2024-02-02",
    nextMaintenance: "2024-08-02",
    status: "Operational",
    location: "Smelting Plant, Central System",
    operatingHours: 9850,
    efficiency: 95,
    failureRisk: "Low",
    functions: "Emissions control, Particulate filtering, Gas treatment, Monitoring compliance",
    notes: "Recently calibrated CO2 sensors and updated filtration system"
  },
  {
    id: "EQ006",
    name: "TATA Steel Automated Welding Unit",
    type: "Joining Technology",
    manufacturer: "TATA Weld Systems",
    model: "TWS-3500",
    installDate: "2021-10-05",
    lastMaintenance: "2024-01-20",
    nextMaintenance: "2024-07-20",
    status: "Operational",
    location: "Fabrication Unit 2",
    operatingHours: 6240,
    efficiency: 93,
    failureRisk: "Low",
    functions: "High-strength welding, Laser-guided positioning, Multi-material joining",
    notes: "Torch assembly scheduled for replacement during next maintenance"
  },
  {
    id: "EQ007",
    name: "TATA Steel Process Control System",
    type: "Integrated Control",
    manufacturer: "TATA Digital",
    model: "TCS-9000",
    installDate: "2019-08-12",
    lastMaintenance: "2023-11-22",
    nextMaintenance: "2024-05-22",
    status: "Operational",
    location: "Central Control Room",
    operatingHours: 40680,
    efficiency: 97,
    failureRisk: "Low",
    functions: "Plant-wide monitoring, Process optimization, Safety protocols, Production scheduling",
    notes: "Cybersecurity updates implemented during last maintenance"
  },
  {
    id: "EQ008",
    name: "TATA Steel Coil Packaging Line",
    type: "Product Packaging",
    manufacturer: "TATA Packaging Systems",
    model: "TPS-4500",
    installDate: "2020-04-30",
    lastMaintenance: "2023-08-15",
    nextMaintenance: "2024-03-15",
    status: "Out of Service",
    location: "Finishing Department, Line 2",
    operatingHours: 13850,
    efficiency: 84,
    failureRisk: "High",
    functions: "Steel coil wrapping, Edge protection, Label application, Automated strapping",
    notes: "Main drive system failure, Replacement parts in transit, Expected repair in 1 week"
  },
  {
    id: "EQ009",
    name: "TATA Steel Hot Strip Mill",
    type: "Rolling Mill",
    manufacturer: "TATA Heavy Engineering",
    model: "HSM-12000",
    installDate: "2017-09-08",
    lastMaintenance: "2023-07-25",
    nextMaintenance: "2024-02-15",
    status: "Operational",
    location: "Rolling Mill Complex, Section 4",
    operatingHours: 45720,
    efficiency: 88,
    failureRisk: "Medium",
    functions: "Slab rolling, Thickness control, Temperature regulation, Coil formation",
    notes: "Roll replacement and alignment scheduled for next maintenance"
  },
  {
    id: "EQ010",
    name: "TATA Steel Water Treatment System",
    type: "Resource Management",
    manufacturer: "TATA Enviro",
    model: "WT-7200",
    installDate: "2021-03-12",
    lastMaintenance: "2024-02-05",
    nextMaintenance: "2024-08-05",
    status: "Operational",
    location: "Utility Division, Water Plant",
    operatingHours: 8240,
    efficiency: 94,
    failureRisk: "Low",
    functions: "Process water treatment, Cooling system supply, Water recycling, Contaminant removal",
    notes: "Filter media replacement completed during last maintenance"
  }
];

const Dashboard: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);
  
  // Count equipment by status
  const operationalCount = equipmentData.filter(item => item.status === "Operational").length;
  const maintenanceCount = equipmentData.filter(item => item.status === "Under Maintenance").length;
  const outOfServiceCount = equipmentData.filter(item => item.status === "Out of Service").length;
  const standbyCount = equipmentData.filter(item => item.status === "Standby").length;
  
  const toggleDetails = (id: string) => {
    setSelectedEquipment(selectedEquipment === id ? null : id);
  };

  const handleArduinoConnect = async (ip: string, port: number) => {
    // Implement Arduino connection logic here
    console.log(`Connecting to Arduino at ${ip}:${port}`);
  };

  const handleArduinoDisconnect = async () => {
    // Implement Arduino disconnection logic here
    console.log('Disconnecting Arduino');
  };

  return (
    <ClassicLayout>
      <div className="space-y-6">
        <div className="bg-white px-6 py-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-gray-800">PredictPro AI Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Overview of your equipment and maintenance status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Equipment Status</h2>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Total Equipment</span>
              <span className="font-medium">{equipmentData.length}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Operational</span>
              <span className="font-medium text-green-600">{operationalCount}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Under Maintenance</span>
              <span className="font-medium text-yellow-600">{maintenanceCount}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Out of Service</span>
              <span className="font-medium text-red-600">{outOfServiceCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Standby</span>
              <span className="font-medium text-blue-600">{standbyCount}</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Maintenance Schedule</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-3">
                <div className="text-sm font-medium">TATA Steel CNC Cutting Machine</div>
                <div className="text-xs text-gray-500">April 12, 2024</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <div className="text-sm font-medium">TATA Steel Hot Strip Mill</div>
                <div className="text-xs text-gray-500">February 15, 2024</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <div className="text-sm font-medium">TATA Steel Blast Furnace I</div>
                <div className="text-xs text-gray-500">May 10, 2024</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Risk Assessment</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm">High Risk (1)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">Medium Risk (2)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Low Risk (7)</span>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="/prediction" 
                className="text-blue-600 text-sm hover:text-blue-800"
              >
                Run AI prediction for high-risk equipment →
              </a>
            </div>
          </div>
        </div>
        
        {/* Equipment List */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium text-blue-800 mb-4">TATA STEEL Machine Inventory</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manufacturer</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {equipmentData.map((equipment) => (
                  <React.Fragment key={equipment.id}>
                    <tr 
                      className={`hover:bg-gray-50 ${equipment.status === 'Operational' ? 'bg-green-50' : 
                        equipment.status === 'Under Maintenance' ? 'bg-yellow-50' : 
                        equipment.status === 'Out of Service' ? 'bg-red-50' : 'bg-blue-50'}`}
                    >
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">{equipment.id}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{equipment.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{equipment.manufacturer}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                          ${equipment.status === 'Operational' ? 'bg-green-100 text-green-800' : 
                            equipment.status === 'Under Maintenance' ? 'bg-yellow-100 text-yellow-800' : 
                            equipment.status === 'Out of Service' ? 'bg-red-100 text-red-800' : 
                            'bg-blue-100 text-blue-800'}`}
                        >
                          {equipment.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                          ${equipment.failureRisk === 'Low' ? 'bg-green-100 text-green-800' : 
                            equipment.failureRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}
                        >
                          {equipment.failureRisk}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button 
                          onClick={() => toggleDetails(equipment.id)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {selectedEquipment === equipment.id ? 'Hide Details' : 'View Details'}
                        </button>
                      </td>
                    </tr>
                    {selectedEquipment === equipment.id && (
                      <tr>
                        <td colSpan={6} className="py-4 px-4 bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-500">Type</p>
                              <p className="text-sm text-gray-900">{equipment.type}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Model</p>
                              <p className="text-sm text-gray-900">{equipment.model}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Installation Date</p>
                              <p className="text-sm text-gray-900">{equipment.installDate}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Last Maintenance</p>
                              <p className="text-sm text-gray-900">{equipment.lastMaintenance}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Next Maintenance</p>
                              <p className="text-sm text-gray-900">{equipment.nextMaintenance}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Location</p>
                              <p className="text-sm text-gray-900">{equipment.location}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Operating Hours</p>
                              <p className="text-sm text-gray-900">{equipment.operatingHours} hrs</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Efficiency</p>
                              <p className="text-sm text-gray-900">{equipment.efficiency}%</p>
                            </div>
                            <div className="md:col-span-2 lg:col-span-3">
                              <p className="text-sm font-medium text-gray-500">Functions</p>
                              <p className="text-sm text-gray-900">{equipment.functions}</p>
                            </div>
                            <div className="md:col-span-2 lg:col-span-3">
                              <p className="text-sm font-medium text-gray-500">Notes</p>
                              <p className="text-sm text-gray-900">{equipment.notes}</p>
                            </div>
                            <div className="md:col-span-2 lg:col-span-3 mt-2">
                              <div className="flex space-x-2">
                                <button className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700">
                                  Run Prediction
                                </button>
                                <button className="px-3 py-1 bg-gray-600 text-white text-xs font-medium rounded hover:bg-gray-700">
                                  Schedule Maintenance
                                </button>
                                <button className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded hover:bg-green-700">
                                  View History
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {selectedEquipment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium text-gray-900">
                {equipmentData.find(e => e.id === selectedEquipment)?.name}
              </h2>
              <button
                onClick={() => setSelectedEquipment(null)}
                className="text-gray-500 hover:text-gray-700"
                title="Close details"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Type</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Model</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.model}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Installation Date</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.installDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Last Maintenance</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.lastMaintenance}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Next Maintenance</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.nextMaintenance}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Operating Hours</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.operatingHours} hrs</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Efficiency</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.efficiency}%</p>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                  <p className="text-sm font-medium text-gray-500">Functions</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.functions}</p>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                  <p className="text-sm font-medium text-gray-500">Notes</p>
                  <p className="text-sm text-gray-900">{equipmentData.find(e => e.id === selectedEquipment)?.notes}</p>
                </div>
              </div>
              
              <div>
                <ArduinoConnection
                  equipment={equipmentData.find(e => e.id === selectedEquipment)!}
                  onConnect={handleArduinoConnect}
                  onDisconnect={handleArduinoDisconnect}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </ClassicLayout>
  );
};

export default Dashboard;