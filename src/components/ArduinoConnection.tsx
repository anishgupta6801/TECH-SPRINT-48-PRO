import React, { useState, useEffect } from 'react';
import { Equipment } from '../types';

interface ArduinoConnectionProps {
  equipment: Equipment;
  onConnect: (ip: string, port: number) => void;
  onDisconnect: () => void;
}

const ArduinoConnection: React.FC<ArduinoConnectionProps> = ({ 
  equipment, 
  onConnect, 
  onDisconnect 
}) => {
  const [ip, setIp] = useState(equipment.arduinoIP || '');
  const [port, setPort] = useState(equipment.arduinoPort || 80);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionType, setConnectionType] = useState<'wifi' | 'usb'>('wifi');
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      if (connectionType === 'wifi') {
        // First connect to WiFi network
        const wifiResponse = await fetch('http://localhost:5000/arduino/wifi-connect', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            machine_id: equipment.id,
            ssid,
            password
          })
        });

        if (!wifiResponse.ok) {
          throw new Error('Failed to connect to WiFi network');
        }

        // Then establish Arduino connection
        await onConnect(ip, port);
      } else {
        // Direct USB connection
        await onConnect(ip, port);
      }
    } catch (error) {
      console.error('Failed to connect to Arduino:', error);
    }
    setIsConnecting(false);
  };

  const handleDisconnect = async () => {
    try {
      await onDisconnect();
    } catch (error) {
      console.error('Failed to disconnect from Arduino:', error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Arduino Connection</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Status:</span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            equipment.arduinoStatus === 'connected' ? 'bg-green-100 text-green-800' :
            equipment.arduinoStatus === 'error' ? 'bg-red-100 text-red-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {equipment.arduinoStatus || 'Not Connected'}
          </span>
        </div>

        {equipment.arduinoStatus === 'connected' && equipment.sensorData && (
          <div className="grid grid-cols-2 gap-4">
            {equipment.sensorData.temperature !== undefined && (
              <div>
                <span className="text-sm font-medium text-gray-700">Temperature:</span>
                <span className="ml-2">{equipment.sensorData.temperature}°C</span>
              </div>
            )}
            {equipment.sensorData.vibration !== undefined && (
              <div>
                <span className="text-sm font-medium text-gray-700">Vibration:</span>
                <span className="ml-2">{equipment.sensorData.vibration} m/s²</span>
              </div>
            )}
            {equipment.sensorData.powerConsumption !== undefined && (
              <div>
                <span className="text-sm font-medium text-gray-700">Power:</span>
                <span className="ml-2">{equipment.sensorData.powerConsumption} W</span>
              </div>
            )}
            {equipment.sensorData.pressure !== undefined && (
              <div>
                <span className="text-sm font-medium text-gray-700">Pressure:</span>
                <span className="ml-2">{equipment.sensorData.pressure} kPa</span>
              </div>
            )}
            {equipment.sensorData.humidity !== undefined && (
              <div>
                <span className="text-sm font-medium text-gray-700">Humidity:</span>
                <span className="ml-2">{equipment.sensorData.humidity}%</span>
              </div>
            )}
          </div>
        )}

        {equipment.arduinoStatus !== 'connected' && (
          <div className="space-y-4">
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setConnectionType('wifi')}
                className={`px-4 py-2 rounded-md ${
                  connectionType === 'wifi'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                WiFi Connection
              </button>
              <button
                onClick={() => setConnectionType('usb')}
                className={`px-4 py-2 rounded-md ${
                  connectionType === 'usb'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                USB Connection
              </button>
            </div>

            {connectionType === 'wifi' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">WiFi SSID</label>
                  <input
                    type="text"
                    value={ssid}
                    onChange={(e) => setSsid(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter WiFi network name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">WiFi Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter WiFi password"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">IP Address</label>
              <input
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="192.168.1.100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Port</label>
              <input
                type="number"
                value={port}
                onChange={(e) => setPort(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="80"
              />
            </div>
            <button
              onClick={handleConnect}
              disabled={isConnecting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isConnecting ? 'Connecting...' : 'Connect to Arduino'}
            </button>
          </div>
        )}

        {equipment.arduinoStatus === 'connected' && (
          <button
            onClick={handleDisconnect}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Disconnect Arduino
          </button>
        )}
      </div>
    </div>
  );
};

export default ArduinoConnection; 