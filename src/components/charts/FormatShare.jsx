import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend); 

function FormatShare() {
    const data = {
        labels: [
            "Interstitial",
            "Rewarded",
            "Banner"
        ],
        datasets: [
            {
                data: [47290000, 30370000, 22340000],
                backgroundColor: [
                    "#9ef2ff",
                    "#b38b74",
                    "#4a7a7d"
                    
                ],
                hoverBackgroundColor: [
                    "#cef9ff",
                    "#ffc2a5",
                    "#6aacb3"

                ],
                hoverBorderColor: "#fff"
            }]
    };
    const options = {
        plugins: {
          htmlLegend: {
            // ID of the container to put the legend in
            containerID: 'legend-container1',
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
        switch (index)
        {
            case 0: 
            boxSpan.className = "fa fa-mobile-phone";
            break;
            case 1: 
            boxSpan.className = "fa fa-money-bill";
            break;
            case 2: 
            boxSpan.className = "fa fa-window-maximize";
            break;
            default:
        }
        console.log(item)
        boxSpan.style.color = item.fillStyle;
        boxSpan.style.display = 'inline-block';
        boxSpan.style.margin = "10px";
        boxSpan.style.height = '20px';
        boxSpan.style.width = '20px';
    
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

export default FormatShare