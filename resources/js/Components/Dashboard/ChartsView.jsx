import {Doughnut} from "react-chartjs-2";
import React from "react";
import ResourceView from "@/Components/Dashboard/ResourceView";
import Carousel from "react-material-ui-carousel";

export default function ChartsView({className, charts}) {
    return (
        <ResourceView className={className} resource={"charts"}>
            <Carousel className={'w-96 h-96 px-20 items-bottom'} animation={"slide"}>
                <div className={"justify-center w-full h-full"}>
                    <p>Project Region Distribution</p>
                    <Doughnut className={"w-fit h-fit"} data={charts.projectRegionDistribution}/>
                </div>
                <div className={"justify-center w-full h-full"}>
                    <p>something else</p>
                </div>
            </Carousel>
        </ResourceView>
    )
}
