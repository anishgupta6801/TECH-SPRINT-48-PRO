import React, { useState } from 'react';
import ClassicLayout from '../components/ClassicLayout';

// Performance Metrics Component
const PerformanceMetrics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <h3 className="text-lg font-medium text-blue-800 mb-2">AveraTATA Heavy Efficiency</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-blue-600">89.7%</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              2.3%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Compared to last month</p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Total Uptime</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-blue-600">98.2%</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              0.5%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Compared to last month</p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Output Quality</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-blue-600">94.3%</span>
            <span className="ml-2 text-sm text-red-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              1.2%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Compared to last month</p>
        </div>
      </div>
      
      {/* Efficiency Trends Chart */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Efficiency Trends Over Time</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              {/* Chart Grid */}
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* X and Y Axes */}
                <line x1="50" y1="210" x2="750" y2="210" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="50" y1="210" x2="50" y2="20" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Y-axis labels */}
                <text x="25" y="210" textAnchor="middle" fontSize="12" fill="#6b7280">70%</text>
                <text x="25" y="165" textAnchor="middle" fontSize="12" fill="#6b7280">75%</text>
                <text x="25" y="120" textAnchor="middle" fontSize="12" fill="#6b7280">80%</text>
                <text x="25" y="75" textAnchor="middle" fontSize="12" fill="#6b7280">85%</text>
                <text x="25" y="30" textAnchor="middle" fontSize="12" fill="#6b7280">90%</text>
                
                {/* X-axis labels */}
                <text x="100" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jan</text>
                <text x="200" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Feb</text>
                <text x="300" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Mar</text>
                <text x="400" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Apr</text>
                <text x="500" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">May</text>
                <text x="600" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jun</text>
                <text x="700" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jul</text>
                
                {/* Horizontal grid lines */}
                <line x1="50" y1="165" x2="750" y2="165" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="120" x2="750" y2="120" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="75" x2="750" y2="75" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="30" x2="750" y2="30" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Vertical grid lines */}
                <line x1="150" y1="210" x2="150" y2="20" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="250" y1="210" x2="250" y2="20" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="350" y1="210" x2="350" y2="20" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="450" y1="210" x2="450" y2="20" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="550" y1="210" x2="550" y2="20" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="650" y1="210" x2="650" y2="20" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* All Equipment Efficiency Trend Line */}
                <path 
                  d="M100,90 L200,105 L300,120 L400,95 L500,85 L600,75 L700,60" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Data points */}
                <circle cx="100" cy="90" r="5" fill="#3b82f6" />
                <circle cx="200" cy="105" r="5" fill="#3b82f6" />
                <circle cx="300" cy="120" r="5" fill="#3b82f6" />
                <circle cx="400" cy="95" r="5" fill="#3b82f6" />
                <circle cx="500" cy="85" r="5" fill="#3b82f6" />
                <circle cx="600" cy="75" r="5" fill="#3b82f6" />
                <circle cx="700" cy="60" r="5" fill="#3b82f6" />
                
                {/* TATA Steel Turbine Line */}
                <path 
                  d="M100,45 L200,50 L300,60 L400,55 L500,45 L600,40 L700,35" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="2"
                  strokeDasharray="5,3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* TATA Coil Packaging Line */}
                <path 
                  d="M100,150 L200,145 L300,155 L400,140 L500,130 L600,125 L700,115" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="2"
                  strokeDasharray="5,3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Chart LeTATA Heavynd */}
                <circle cx="600" cy="40" r="5" fill="#3b82f6" />
                <text x="610" y="44" fontSize="12" fill="#6b7280">All Equipment</text>
                
                <line x1="600" y1="60" x2="620" y2="60" stroke="#10b981" strokeWidth="2" strokeDasharray="5,3" />
                <text x="625" y="64" fontSize="12" fill="#6b7280">TATA Steel Blast Furnace</text>
                
                <line x1="600" y1="80" x2="620" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3" />
                <text x="625" y="84" fontSize="12" fill="#6b7280">TATA Steel Coil Packaging</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-500 flex justify-end">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            <span>Overall Trend: +4.5%</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            <span>Best Performer: TATA Steel Blast Furnace (94%)</span>
          </div>
        </div>
      </div>
      
      {/* Equipment Comparison Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">Equipment Performance Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Equipment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Efficiency
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Uptime
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Output Quality
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Overall Rating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">TATA Steel Blast Furnace I</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">94%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">99.1%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">95%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Excellent
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">TATA Steel Robotic Coating System</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">96%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">97.8%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">96%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Excellent
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">TATA Steel Coil Packaging Line</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">84%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">92.4%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">88%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Good
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">TATA Steel CNC Cutting Machine</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">90%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">96.2%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">94%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Excellent
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Maintenance Analysis Component
const MaintenanceAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <h3 className="text-lg font-medium text-green-800 mb-2">MTBF</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-green-600">78.5</span>
            <span className="text-lg ml-1 text-green-600">days</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              5.2%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Mean Time Between Failures</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <h3 className="text-lg font-medium text-green-800 mb-2">MTTR</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-green-600">4.2</span>
            <span className="text-lg ml-1 text-green-600">hours</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              12.5%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Mean Time To Repair</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <h3 className="text-lg font-medium text-green-800 mb-2">Compliance Rate</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-green-600">96.7%</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              2.1%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Maintenance Schedule Compliance</p>
        </div>
      </div>
      
      {/* Maintenance Timeline */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Maintenance Timeline</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* X and Y Axes */}
                <line x1="50" y1="210" x2="750" y2="210" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="50" y1="210" x2="50" y2="30" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Horizontal Grid Lines */}
                <line x1="50" y1="170" x2="750" y2="170" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="130" x2="750" y2="130" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="90" x2="750" y2="90" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="50" x2="750" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* X-axis Labels (Months) */}
                <text x="100" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jan</text>
                <text x="200" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Feb</text>
                <text x="300" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Mar</text>
                <text x="400" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Apr</text>
                <text x="500" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">May</text>
                <text x="600" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jun</text>
                <text x="700" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jul</text>
                
                {/* Y-axis Equipment Labels */}
                <text x="45" y="60" textAnchor="end" fontSize="12" fill="#6b7280">Turbines</text>
                <text x="45" y="100" textAnchor="end" fontSize="12" fill="#6b7280">Robotic Arms</text>
                <text x="45" y="140" textAnchor="end" fontSize="12" fill="#6b7280">CNC Machines</text>
                <text x="45" y="180" textAnchor="end" fontSize="12" fill="#6b7280">Packaging</text>
                
                {/* Scheduled Maintenance Events */}
                {/* Turbines */}
                <rect x="70" y="50" width="20" height="20" fill="#3b82f6" rx="2" />
                <rect x="280" y="50" width="20" height="20" fill="#3b82f6" rx="2" />
                <rect x="490" y="50" width="20" height="20" fill="#3b82f6" rx="2" />
                <rect x="700" y="50" width="20" height="20" fill="#3b82f6" rx="2" />
                
                {/* Robotic Arms */}
                <rect x="120" y="90" width="20" height="20" fill="#3b82f6" rx="2" />
                <rect x="330" y="90" width="20" height="20" fill="#3b82f6" rx="2" />
                <rect x="540" y="90" width="20" height="20" fill="#3b82f6" rx="2" />
                
                {/* CNC Machines */}
                <rect x="180" y="130" width="20" height="20" fill="#3b82f6" rx="2" />
                <rect x="390" y="130" width="20" height="20" fill="#3b82f6" rx="2" />
                <rect x="600" y="130" width="20" height="20" fill="#3b82f6" rx="2" />
                
                {/* Packaging Machines */}
                <rect x="230" y="170" width="20" height="20" fill="#3b82f6" rx="2" />
                <rect x="440" y="170" width="20" height="20" fill="#3b82f6" rx="2" />
                <rect x="650" y="170" width="20" height="20" fill="#3b82f6" rx="2" />
                
                {/* Unscheduled Maintenance Events (Failures) */}
                <rect x="370" y="50" width="20" height="20" fill="#ef4444" rx="2" />
                <rect x="220" y="90" width="20" height="20" fill="#ef4444" rx="2" />
                <rect x="470" y="130" width="20" height="20" fill="#ef4444" rx="2" />
                <rect x="550" y="170" width="20" height="20" fill="#ef4444" rx="2" />
                
                {/* LeTATA Heavynd */}
                <rect x="600" y="15" width="15" height="15" fill="#3b82f6" rx="2" />
                <text x="620" y="25" fontSize="12" fill="#6b7280">Scheduled Maintenance</text>
                
                <rect x="600" y="35" width="15" height="15" fill="#ef4444" rx="2" />
                <text x="620" y="45" fontSize="12" fill="#6b7280">Unscheduled Maintenance</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-500 flex justify-between">
          <div className="flex items-center">
            <span className="font-medium">Total Maintenance Events:</span>
            <span className="ml-2">19</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Scheduled:</span>
            <span className="ml-2 text-blue-600">15</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Unscheduled:</span>
            <span className="ml-2 text-red-600">4</span>
          </div>
        </div>
      </div>
      
      {/* Maintenance Costs vs Time */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Maintenance Costs Over Time</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* X and Y Axes */}
                <line x1="50" y1="210" x2="750" y2="210" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="50" y1="210" x2="50" y2="30" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Y-axis labels (Cost in $K) */}
                <text x="40" y="210" textAnchor="end" fontSize="12" fill="#6b7280">0</text>
                <text x="40" y="170" textAnchor="end" fontSize="12" fill="#6b7280">20</text>
                <text x="40" y="130" textAnchor="end" fontSize="12" fill="#6b7280">40</text>
                <text x="40" y="90" textAnchor="end" fontSize="12" fill="#6b7280">60</text>
                <text x="40" y="50" textAnchor="end" fontSize="12" fill="#6b7280">80</text>
                
                {/* Horizontal grid lines */}
                <line x1="50" y1="170" x2="750" y2="170" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="130" x2="750" y2="130" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="90" x2="750" y2="90" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="50" x2="750" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* X-axis months */}
                <text x="100" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jan</text>
                <text x="200" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Feb</text>
                <text x="300" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Mar</text>
                <text x="400" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Apr</text>
                <text x="500" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">May</text>
                <text x="600" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jun</text>
                <text x="700" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jul</text>
                
                {/* Vertical grid lines */}
                <line x1="150" y1="30" x2="150" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="250" y1="30" x2="250" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="350" y1="30" x2="350" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="450" y1="30" x2="450" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="550" y1="30" x2="550" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="650" y1="30" x2="650" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Scheduled Maintenance Cost Bars */}
                <rect x="85" y="130" width="30" height="80" fill="#3b82f6" opacity="0.8" />
                <rect x="185" y="150" width="30" height="60" fill="#3b82f6" opacity="0.8" />
                <rect x="285" y="110" width="30" height="100" fill="#3b82f6" opacity="0.8" />
                <rect x="385" y="90" width="30" height="120" fill="#3b82f6" opacity="0.8" />
                <rect x="485" y="100" width="30" height="110" fill="#3b82f6" opacity="0.8" />
                <rect x="585" y="140" width="30" height="70" fill="#3b82f6" opacity="0.8" />
                <rect x="685" y="120" width="30" height="90" fill="#3b82f6" opacity="0.8" />
                
                {/* Unscheduled Maintenance Cost Bars */}
                <rect x="115" y="170" width="30" height="40" fill="#ef4444" opacity="0.8" />
                <rect x="215" y="190" width="30" height="20" fill="#ef4444" opacity="0.8" />
                <rect x="315" y="150" width="30" height="60" fill="#ef4444" opacity="0.8" />
                <rect x="415" y="170" width="30" height="40" fill="#ef4444" opacity="0.8" />
                <rect x="515" y="160" width="30" height="50" fill="#ef4444" opacity="0.8" />
                <rect x="615" y="180" width="30" height="30" fill="#ef4444" opacity="0.8" />
                <rect x="715" y="190" width="30" height="20" fill="#ef4444" opacity="0.8" />
                
                {/* Cost trend lines */}
                <path 
                  d="M100,130 L200,150 L300,110 L400,90 L500,100 L600,140 L700,120" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                <path 
                  d="M130,170 L230,190 L330,150 L430,170 L530,160 L630,180 L730,190" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* LeTATA Heavynd */}
                <rect x="600" y="15" width="15" height="15" fill="#3b82f6" opacity="0.8" />
                <text x="620" y="25" fontSize="12" fill="#6b7280">Scheduled Maintenance</text>
                
                <rect x="600" y="40" width="15" height="15" fill="#ef4444" opacity="0.8" />
                <text x="620" y="50" fontSize="12" fill="#6b7280">Unscheduled Maintenance</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-500 flex justify-between">
          <div className="flex items-center">
            <span className="font-medium">Total Maintenance Costs:</span>
            <span className="ml-2">$285K</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Scheduled:</span>
            <span className="ml-2 text-blue-600">$210K (74%)</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Unscheduled:</span>
            <span className="ml-2 text-red-600">$75K (26%)</span>
          </div>
        </div>
      </div>
      
      {/* Scheduled vs Unscheduled */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Scheduled vs Unscheduled Maintenance</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <svg className="w-full max-h-full" viewBox="0 0 400 250">
                {/* Pie Chart */}
                <g transform="translate(200, 125)">
                  {/* Scheduled Maintenance (76%) */}
                  <path 
                    d="M0,0 L0,-100 A100,100 0 1,1 -95.1,30.9 Z" 
                    fill="#3b82f6" 
                    stroke="white" 
                    strokeWidth="1"
                  />
                  {/* Unscheduled Maintenance (24%) */}
                  <path 
                    d="M0,0 L-95.1,30.9 A100,100 0 0,1 0,-100 Z" 
                    fill="#ef4444" 
                    stroke="white" 
                    strokeWidth="1"
                  />
                  
                  {/* PercentaTATA Heavy Labels */}
                  <text x="40" y="-50" fontSize="20" fontWeight="bold" fill="#ffffff" textAnchor="middle">76%</text>
                  <text x="-50" y="10" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">24%</text>
                </g>
                
                {/* LeTATA Heavynd */}
                <rect x="50" y="200" width="16" height="16" fill="#3b82f6" />
                <text x="75" y="214" fontSize="14" fill="#4b5563" textAnchor="start">Scheduled Maintenance (76%)</text>
                
                <rect x="250" y="200" width="16" height="16" fill="#ef4444" />
                <text x="275" y="214" fontSize="14" fill="#4b5563" textAnchor="start">Unscheduled (24%)</text>
                
                {/* Center White Circle for Donut Chart Look */}
                <circle cx="200" cy="125" r="50" fill="white" />
                <text x="200" y="118" fontSize="14" fill="#4b5563" textAnchor="middle">Total Events</text>
                <text x="200" y="140" fontSize="24" fontWeight="bold" fill="#4b5563" textAnchor="middle">147</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Scheduled</div>
            <div className="text-xl font-bold text-blue-600">76%</div>
            <div className="text-xs text-gray-500">112 events</div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Unscheduled</div>
            <div className="text-xl font-bold text-red-600">24%</div>
            <div className="text-xs text-gray-500">35 events</div>
          </div>
        </div>
      </div>
      
      {/* Upcoming Maintenance */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Upcoming Maintenance</h3>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
              <span className="text-blue-600 font-medium">15</span>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">TATA Steel CNC Cutting Machine</div>
              <div className="text-xs text-gray-500">Apr 15, 2025 • Regular Service</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
              <span className="text-blue-600 font-medium">22</span>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">TATA Steel Robotic Coating System</div>
              <div className="text-xs text-gray-500">Apr 22, 2025 • Calibration</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
              <span className="text-blue-600 font-medium">30</span>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">TATA Steel Blast Furnace I</div>
              <div className="text-xs text-gray-500">Apr 30, 2025 • Component Replacement</div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All Scheduled Maintenance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prediction Insights Component
const PredictionInsights: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
          <h3 className="text-lg font-medium text-indigo-800 mb-2">Prediction Accuracy</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-indigo-600">94.3%</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              1.8%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Last 30 days</p>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
          <h3 className="text-lg font-medium text-indigo-800 mb-2">AveraTATA Heavy Warning Time</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-indigo-600">43</span>
            <span className="text-lg ml-1 text-indigo-600">days</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              5.2%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">AveraTATA Heavy advance notice before failure</p>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
          <h3 className="text-lg font-medium text-indigo-800 mb-2">Avoided Failures</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-indigo-600">24</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              33%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Failures prevented this year</p>
        </div>
      </div>
      
      {/* Risk Distribution */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Equipment Risk Level Distribution</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* Main Container */}
                <g transform="translate(400, 120)">
                  {/* Donut Chart - Risk Distribution */}
                  
                  {/* Low Risk - 70% */}
                  <path 
                    d="M0,0 L0,-100 A100,100 0 0,1 95.1,30.9 Z" 
                    fill="#10b981" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  
                  {/* Medium Risk - 20% */}
                  <path 
                    d="M0,0 L95.1,30.9 A100,100 0 0,1 -34.2,93.97 Z" 
                    fill="#f59e0b" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  
                  {/* High Risk - 10% */}
                  <path 
                    d="M0,0 L-34.2,93.97 A100,100 0 0,1 -100,0 A100,100 0 0,1 0,-100 Z" 
                    fill="#ef4444" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  
                  {/* PercentaTATA Heavy Labels */}
                  <text x="50" y="-30" fontSize="20" fontWeight="bold" fill="#ffffff" textAnchor="middle">70%</text>
                  <text x="40" y="60" fontSize="18" fontWeight="bold" fill="#ffffff" textAnchor="middle">20%</text>
                  <text x="-50" y="20" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">10%</text>
                  
                  {/* Center White Circle for Donut Chart Look */}
                  <circle cx="0" cy="0" r="60" fill="white" />
                  
                  {/* Center Text */}
                  <text x="0" y="-10" fontSize="14" fill="#4b5563" textAnchor="middle">Total Equipment</text>
                  <text x="0" y="20" fontSize="24" fontWeight="bold" fill="#4b5563" textAnchor="middle">10</text>
                </g>
                
                {/* LeTATA Heavynd */}
                <rect x="630" y="40" width="16" height="16" fill="#10b981" />
                <text x="652" y="52" fontSize="14" fill="#4b5563">Low Risk (7)</text>
                
                <rect x="630" y="70" width="16" height="16" fill="#f59e0b" />
                <text x="652" y="82" fontSize="14" fill="#4b5563">Medium Risk (2)</text>
                
                <rect x="630" y="100" width="16" height="16" fill="#ef4444" />
                <text x="652" y="112" fontSize="14" fill="#4b5563">High Risk (1)</text>
                
                {/* Risk Level Bar Chart */}
                <g transform="translate(120, 120)">
                  {/* Y-axis */}
                  <line x1="0" y1="-80" x2="0" y2="80" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* X-axis */}
                  <line x1="0" y1="80" x2="180" y2="80" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Bars */}
                  {/* Low Risk Bar */}
                  <rect x="20" y="10" width="30" height="70" fill="#10b981" opacity="0.8" />
                  <text x="35" y="0" fontSize="12" fill="#4b5563" textAnchor="middle">7</text>
                  <text x="35" y="95" fontSize="12" fill="#4b5563" textAnchor="middle">Low</text>
                  
                  {/* Medium Risk Bar */}
                  <rect x="70" y="60" width="30" height="20" fill="#f59e0b" opacity="0.8" />
                  <text x="85" y="50" fontSize="12" fill="#4b5563" textAnchor="middle">2</text>
                  <text x="85" y="95" fontSize="12" fill="#4b5563" textAnchor="middle">Medium</text>
                  
                  {/* High Risk Bar */}
                  <rect x="120" y="70" width="30" height="10" fill="#ef4444" opacity="0.8" />
                  <text x="135" y="60" fontSize="12" fill="#4b5563" textAnchor="middle">1</text>
                  <text x="135" y="95" fontSize="12" fill="#4b5563" textAnchor="middle">High</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-green-50 p-3 rounded-lg text-center">
            <div className="text-sm text-gray-600">Low Risk</div>
            <div className="text-xl font-bold text-green-600">70%</div>
            <div className="text-xs text-gray-500">7 Machines</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-center">
            <div className="text-sm text-gray-600">Medium Risk</div>
            <div className="text-xl font-bold text-yellow-600">20%</div>
            <div className="text-xs text-gray-500">2 Machines</div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg text-center">
            <div className="text-sm text-gray-600">High Risk</div>
            <div className="text-xl font-bold text-red-600">10%</div>
            <div className="text-xs text-gray-500">1 Machine</div>
          </div>
        </div>
      </div>
      
      {/* Prediction Accuracy Trend */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Prediction Accuracy Over Time</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* X and Y Axes */}
                <line x1="60" y1="210" x2="750" y2="210" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="60" y1="210" x2="60" y2="30" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Y-axis labels (Accuracy %) */}
                <text x="50" y="210" textAnchor="end" fontSize="12" fill="#6b7280">80%</text>
                <text x="50" y="170" textAnchor="end" fontSize="12" fill="#6b7280">85%</text>
                <text x="50" y="130" textAnchor="end" fontSize="12" fill="#6b7280">90%</text>
                <text x="50" y="90" textAnchor="end" fontSize="12" fill="#6b7280">95%</text>
                <text x="50" y="50" textAnchor="end" fontSize="12" fill="#6b7280">100%</text>
                
                {/* Horizontal grid lines */}
                <line x1="60" y1="170" x2="750" y2="170" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="130" x2="750" y2="130" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="90" x2="750" y2="90" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="50" x2="750" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* X-axis dates */}
                <text x="100" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jan</text>
                <text x="200" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Feb</text>
                <text x="300" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Mar</text>
                <text x="400" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Apr</text>
                <text x="500" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">May</text>
                <text x="600" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jun</text>
                <text x="700" y="225" textAnchor="middle" fontSize="12" fill="#6b7280">Jul</text>
                
                {/* Vertical grid lines */}
                <line x1="150" y1="30" x2="150" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="250" y1="30" x2="250" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="350" y1="30" x2="350" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="450" y1="30" x2="450" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="550" y1="30" x2="550" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="650" y1="30" x2="650" y2="210" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Overall Prediction Accuracy Line */}
                <path 
                  d="M100,120 L200,110 L300,100 L400,95 L500,85 L600,80 L700,75" 
                  fill="none" 
                  stroke="#6366f1" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Data points with tooltips */}
                <circle cx="100" cy="120" r="5" fill="#6366f1" />
                <circle cx="200" cy="110" r="5" fill="#6366f1" />
                <circle cx="300" cy="100" r="5" fill="#6366f1" />
                <circle cx="400" cy="95" r="5" fill="#6366f1" />
                <circle cx="500" cy="85" r="5" fill="#6366f1" />
                <circle cx="600" cy="80" r="5" fill="#6366f1" />
                <circle cx="700" cy="75" r="5" fill="#6366f1" />
                
                {/* Confidence Interval Area */}
                <path 
                  d="M100,130 L200,120 L300,110 L400,105 L500,95 L600,90 L700,85 L700,65 L600,70 L500,75 L400,85 L300,90 L200,100 L100,110 Z" 
                  fill="#6366f1" 
                  opacity="0.1"
                />
                
                {/* TarTATA Heavyt Accuracy Line */}
                <path 
                  d="M60,90 L750,90" 
                  stroke="#10b981" 
                  strokeWidth="2"
                  strokeDasharray="6,4"
                />
                <text x="730" y="85" fontSize="12" fill="#10b981" textAnchor="end">TarTATA Heavyt (95%)</text>
                
                {/* LeTATA Heavynd */}
                <circle cx="600" y="30" r="5" fill="#6366f1" />
                <text x="610" y="34" fontSize="12" fill="#6b7280">Prediction Accuracy</text>
                
                <rect x="600" y="45" width="10" height="10" fill="#6366f1" opacity="0.1" />
                <text x="615" y="54" fontSize="12" fill="#6b7280">Confidence Interval</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-500 flex justify-between">
          <div className="flex items-center">
            <span className="font-medium">Current Accuracy:</span>
            <span className="ml-2 text-indigo-600 font-bold">94.3%</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Trend:</span>
            <span className="ml-2 text-green-600">+5.6% last 6 months</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Model Version:</span>
            <span className="ml-2">v2.4.1</span>
          </div>
        </div>
      </div>
      
      {/* High Risk Equipment */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">Equipment at Risk</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Equipment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Level
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Predicted Failure
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">TATA Steel Coil Packaging Line</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    High Risk
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">In 14 days</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">92%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">Schedule Service</button>
                  <button className="text-blue-600 hover:text-blue-900">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">TATA Steel Hot Strip Mill</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Medium Risk
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">In 45 days</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">84%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">Schedule Service</button>
                  <button className="text-blue-600 hover:text-blue-900">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">TATA Steel CNC Cutting Machine</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Medium Risk
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">In 67 days</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">78%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">Schedule Service</button>
                  <button className="text-blue-600 hover:text-blue-900">View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right">
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700">
            Run New Prediction
          </button>
        </div>
      </div>
    </div>
  );
};

// Cost Analysis Component
const CostAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
          <h3 className="text-lg font-medium text-purple-800 mb-2">Total Operating Costs</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-purple-600">$1.24M</span>
            <span className="ml-2 text-sm text-red-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              8.4%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Year to date</p>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
          <h3 className="text-lg font-medium text-purple-800 mb-2">Maintenance Costs</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-purple-600">$285K</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              3.2%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Year to date</p>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
          <h3 className="text-lg font-medium text-purple-800 mb-2">Downtime Costs</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-purple-600">$118K</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              12.5%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Year to date</p>
        </div>
      </div>
      
      {/* Cost Distribution */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Cost Distribution By Category</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* Main Container */}
                <g transform="translate(400, 120)">
                  {/* Donut Chart - Cost Distribution */}
                  
                  {/* Operations - 45% */}
                  <path 
                    d="M0,0 L0,-100 A100,100 0 0,1 95.1,30.9 Z" 
                    fill="#3b82f6" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  
                  {/* Maintenance - 23% */}
                  <path 
                    d="M0,0 L95.1,30.9 A100,100 0 0,1 64.3,-76.6 Z" 
                    fill="#10b981" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  
                  {/* Downtime - 10% */}
                  <path 
                    d="M0,0 L64.3,-76.6 A100,100 0 0,1 30.9,-95.1 Z" 
                    fill="#ef4444" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  
                  {/* Other - 22% */}
                  <path 
                    d="M0,0 L30.9,-95.1 A100,100 0 0,1 0,-100 Z" 
                    fill="#f59e0b" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  
                  {/* PercentaTATA Heavy Labels */}
                  <text x="50" y="-15" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">45%</text>
                  <text x="70" y="-50" fontSize="14" fontWeight="bold" fill="#ffffff" textAnchor="middle">23%</text>
                  <text x="20" y="-80" fontSize="12" fontWeight="bold" fill="#ffffff" textAnchor="middle">10%</text>
                  <text x="-40" y="-70" fontSize="14" fontWeight="bold" fill="#ffffff" textAnchor="middle">22%</text>
                  
                  {/* Center White Circle for Donut Chart Look */}
                  <circle cx="0" cy="0" r="60" fill="white" />
                  
                  {/* Center Text */}
                  <text x="0" y="-10" fontSize="14" fill="#4b5563" textAnchor="middle">Total Cost</text>
                  <text x="0" y="15" fontSize="18" fontWeight="bold" fill="#4b5563" textAnchor="middle">$1.24M</text>
                </g>
                
                {/* LeTATA Heavynd */}
                <g transform="translate(650, 70)">
                  <rect x="0" y="0" width="16" height="16" fill="#3b82f6" />
                  <text x="24" y="13" fontSize="14" fill="#4b5563">Operations ($558K)</text>
                  
                  <rect x="0" y="30" width="16" height="16" fill="#10b981" />
                  <text x="24" y="43" fontSize="14" fill="#4b5563">Maintenance ($285K)</text>
                  
                  <rect x="0" y="60" width="16" height="16" fill="#ef4444" />
                  <text x="24" y="73" fontSize="14" fill="#4b5563">Downtime ($124K)</text>
                  
                  <rect x="0" y="90" width="16" height="16" fill="#f59e0b" />
                  <text x="24" y="103" fontSize="14" fill="#4b5563">Other ($273K)</text>
                </g>
                
                {/* Cost Breakdown Bar Graph */}
                <g transform="translate(120, 120)">
                  {/* Y-axis */}
                  <line x1="0" y1="-80" x2="0" y2="80" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* X-axis */}
                  <line x1="0" y1="80" x2="200" y2="80" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Y-axis labels */}
                  <text x="-5" y="-70" fontSize="10" fill="#6b7280" textAnchor="end">$600K</text>
                  <text x="-5" y="-30" fontSize="10" fill="#6b7280" textAnchor="end">$400K</text>
                  <text x="-5" y="10" fontSize="10" fill="#6b7280" textAnchor="end">$200K</text>
                  <text x="-5" y="80" fontSize="10" fill="#6b7280" textAnchor="end">$0</text>
                  
                  {/* Bars */}
                  <rect x="20" y="-70" width="30" height="150" fill="#3b82f6" opacity="0.8" />
                  <text x="35" y="-80" fontSize="10" fill="#4b5563" textAnchor="middle">$558K</text>
                  <text x="35" y="95" fontSize="12" fill="#4b5563" textAnchor="middle">Operations</text>
                  
                  <rect x="60" y="-30" width="30" height="110" fill="#10b981" opacity="0.8" />
                  <text x="75" y="-40" fontSize="10" fill="#4b5563" textAnchor="middle">$285K</text>
                  <text x="75" y="95" fontSize="12" fill="#4b5563" textAnchor="middle">Maintenance</text>
                  
                  <rect x="100" y="0" width="30" height="80" fill="#ef4444" opacity="0.8" />
                  <text x="115" y="-10" fontSize="10" fill="#4b5563" textAnchor="middle">$124K</text>
                  <text x="115" y="95" fontSize="12" fill="#4b5563" textAnchor="middle">Downtime</text>
                  
                  <rect x="140" y="-25" width="30" height="105" fill="#f59e0b" opacity="0.8" />
                  <text x="155" y="-35" fontSize="10" fill="#4b5563" textAnchor="middle">$273K</text>
                  <text x="155" y="95" fontSize="12" fill="#4b5563" textAnchor="middle">Other</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Operations</div>
            <div className="text-xl font-bold text-blue-600">45%</div>
            <div className="text-xs text-gray-500">$558,000</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Maintenance</div>
            <div className="text-xl font-bold text-green-600">23%</div>
            <div className="text-xs text-gray-500">$285,000</div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Downtime</div>
            <div className="text-xl font-bold text-red-600">10%</div>
            <div className="text-xs text-gray-500">$124,000</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Other</div>
            <div className="text-xl font-bold text-yellow-600">22%</div>
            <div className="text-xs text-gray-500">$273,000</div>
          </div>
        </div>
      </div>
      
      {/* Cost by Equipment */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">Cost by Equipment Type</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Equipment Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Operating Cost
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Maintenance Cost
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Downtime Cost
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Cost
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Turbines</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$352,450</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$87,200</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$28,900</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$468,550</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Robotic Arms</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$215,780</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$53,400</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$18,650</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$287,830</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">CNC Machines</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$192,340</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$76,800</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$31,200</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$300,340</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Other Equipment</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$112,430</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$67,600</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$39,250</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$219,280</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* ROI Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4">ROI on Predictive Maintenance</h3>
          <div className="h-64 bg-white rounded-lg flex items-center justify-center">
            <div className="w-full h-full p-2">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 800 240">
                  {/* Chart Title */}
                  <text x="10" y="20" fontSize="14" fontWeight="bold" fill="#4b5563">Return on Investment Analysis</text>
                  
                  {/* X and Y Axes */}
                  <line x1="60" y1="200" x2="740" y2="200" stroke="#e5e7eb" strokeWidth="2" />
                  <line x1="60" y1="200" x2="60" y2="30" stroke="#e5e7eb" strokeWidth="2" />
                  
                  {/* Y-axis labels ($) */}
                  <text x="55" y="200" textAnchor="end" fontSize="12" fill="#6b7280">$0</text>
                  <text x="55" y="160" textAnchor="end" fontSize="12" fill="#6b7280">$100K</text>
                  <text x="55" y="120" textAnchor="end" fontSize="12" fill="#6b7280">$200K</text>
                  <text x="55" y="80" textAnchor="end" fontSize="12" fill="#6b7280">$300K</text>
                  <text x="55" y="40" textAnchor="end" fontSize="12" fill="#6b7280">$400K</text>
                  
                  {/* Horizontal grid lines */}
                  <line x1="60" y1="160" x2="740" y2="160" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="60" y1="120" x2="740" y2="120" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="60" y1="80" x2="740" y2="80" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="60" y1="40" x2="740" y2="40" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  
                  {/* Investment Bar */}
                  <rect x="150" y="128" width="100" height="72" fill="#ef4444" opacity="0.8" />
                  <text x="200" y="215" textAnchor="middle" fontSize="12" fill="#4b5563">Investment</text>
                  <text x="200" y="125" textAnchor="middle" fontSize="12" fill="#ffffff" fontWeight="bold">$145K</text>
                  
                  {/* Savings Bar */}
                  <rect x="350" y="38" width="100" height="162" fill="#10b981" opacity="0.8" />
                  <text x="400" y="215" textAnchor="middle" fontSize="12" fill="#4b5563">Savings</text>
                  <text x="400" y="35" textAnchor="middle" fontSize="12" fill="#ffffff" fontWeight="bold">$412K</text>
                  
                  {/* Net ROI Bar */}
                  <rect x="550" y="93" width="100" height="107" fill="#3b82f6" opacity="0.8" />
                  <text x="600" y="215" textAnchor="middle" fontSize="12" fill="#4b5563">Net Gain</text>
                  <text x="600" y="90" textAnchor="middle" fontSize="12" fill="#ffffff" fontWeight="bold">$267K</text>
                  
                  {/* ROI PercentaTATA Heavy */}
                  <circle cx="700" cy="70" r="40" fill="#10b981" opacity="0.8" />
                  <text x="700" y="65" textAnchor="middle" fontSize="18" fill="#ffffff" fontWeight="bold">284%</text>
                  <text x="700" y="85" textAnchor="middle" fontSize="12" fill="#ffffff">ROI</text>
                  
                  {/* Arrows */}
                  <line x1="250" y1="160" x2="350" y2="120" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,2" />
                  <polygon points="350,120 340,115 340,125" fill="#4b5563" />
                  
                  <line x1="450" y1="120" x2="550" y2="150" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,2" />
                  <polygon points="550,150 540,145 540,155" fill="#4b5563" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Annual Investment:</span>
              <span className="text-sm font-medium text-gray-900">$145,000</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm font-medium text-gray-600">Annual Savings:</span>
              <span className="text-sm font-medium text-gray-900">$412,000</span>
            </div>
            <div className="flex justify-between mt-2 pt-2 border-t">
              <span className="text-sm font-medium text-gray-600">ROI:</span>
              <span className="text-lg font-bold text-green-600">284%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Cost Savings Projections</h3>
          <div className="h-64 bg-white rounded-lg flex items-center justify-center">
            <div className="w-full h-full p-2">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 800 240">
                  {/* X and Y Axes */}
                  <line x1="60" y1="200" x2="740" y2="200" stroke="#e5e7eb" strokeWidth="2" />
                  <line x1="60" y1="200" x2="60" y2="30" stroke="#e5e7eb" strokeWidth="2" />
                  
                  {/* Y-axis labels ($ in millions) */}
                  <text x="50" y="200" textAnchor="end" fontSize="12" fill="#6b7280">$0</text>
                  <text x="50" y="160" textAnchor="end" fontSize="12" fill="#6b7280">$1M</text>
                  <text x="50" y="120" textAnchor="end" fontSize="12" fill="#6b7280">$2M</text>
                  <text x="50" y="80" textAnchor="end" fontSize="12" fill="#6b7280">$3M</text>
                  <text x="50" y="40" textAnchor="end" fontSize="12" fill="#6b7280">$4M</text>
                  
                  {/* X-axis labels (years) */}
                  <text x="100" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">1 Year</text>
                  <text x="190" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">2 Years</text>
                  <text x="280" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">3 Years</text>
                  <text x="370" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">4 Years</text>
                  <text x="460" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">5 Years</text>
                  <text x="550" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">6 Years</text>
                  <text x="640" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">7 Years</text>
                  
                  {/* Horizontal grid lines */}
                  <line x1="60" y1="160" x2="740" y2="160" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="60" y1="120" x2="740" y2="120" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="60" y1="80" x2="740" y2="80" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="60" y1="40" x2="740" y2="40" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  
                  {/* Vertical grid lines */}
                  <line x1="100" y1="30" x2="100" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="190" y1="30" x2="190" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="280" y1="30" x2="280" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="370" y1="30" x2="370" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="460" y1="30" x2="460" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="550" y1="30" x2="550" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="640" y1="30" x2="640" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  
                  {/* Cost Savings Projections Line */}
                  <path 
                    d="M100,160 L190,140 L280,120 L370,90 L460,65 L550,45 L640,35" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Area under the curve */}
                  <path 
                    d="M100,160 L190,140 L280,120 L370,90 L460,65 L550,45 L640,35 L640,200 L100,200 Z" 
                    fill="#10b981" 
                    opacity="0.2"
                  />
                  
                  {/* Data points */}
                  <circle cx="100" cy="160" r="5" fill="#10b981" />
                  <text x="100" y="150" textAnchor="middle" fontSize="12" fill="#10b981" fontWeight="bold">$0.4M</text>
                  
                  <circle cx="190" cy="140" r="5" fill="#10b981" />
                  <text x="190" y="130" textAnchor="middle" fontSize="12" fill="#10b981" fontWeight="bold">$0.9M</text>
                  
                  <circle cx="280" cy="120" r="5" fill="#10b981" />
                  <text x="280" y="110" textAnchor="middle" fontSize="12" fill="#10b981" fontWeight="bold">$1.4M</text>
                  
                  <circle cx="370" cy="90" r="5" fill="#10b981" />
                  <text x="370" y="80" textAnchor="middle" fontSize="12" fill="#10b981" fontWeight="bold">$2.0M</text>
                  
                  <circle cx="460" cy="65" r="5" fill="#10b981" />
                  <text x="460" y="55" textAnchor="middle" fontSize="12" fill="#10b981" fontWeight="bold">$2.6M</text>
                  
                  <circle cx="550" cy="45" r="5" fill="#10b981" />
                  <text x="550" y="35" textAnchor="middle" fontSize="12" fill="#10b981" fontWeight="bold">$3.1M</text>
                  
                  <circle cx="640" cy="35" r="5" fill="#10b981" />
                  <text x="640" y="25" textAnchor="middle" fontSize="12" fill="#10b981" fontWeight="bold">$3.5M</text>
                  
                  {/* Investment Line */}
                  <path 
                    d="M100,180 L640,120" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="2"
                    strokeDasharray="6,3"
                  />
                  
                  <text x="670" y="125" textAnchor="start" fontSize="12" fill="#ef4444">Investment</text>
                  
                  {/* LeTATA Heavynd */}
                  <rect x="650" y="70" width="16" height="5" fill="#10b981" />
                  <text x="670" y="75" fontSize="12" fill="#6b7280">Cost Savings</text>
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-sm text-gray-600">1 Year</div>
              <div className="text-xl font-bold text-green-600">$412K</div>
              <div className="text-xs text-gray-500">284% ROI</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-sm text-gray-600">3 Years</div>
              <div className="text-xl font-bold text-green-600">$1.4M</div>
              <div className="text-xs text-gray-500">965% ROI</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-sm text-gray-600">5 Years</div>
              <div className="text-xl font-bold text-green-600">$2.6M</div>
              <div className="text-xs text-gray-500">1793% ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Historical Trends Component
const HistoricalTrends: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
          <h3 className="text-lg font-medium text-teal-800 mb-2">Long-term Reliability</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-teal-600">86.4%</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              4.2%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">5-year trend</p>
        </div>
        
        <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
          <h3 className="text-lg font-medium text-teal-800 mb-2">AveraTATA Heavy Lifespan</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-teal-600">12.8</span>
            <span className="text-lg ml-1 text-teal-600">years</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              1.5%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">All equipment averaTATA Heavy</p>
        </div>
        
        <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
          <h3 className="text-lg font-medium text-teal-800 mb-2">Failure Reduction</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-teal-600">67%</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              12%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Since predictive system installation</p>
        </div>
      </div>
      
      {/* Year-over-Year Performance */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Year-over-Year Equipment Performance</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* X and Y Axes */}
                <line x1="60" y1="200" x2="740" y2="200" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="60" y1="200" x2="60" y2="30" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Y-axis labels (Efficiency %) */}
                <text x="50" y="200" textAnchor="end" fontSize="12" fill="#6b7280">70%</text>
                <text x="50" y="165" textAnchor="end" fontSize="12" fill="#6b7280">75%</text>
                <text x="50" y="130" textAnchor="end" fontSize="12" fill="#6b7280">80%</text>
                <text x="50" y="95" textAnchor="end" fontSize="12" fill="#6b7280">85%</text>
                <text x="50" y="60" textAnchor="end" fontSize="12" fill="#6b7280">90%</text>
                <text x="50" y="25" textAnchor="end" fontSize="12" fill="#6b7280">95%</text>
                
                {/* Horizontal grid lines */}
                <line x1="60" y1="165" x2="740" y2="165" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="130" x2="740" y2="130" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="95" x2="740" y2="95" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="60" x2="740" y2="60" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="25" x2="740" y2="25" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* X-axis labels (Years) */}
                <text x="100" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">2020</text>
                <text x="220" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">2021</text>
                <text x="340" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">2022</text>
                <text x="460" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">2023</text>
                <text x="580" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">2024</text>
                <text x="700" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">2025</text>
                
                {/* Vertical grid lines */}
                <line x1="100" y1="30" x2="100" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="220" y1="30" x2="220" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="340" y1="30" x2="340" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="460" y1="30" x2="460" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="580" y1="30" x2="580" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="700" y1="30" x2="700" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Performance Lines */}
                {/* Overall Performance Line */}
                <path 
                  d="M100,130 L220,115 L340,95 L460,85 L580,75 L700,60" 
                  fill="none" 
                  stroke="#14b8a6" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Data points */}
                <circle cx="100" cy="130" r="5" fill="#14b8a6" />
                <circle cx="220" cy="115" r="5" fill="#14b8a6" />
                <circle cx="340" cy="95" r="5" fill="#14b8a6" />
                <circle cx="460" cy="85" r="5" fill="#14b8a6" />
                <circle cx="580" cy="75" r="5" fill="#14b8a6" />
                <circle cx="700" cy="60" r="5" fill="#14b8a6" />
                
                {/* Turbines Performance Line */}
                <path 
                  d="M100,90 L220,85 L340,75 L460,65 L580,55 L700,40" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="2"
                  strokeDasharray="5,2"
                />
                
                {/* Robotic Arms Performance Line */}
                <path 
                  d="M100,110 L220,100 L340,85 L460,75 L580,65 L700,50" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="2"
                  strokeDasharray="5,2"
                />
                
                {/* CNC Machines Performance Line */}
                <path 
                  d="M100,135 L220,125 L340,110 L460,100 L580,90 L700,80" 
                  fill="none" 
                  stroke="#f59e0b" 
                  strokeWidth="2"
                  strokeDasharray="5,2"
                />
                
                {/* Packaging Machines Performance Line */}
                <path 
                  d="M100,165 L220,155 L340,140 L460,115 L580,100 L700,85" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="2"
                  strokeDasharray="5,2"
                />
                
                {/* LeTATA Heavynd */}
                <circle cx="600" cy="30" r="4" fill="#14b8a6" />
                <text x="610" y="34" fontSize="12" fill="#6b7280">Overall Performance</text>
                
                <line x1="600" y1="50" x2="610" y2="50" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,2" />
                <text x="615" y="54" fontSize="12" fill="#6b7280">Turbines</text>
                
                <line x1="600" y1="70" x2="610" y2="70" stroke="#10b981" strokeWidth="2" strokeDasharray="5,2" />
                <text x="615" y="74" fontSize="12" fill="#6b7280">Robotic Arms</text>
                
                <line x1="680" y1="50" x2="690" y2="50" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,2" />
                <text x="695" y="54" fontSize="12" fill="#6b7280">CNC Machines</text>
                
                <line x1="680" y1="70" x2="690" y2="70" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,2" />
                <text x="695" y="74" fontSize="12" fill="#6b7280">Packaging</text>
                
                {/* Trend indicators */}
                <polygon points="720,60 730,50 740,60" fill="#14b8a6" />
                <text x="730" y="45" fontSize="10" fill="#14b8a6" textAnchor="middle">+12.5%</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-500 flex justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-teal-500 rounded-full mr-1"></div>
            <span>5-Year Improvement: +12.5%</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            <span>Best Performer: Turbines (94.5%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
            <span>Most Improved: Packaging (+14.3%)</span>
          </div>
        </div>
      </div>
      
      {/* Seasonal Patterns */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Seasonal Failure Pattern Analysis</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* X and Y Axes */}
                <line x1="60" y1="200" x2="740" y2="200" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="60" y1="200" x2="60" y2="30" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Y-axis labels (Failure Count) */}
                <text x="50" y="200" textAnchor="end" fontSize="12" fill="#6b7280">0</text>
                <text x="50" y="165" textAnchor="end" fontSize="12" fill="#6b7280">5</text>
                <text x="50" y="130" textAnchor="end" fontSize="12" fill="#6b7280">10</text>
                <text x="50" y="95" textAnchor="end" fontSize="12" fill="#6b7280">15</text>
                <text x="50" y="60" textAnchor="end" fontSize="12" fill="#6b7280">20</text>
                <text x="50" y="25" textAnchor="end" fontSize="12" fill="#6b7280">25</text>
                
                {/* Horizontal grid lines */}
                <line x1="60" y1="165" x2="740" y2="165" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="130" x2="740" y2="130" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="95" x2="740" y2="95" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="60" x2="740" y2="60" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="60" y1="25" x2="740" y2="25" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* X-axis labels (Months) */}
                <text x="90" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Jan</text>
                <text x="145" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Feb</text>
                <text x="200" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Mar</text>
                <text x="255" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Apr</text>
                <text x="310" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">May</text>
                <text x="365" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Jun</text>
                <text x="420" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Jul</text>
                <text x="475" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Aug</text>
                <text x="530" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Sep</text>
                <text x="585" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Oct</text>
                <text x="640" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Nov</text>
                <text x="695" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Dec</text>
                
                {/* Vertical grid lines */}
                <line x1="90" y1="30" x2="90" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="145" y1="30" x2="145" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="200" y1="30" x2="200" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="255" y1="30" x2="255" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="310" y1="30" x2="310" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="365" y1="30" x2="365" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="420" y1="30" x2="420" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="475" y1="30" x2="475" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="530" y1="30" x2="530" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="585" y1="30" x2="585" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="640" y1="30" x2="640" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="695" y1="30" x2="695" y2="200" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Season Indicators */}
                <rect x="90" y="222" width="165" height="4" fill="#3b82f6" rx="2" ry="2" />
                <rect x="255" y="222" width="165" height="4" fill="#10b981" rx="2" ry="2" />
                <rect x="420" y="222" width="165" height="4" fill="#f59e0b" rx="2" ry="2" />
                <rect x="585" y="222" width="165" height="4" fill="#8b5cf6" rx="2" ry="2" />
                
                {/* Seasonal Pattern Lines */}
                {/* Current Year */}
                <path 
                  d="M90,150 L145,145 L200,120 L255,95 L310,80 L365,70 L420,85 L475,115 L530,120 L585,125 L640,140 L695,155" 
                  fill="none" 
                  stroke="#2563eb" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Previous Year */}
                <path 
                  d="M90,160 L145,155 L200,130 L255,100 L310,90 L365,80 L420,95 L475,125 L530,130 L585,135 L640,150 L695,165" 
                  fill="none" 
                  stroke="#6b7280" 
                  strokeWidth="2"
                  strokeDasharray="5,2"
                />
                
                {/* Seasonal Highlights - Temperature Impact */}
                <path 
                  d="M90,60 L145,65 L200,75 L255,90 L310,115 L365,135 L420,140 L475,125 L530,100 L585,80 L640,65 L695,60" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  strokeDasharray="3,2"
                />
                
                {/* Data points for current year */}
                <circle cx="90" cy="150" r="4" fill="#2563eb" />
                <circle cx="145" cy="145" r="4" fill="#2563eb" />
                <circle cx="200" cy="120" r="4" fill="#2563eb" />
                <circle cx="255" cy="95" r="4" fill="#2563eb" />
                <circle cx="310" cy="80" r="4" fill="#2563eb" />
                <circle cx="365" cy="70" r="4" fill="#2563eb" />
                <circle cx="420" cy="85" r="4" fill="#2563eb" />
                <circle cx="475" cy="115" r="4" fill="#2563eb" />
                <circle cx="530" cy="120" r="4" fill="#2563eb" />
                <circle cx="585" cy="125" r="4" fill="#2563eb" />
                <circle cx="640" cy="140" r="4" fill="#2563eb" />
                <circle cx="695" cy="155" r="4" fill="#2563eb" />
                
                {/* LeTATA Heavynd */}
                <circle cx="600" cy="30" r="4" fill="#2563eb" />
                <text x="610" y="34" fontSize="12" fill="#6b7280">Current Year</text>
                
                <line x1="600" y1="50" x2="610" y2="50" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,2" />
                <text x="615" y="54" fontSize="12" fill="#6b7280">Previous Year</text>
                
                <line x1="600" y1="70" x2="610" y2="70" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="3,2" />
                <text x="615" y="74" fontSize="12" fill="#6b7280">Temperature Impact</text>
                
                {/* Annotations */}
                <circle cx="365" cy="70" r="8" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="2,1" />
                <text x="350" y="50" fontSize="10" fill="#2563eb" textAnchor="middle">Summer</text>
                <text x="350" y="62" fontSize="10" fill="#2563eb" textAnchor="middle">Low</text>
                
                <circle cx="585" cy="125" r="8" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="2,1" />
                <text x="585" y="108" fontSize="10" fill="#2563eb" textAnchor="middle">Fall</text>
                <text x="585" y="120" fontSize="10" fill="#2563eb" textAnchor="middle">Increase</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded-lg text-center">
            <div className="text-sm text-gray-600">Winter (Dec-Feb)</div>
            <div className="text-xl font-bold text-blue-600">18%</div>
            <div className="text-xs text-gray-500">of annual failures</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg text-center">
            <div className="text-sm text-gray-600">Spring (Mar-May)</div>
            <div className="text-xl font-bold text-green-600">32%</div>
            <div className="text-xs text-gray-500">of annual failures</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-center">
            <div className="text-sm text-gray-600">Summer (Jun-Aug)</div>
            <div className="text-xl font-bold text-yellow-600">25%</div>
            <div className="text-xs text-gray-500">of annual failures</div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg text-center">
            <div className="text-sm text-gray-600">Fall (Sep-Nov)</div>
            <div className="text-xl font-bold text-purple-600">25%</div>
            <div className="text-xs text-gray-500">of annual failures</div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Insights:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1 mr-2"></span>
              <span>Highest failure rate occurs in spring months (March-May), likely due to transitional weather and increased production after winter maintenance.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></span>
              <span>Summer shows lowest failure rates despite high temperatures, indicating effective cooling systems and summer maintenance schedules.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1 mr-2"></span>
              <span>Year-over-year improvement seen across all seasons, with 12% overall reduction in seasonal variation.</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Equipment Lifespan Analysis */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">Equipment Lifespan Analysis</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Equipment Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AveraTATA Heavy Lifespan
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Oldest Unit
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Failure Rate Trend
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Replacement Projection
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Turbines</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">15.2 years</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">18.4 years</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Decreasing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Q3 2027</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Robotic Arms</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">10.8 years</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">12.3 years</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Decreasing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Q1 2026</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">CNC Machines</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">12.5 years</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">14.1 years</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Stable
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Q4 2026</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Comparative Analysis Component
const ComparativeAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-pink-50 rounded-lg p-4 border border-pink-100">
          <h3 className="text-lg font-medium text-pink-800 mb-2">Industry Benchmark</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-pink-600">108%</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              8%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Performance relative to industry standard</p>
        </div>
        
        <div className="bg-pink-50 rounded-lg p-4 border border-pink-100">
          <h3 className="text-lg font-medium text-pink-800 mb-2">Location Efficiency</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-pink-600">92.7%</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              1.3%
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">AveraTATA Heavy across all locations</p>
        </div>
        
        <div className="bg-pink-50 rounded-lg p-4 border border-pink-100">
          <h3 className="text-lg font-medium text-pink-800 mb-2">Vendor Rating</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-pink-600">4.2</span>
            <span className="text-lg ml-1 text-pink-600">/5</span>
            <span className="ml-2 text-sm text-red-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              0.3
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">AveraTATA Heavy vendor performance</p>
        </div>
      </div>
      
      {/* Industry Benchmarks */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Industry Performance Benchmarks</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* Radar Chart Background */}
                <circle cx="400" cy="120" r="100" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                <circle cx="400" cy="120" r="75" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                <circle cx="400" cy="120" r="50" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                <circle cx="400" cy="120" r="25" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                
                {/* Radar Chart Axes */}
                <line x1="400" y1="20" x2="400" y2="220" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="300" y1="120" x2="500" y2="120" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="330" y1="50" x2="470" y2="190" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="330" y1="190" x2="470" y2="50" stroke="#e5e7eb" strokeWidth="1" />
                
                {/* Axis Labels */}
                <text x="400" y="12" textAnchor="middle" fontSize="12" fill="#6b7280">Efficiency</text>
                <text x="510" y="120" textAnchor="start" fontSize="12" fill="#6b7280">Uptime</text>
                <text x="470" y="205" textAnchor="middle" fontSize="12" fill="#6b7280">Cost Effectiveness</text>
                <text x="330" y="205" textAnchor="middle" fontSize="12" fill="#6b7280">Maintenance</text>
                <text x="290" y="120" textAnchor="end" fontSize="12" fill="#6b7280">Reliability</text>
                <text x="330" y="35" textAnchor="middle" fontSize="12" fill="#6b7280">LonTATA Heavyvity</text>
                
                {/* Scale Labels */}
                <text x="400" y="95" textAnchor="middle" fontSize="10" fill="#9ca3af">25%</text>
                <text x="400" y="70" textAnchor="middle" fontSize="10" fill="#9ca3af">50%</text>
                <text x="400" y="45" textAnchor="middle" fontSize="10" fill="#9ca3af">75%</text>
                <text x="400" y="20" textAnchor="middle" fontSize="10" fill="#9ca3af">100%</text>
                
                {/* Your Company Radar Plot */}
                <path 
                  d="M400,45 L465,120 L445,175 L355,175 L335,120 L350,65 Z" 
                  fill="rgba(59, 130, 246, 0.2)" 
                  stroke="#3b82f6" 
                  strokeWidth="2"
                />
                
                {/* Industry AveraTATA Heavy Radar Plot */}
                <path 
                  d="M400,70 L445,120 L420,155 L380,155 L355,120 L380,85 Z" 
                  fill="none" 
                  stroke="#6b7280" 
                  strokeWidth="1.5"
                  strokeDasharray="4,2"
                />
                
                {/* Data Points - Your Company */}
                <circle cx="400" cy="45" r="4" fill="#3b82f6" /> {/* Efficiency */}
                <circle cx="465" cy="120" r="4" fill="#3b82f6" /> {/* Uptime */}
                <circle cx="445" cy="175" r="4" fill="#3b82f6" /> {/* Cost Effectiveness */}
                <circle cx="355" cy="175" r="4" fill="#3b82f6" /> {/* Maintenance */}
                <circle cx="335" cy="120" r="4" fill="#3b82f6" /> {/* Reliability */}
                <circle cx="350" cy="65" r="4" fill="#3b82f6" /> {/* LonTATA Heavyvity */}
                
                {/* Data Points - Industry AveraTATA Heavy */}
                <circle cx="400" cy="70" r="3" fill="#6b7280" /> {/* Efficiency */}
                <circle cx="445" cy="120" r="3" fill="#6b7280" /> {/* Uptime */}
                <circle cx="420" cy="155" r="3" fill="#6b7280" /> {/* Cost Effectiveness */}
                <circle cx="380" cy="155" r="3" fill="#6b7280" /> {/* Maintenance */}
                <circle cx="355" cy="120" r="3" fill="#6b7280" /> {/* Reliability */}
                <circle cx="380" cy="85" r="3" fill="#6b7280" /> {/* LonTATA Heavyvity */}
                
                {/* LeTATA Heavynd */}
                <rect x="600" y="50" width="10" height="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                <text x="620" y="60" fontSize="12" fill="#6b7280">Your Company</text>
                
                <rect x="600" y="75" width="10" height="10" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,2" />
                <text x="620" y="85" fontSize="12" fill="#6b7280">Industry AveraTATA Heavy</text>
                
                {/* PercentaTATA Heavy Labels for Your Company */}
                <text x="400" y="40" textAnchor="middle" fontSize="9" fill="#3b82f6" fontWeight="bold">112%</text>
                <text x="470" y="120" textAnchor="middle" fontSize="9" fill="#3b82f6" fontWeight="bold">108%</text>
                <text x="445" y="180" textAnchor="middle" fontSize="9" fill="#3b82f6" fontWeight="bold">85%</text>
                <text x="355" y="180" textAnchor="middle" fontSize="9" fill="#3b82f6" fontWeight="bold">78%</text>
                <text x="330" y="120" textAnchor="middle" fontSize="9" fill="#3b82f6" fontWeight="bold">95%</text>
                <text x="345" y="65" textAnchor="middle" fontSize="9" fill="#3b82f6" fontWeight="bold">105%</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Efficiency</div>
            <div className="text-xl font-bold text-blue-600">112%</div>
            <div className="text-xs text-gray-500">of industry averaTATA Heavy</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Maintenance Cost</div>
            <div className="text-xl font-bold text-green-600">85%</div>
            <div className="text-xs text-gray-500">of industry averaTATA Heavy</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Downtime</div>
            <div className="text-xl font-bold text-yellow-600">78%</div>
            <div className="text-xs text-gray-500">of industry averaTATA Heavy</div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">LonTATA Heavyvity</div>
            <div className="text-xl font-bold text-purple-600">105%</div>
            <div className="text-xs text-gray-500">of industry averaTATA Heavy</div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Benchmark Insights:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1 mr-2"></span>
              <span>Your equipment efficiency exceeds industry standard by 12%, placing you in the top 15% of manufacturing facilities.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></span>
              <span>Maintenance costs are 15% below industry averaTATA Heavy while achieving higher reliability, indicating effective predictive maintenance strategies.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1 mr-2"></span>
              <span>Equipment lonTATA Heavyvity is 5% above industry standard, providing additional ROI on capital investments.</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Location Comparison */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">Equipment Comparison Across Locations</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Efficiency
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Uptime
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost per Hour
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Failure Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Main Factory</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">92.5%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">98.2%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$245/hr</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">1.2%</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">North Plant</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">90.1%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">97.4%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$263/hr</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">1.5%</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">South Plant</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">95.6%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">99.1%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$238/hr</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">0.8%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Vendor Performance */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Vendor Performance Comparison</h3>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 240">
                {/* X and Y Axes */}
                <line x1="100" y1="200" x2="700" y2="200" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="100" y1="200" x2="100" y2="30" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Y-axis labels (Rating Scale) */}
                <text x="90" y="200" textAnchor="end" fontSize="12" fill="#6b7280">0</text>
                <text x="90" y="165" textAnchor="end" fontSize="12" fill="#6b7280">1</text>
                <text x="90" y="130" textAnchor="end" fontSize="12" fill="#6b7280">2</text>
                <text x="90" y="95" textAnchor="end" fontSize="12" fill="#6b7280">3</text>
                <text x="90" y="60" textAnchor="end" fontSize="12" fill="#6b7280">4</text>
                <text x="90" y="25" textAnchor="end" fontSize="12" fill="#6b7280">5</text>
                
                {/* Horizontal grid lines */}
                <line x1="100" y1="165" x2="700" y2="165" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="100" y1="130" x2="700" y2="130" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="100" y1="95" x2="700" y2="95" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="100" y1="60" x2="700" y2="60" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="100" y1="25" x2="700" y2="25" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Vendor Names */}
                <text x="150" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">TATA Steel</text>
                <text x="250" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">TATA Automation</text>
                <text x="350" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">TATA Tools</text>
                <text x="450" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">TATA Heavy</text>
                <text x="550" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">Rockwell</text>
                <text x="650" y="215" textAnchor="middle" fontSize="12" fill="#6b7280">TATA Environmental</text>
                
                {/* LeTATA Heavynd */}
                <rect x="580" y="30" width="12" height="12" fill="#3b82f6" opacity="0.8" />
                <text x="600" y="40" fontSize="12" fill="#6b7280">Overall Rating</text>
                
                <rect x="580" y="50" width="12" height="12" fill="#10b981" opacity="0.8" />
                <text x="600" y="60" fontSize="12" fill="#6b7280">Reliability</text>
                
                <rect x="580" y="70" width="12" height="12" fill="#f59e0b" opacity="0.8" />
                <text x="600" y="80" fontSize="12" fill="#6b7280">Support Quality</text>
                
                {/* Bar Chart - Overall Rating (Blue) */}
                <rect x="125" y="42" width="50" height="158" fill="#3b82f6" opacity="0.8" rx="2" ry="2" />
                <rect x="225" y="48" width="50" height="152" fill="#3b82f6" opacity="0.8" rx="2" ry="2" />
                <rect x="325" y="54" width="50" height="146" fill="#3b82f6" opacity="0.8" rx="2" ry="2" />
                <rect x="425" y="72" width="50" height="128" fill="#3b82f6" opacity="0.8" rx="2" ry="2" />
                <rect x="525" y="66" width="50" height="134" fill="#3b82f6" opacity="0.8" rx="2" ry="2" />
                <rect x="625" y="60" width="50" height="140" fill="#3b82f6" opacity="0.8" rx="2" ry="2" />
                
                {/* Rating Text Labels */}
                <text x="150" y="35" textAnchor="middle" fontSize="11" fill="#3b82f6" fontWeight="bold">4.7</text>
                <text x="250" y="41" textAnchor="middle" fontSize="11" fill="#3b82f6" fontWeight="bold">4.5</text>
                <text x="350" y="47" textAnchor="middle" fontSize="11" fill="#3b82f6" fontWeight="bold">4.3</text>
                <text x="450" y="65" textAnchor="middle" fontSize="11" fill="#3b82f6" fontWeight="bold">3.8</text>
                <text x="550" y="59" textAnchor="middle" fontSize="11" fill="#3b82f6" fontWeight="bold">4.0</text>
                <text x="650" y="53" textAnchor="middle" fontSize="11" fill="#3b82f6" fontWeight="bold">4.2</text>
                
                {/* Industry AveraTATA Heavy Line */}
                <line x1="100" y1="60" x2="700" y2="60" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3" />
                <text x="120" y="55" textAnchor="start" fontSize="10" fill="#ef4444">Industry AveraTATA Heavy (4.0)</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">TATA Steel</div>
            <div className="text-xl font-bold text-blue-600">4.7/5</div>
            <div className="text-xs text-green-600">Top performer</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">TATA Automation</div>
            <div className="text-xl font-bold text-blue-600">4.5/5</div>
            <div className="text-xs text-green-600">Above averaTATA Heavy</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">TATA Tools</div>
            <div className="text-xl font-bold text-blue-600">4.3/5</div>
            <div className="text-xs text-green-600">Above averaTATA Heavy</div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Vendor Analysis:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1 mr-2"></span>
              <span>TATA Steel consistently outperforms other vendors with 94% reliability and excellent technical support response times.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></span>
              <span>TATA Automation and TATA Tools provide strong secondary options with competitive pricing and good parts availability.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-1 mr-2"></span>
              <span>TATA Heavy equipment shows higher maintenance requirements and lower overall satisfaction ratings.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Analytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('performance');

  return (
    <ClassicLayout>
      <div className="space-y-6">
        <div className="bg-white px-6 py-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-gray-800">Analytics & Insights</h1>
          <p className="text-gray-600 mt-1">
            Comprehensive analysis of your equipment performance and maintenance data.
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'performance'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('performance')}
              >
                Equipment Performance
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'maintenance'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('maintenance')}
              >
                Maintenance Analysis
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'prediction'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('prediction')}
              >
                Prediction Insights
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'costs'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('costs')}
              >
                Cost Analysis
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'trends'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('trends')}
              >
                Historical Trends
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'comparison'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('comparison')}
              >
                Comparative Analysis
              </button>
            </nav>
          </div>
          
          {/* Tab contents */}
          <div className="p-6">
            {/* Equipment Performance Tab */}
            {activeTab === 'performance' && (
              <PerformanceMetrics />
            )}

            {/* Maintenance Analysis Tab */}
            {activeTab === 'maintenance' && (
              <MaintenanceAnalysis />
            )}

            {/* Prediction Insights Tab */}
            {activeTab === 'prediction' && (
              <PredictionInsights />
            )}

            {/* Cost Analysis Tab */}
            {activeTab === 'costs' && (
              <CostAnalysis />
            )}

            {/* Historical Trends Tab */}
            {activeTab === 'trends' && (
              <HistoricalTrends />
            )}

            {/* Comparative Analysis Tab */}
            {activeTab === 'comparison' && (
              <ComparativeAnalysis />
            )}
          </div>
        </div>
      </div>
    </ClassicLayout>
  );
};

export default Analytics; 
