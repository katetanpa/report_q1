import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarCPM() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
              ticks: {
                callback: function(value, index, ticks) {
                    return '$' + value;
                }
              }
            }
        }
      };
      
      const labels = ["Saudi Arabia", "Australia", "United Kingdom", "United States", "China", "Canada", "Sweden", "Germany", "Netherlands", "Taiwan", "France", "South Korea", "Belgium", "South Africa", "Japan"];

      const data = {
        labels,
        datasets: [
          {
            data: [6.03, 4.65, 4.61, 4.37, 4.29, 4.09, 3.85, 3.64, 3.56, 3.55, 3.32, 3.32, 3.26, 2.98, 2.8],
            backgroundColor: '#1E7F99',
            hoverBackgroundColor: "#4A7A7D"
          }
        ]
      }

    return (
        <Bar height={287} data={data} options={options} />
    );
}

export default BarCPM