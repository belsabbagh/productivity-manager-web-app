import {Doughnut} from "react-chartjs-2";
import React from "react";

export default function DoughnutChart({className, name, data, options}) {
    return (
        <div className={'flex-col justify-center p-3' + className}>
            <div className={'flex-row justify-center'}>
                <div className={"w-fit mx-auto"}>{name}</div>
            </div>
            <Doughnut
                className={'w-max h-max'}
                data={data}
                options={options}
            />
        </div>
    )
}
