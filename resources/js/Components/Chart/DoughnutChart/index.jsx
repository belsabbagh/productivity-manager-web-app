import {Doughnut} from "react-chartjs-2";
import React from "react";
import makeDoughnutChart from "@/Components/Chart/DoughnutChart/doughnut.config";

export default function DoughnutChart({className, name, chartData:{data, label, labelKey, countKey}, options}) {
    return (
        <div className={'flex-col justify-center p-3' + className}>
            <div className={'flex-row justify-center'}>
                <div className={"w-fit mx-auto"}>{name}</div>
            </div>
            <Doughnut
                className={'w-max h-max'}
                data={makeDoughnutChart(data, label, labelKey, countKey)}
                options={options}
            />
        </div>
    )
}
