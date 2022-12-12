import {Doughnut} from "react-chartjs-2";
import React from "react";

export default function ChartItem({name, data}) {
    return (
        <div className={'flex-col justify-center p-3'}>
            <div className={'flex-row justify-center'}>
                <div className={"w-fit mx-auto"}>{name}</div>
            </div>
            <Doughnut
                className={'w-max h-max'}
                data={data}
            />
        </div>
    )
}
