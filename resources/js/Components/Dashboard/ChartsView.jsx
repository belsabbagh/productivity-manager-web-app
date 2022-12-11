import {Doughnut} from "react-chartjs-2";
import React from "react";
import ResourceView from "@/Components/Dashboard/ResourceView";

export default function ChartsView({className, data}) {
    return (
        <ResourceView className={className} resource={"charts"}>
            <Doughnut data={data}/>
        </ResourceView>
    )
}
