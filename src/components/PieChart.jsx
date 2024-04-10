import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import PropTypes from "prop-types";

const PieChart = ({ keywords }) => {
  const chartRef = useRef();
  const chartInstanceRef = useRef(null); // Reference to the Chart instance

  useEffect(() => {
    if (keywords.length === 0) return;

    const ctx = chartRef.current.getContext('2d');

    // Calculate sizes for the pie chart
    const sizes = keywords.map(x => x.percent);

    // Destroy previous Chart instance if it exists
    if (chartInstanceRef.current !== null) {
      chartInstanceRef.current.destroy();
    }

    // Create a new pie chart
    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: keywords.map(x => x.emotion),
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
                    color: 'rgb(255, 99, 132)',
                    fillStyle: 'white',
                }
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
