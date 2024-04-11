import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import PropTypes from "prop-types";

const PieChart = ({ keywords }) => {
  const chartRef = useRef();
  const chartInstanceRef = useRef(null); 

  useEffect(() => {
    if (keywords.length === 0) return;

    const ctx = chartRef.current.getContext('2d');
    const sizes = keywords.map(x => x.percentage);

    // Destroy previous Chart instance if it exists
    if (chartInstanceRef.current !== null) {
      chartInstanceRef.current.destroy();
    }

    // Register datalabels plugin
    Chart.register(ChartDataLabels);

    // Create a new pie chart
    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: keywords.map(x => x.label),
        datasets: [{
          data: sizes,
          backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#e4f18c', '#d98cf1', '#e6a97d'], 
        }],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'rgb(38, 5, 12)',
              fillStyle: 'white',
            }
          },
          tooltip: {
            enabled: false
          },
          datalabels: {
            color: '#000',
            font: {
              size: 14,
              weight: 'bold'
            },
            formatter: (value, context) => `${context.chart.data.labels[context.dataIndex]}: ${value}%`
          }
        },
      },
    });
  }, [keywords]);

  return <canvas ref={chartRef} />;
};

PieChart.propTypes = {
  keywords: PropTypes.array.isRequired,
};

export default PieChart;
