import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function OsShare() {
    const data = {
        labels: [
            "Android OS",
            "iOS"
        ],
        datasets: [
            {
                data: [51170000, 48830000],
                backgroundColor: [
                    "#1C6277",
                    "#E77344"
                ],
                hoverBackgroundColor: [
                    "#1E7F99",
                    "#FD7E14"
                ],
                hoverBorderColor: "#fff"
            }]
    };
    const options = {
        plugins: {
          htmlLegend: {
            // ID of the container to put the legend in
            containerID: 'legend-container',
          },
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return "$" + tooltipItem.formattedValue;
                },
            }
          },
        }
    };
    
    const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        let listContainer = legendContainer.querySelector('ul');
      
        if (!listContainer) {
          listContainer = document.createElement('ul');
          listContainer.style.display = 'flex';
          listContainer.style.flexDirection = 'row';
          listContainer.style.margin = 0;
          listContainer.style.padding = 0;
      
          legendContainer.appendChild(listContainer);
        }
      
        return listContainer;
    };
      
    const htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);
    
        // Remove old legend items
        while (ul.firstChild) {
        ul.firstChild.remove();
        }
    
        // Reuse the built-in legendItems generator
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
    
        items.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.alignItems = 'center';
        li.style.cursor = 'pointer';
        li.style.display = 'flex';
        li.style.flexDirection = 'row';
        li.style.padding = "10px"
    
        li.onclick = () => {
            const {type} = chart.config;
            if (type === 'pie' || type === 'doughnut') {
            // Pie and doughnut charts only have a single dataset and visibility is per item
            chart.toggleDataVisibility(item.index);
            } else {
            chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
            }
            chart.update();
        };
    
        // Color box
        const boxSpan = document.createElement('i');
        index === 0 ? boxSpan.className = "fab fa-google-play" : boxSpan.className = "fab fa-app-store"
        index === 0 ? boxSpan.style.color = "#1C6277" : boxSpan.style.color = "#E77344"
        boxSpan.style.display = 'inline-block';
        boxSpan.style.margin = "10px";
        index === 0 ? boxSpan.style.height = '20px' : boxSpan.style.height = '15px'
        index === 0 ? boxSpan.style.width = '20px' : boxSpan.style.width = '15px'
    
        // Text
        const textContainer = document.createElement('p');
        textContainer.style.color = "white";
        textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
    
        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);
    
        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
        });
    }
    };

    const plugins = [htmlLegendPlugin];

    return (
        <Pie data={data} options={options} plugins={plugins}/>
    );
}

export default OsShare
