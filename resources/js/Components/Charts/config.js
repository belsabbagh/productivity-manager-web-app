const bgColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
]

const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
]

export default function makeChart(data, label, labelKey, countKey) {
    return {
        labels: data.map(i => i[labelKey]),
        datasets: [
            {
                id: 1,
                label: label,
                data: data.map(i => i[countKey]),
                backgroundColor: bgColors,
                borderColor: borderColors,
                borderWidth: 1,
            }
        ],
    };
}
