import {Doughnut, Bar} from "react-chartjs-2";
import React from "react";
import {
    Chart,
    CategoryScale,
    ArcElement,
    Legend,
    Tooltip,
    LinearScale,
    BarElement,
    PointElement,
    LineElement
} from 'chart.js'

function getChartsData(charts) {
    return {
        projectRegionDistribution: {
            labels: charts.projectRegionDistribution.map(i => i.region),
            datasets: [
                {
                    id: 1,
                    label: "project count",
                    data: charts.projectRegionDistribution.map(i => i.total),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                }
            ],
        }
    };
}

Chart.register(
    ArcElement,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

export default function charts({data}) {
    const charts = getChartsData({projectRegionDistribution: data})
    console.log(charts.projectRegionDistribution)
    return (
        <Doughnut
            className={'w-max h-max'}
            data={charts.projectRegionDistribution}
            options={{ maintainAspectRatio: true }}
        />
    )
}
