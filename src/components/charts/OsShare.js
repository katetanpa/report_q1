import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function OsShare() {
    const data = {
        labels: [
            "Desktops",
            "Tablets"
        ],
        datasets: [
            {
                data: [51.17, 48.83],
                backgroundColor: [
                    "#1E7F99",
                    "#FD4A36"
                ],
                hoverBackgroundColor: [
                    "#00C3CF",
                    "#E77344"
                ],
                hoverBorderColor: "#fff"
            }]
    };
    const options={
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                align: "center",
                labels: {
                    color: "white"
                }
            }
        }
    }
    return (
        <Pie data={data} options={options}/>
    );
}

export default OsShare
