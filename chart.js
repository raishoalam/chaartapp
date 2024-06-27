import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map(entry => entry.timestamp),
            datasets: [{
              label: 'Value',
              data: data.map(entry => entry.value),
              borderColor: 'blue',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return `Value: ${tooltipItem.raw}`;
                  }
                }
              }
            }
          }
        });
      }
    }
  }, [data]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
