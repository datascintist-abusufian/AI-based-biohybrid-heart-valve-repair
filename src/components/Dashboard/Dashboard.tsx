import React from 'react';
import { ValveSimulation } from '../ValveSimulation';
import { HistoryChart } from './HistoryChart';

export const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-indigo-800">
          AI-Controlled Biohybrid Heart Valve
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Made by <span className="text-indigo-600 font-medium">Md Abu Sufian</span>
        </p>
        <p className="text-md text-gray-600 mt-2">
          A real-time monitoring and analysis system for heart valve health.
        </p>
      </header>

      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <p className="text-gray-800 text-lg leading-relaxed">
          Welcome to the <span className="text-indigo-700 font-semibold">AI-Controlled Biohybrid Heart Valve</span> 
          Dashboard. This system offers precise insights into valve health, tracking critical parameters such as 
          wear, damage levels, flow rate, and pressure. Explore our real-time visualizations to monitor and 
          analyze key health metrics effectively, empowering enhanced decision-making in biomedical innovation.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Valve Simulation Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ValveSimulation />
        </div>

        {/* History Chart Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <HistoryChart />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-600">
        <p className="text-sm">
          Developed with ❤️ by <span className="text-indigo-600 font-medium">Md Abu Sufian</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
