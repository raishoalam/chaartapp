import React from 'react';
import ChartComponent from './ChartComponent';

const chartData = [
  { timestamp: '2023-01-01T00:00:00Z', value: 10 },
  { timestamp: '2023-01-02T00:00:00Z', value: 12 },
  { timestamp: '2023-01-03T00:00:00Z', value: 5 },
  // Add more data points as needed
];

const App = () => {
  return (
    <div className="app">
      <h1>Chart Application</h1>
      <ChartComponent data={chartData} />
    </div>
  );
};

export default App;
