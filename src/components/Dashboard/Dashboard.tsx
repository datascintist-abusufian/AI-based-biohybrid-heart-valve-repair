import React from 'react';
import { ValveSimulation } from '../ValveSimulation';
import { HistoryChart } from './HistoryChart';

export const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">AI-Controlled Biohybrid Heart Valve Made by Md Abu Sufian</h1>
        <p className="text-gray-600 mt-2">Real-time monitoring and analysis system</p>
      </header>
      {/* Add your text below */}
      <div className="mb-6">
        <p className="text-gray-700 text-lg">
          Welcome to the AI-Controlled Biohybrid Heart Valve Dashboard. This system provides real-time
          updates on valve health, wear, damage levels, and risk scores. Navigate through the
          visualizations to monitor and analyze critical metrics effectively.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ValveSimulation />
        <HistoryChart />
      </div>
    </div>
  );
};
