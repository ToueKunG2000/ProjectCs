import { PanelProps } from "../common/interface";
import { Chart } from 'primereact/chart';
import { useEffect, useState } from "react";


interface PanelShowGraph extends PanelProps {}

export const PanelShowGraph = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                  label: "My First dataset",
                  data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                  label: "My Second dataset",
                  data: [28, 48, 40, 19, 86, 27, 90]
                }
              ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
        
    }, []);
    
    return (
        <>
        <h1>Ambutakum</h1>
        <Chart type="bar" data={chartData} options={chartOptions} />

        </>
    );
}