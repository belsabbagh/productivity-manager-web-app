import {Line} from "react-chartjs-2";
import makeDoughnutChart from "@/Components/Chart/DoughnutChart/config";
import React from "react";

export default function LineChart({className, name, chartData:{data, label, labelKey, countKey}, options}) {
    return (
        <div className={'flex-col justify-center p-3' + className}>
            <div className={'flex-row justify-center'}>
                <div className={"w-fit mx-auto"}>{name}</div>
            </div>
            <Line
                className={'w-max h-max'}
                data={makeDoughnutChart(data, label, labelKey, countKey)}
                options={options}
            />
        </div>
    )
}
