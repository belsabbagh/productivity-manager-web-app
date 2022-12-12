import {Doughnut} from "react-chartjs-2";
import React from "react";
import ResourceView from "@/Components/Dashboard/ResourceView";
import ChartItem from "@/Components/Dashboard/ChartItem";
import 'react-multi-carousel/lib/styles.css';
import ResourceList from "@/Components/Dashboard/ResourceList";

export default function ChartsView({className, charts}) {
    return (
        <ResourceView className={className} resource={"charts"}>
            <ResourceList maxHeight={350}>
                <ChartItem
                    name={'Project Region Distribution'}
                    data={charts.projectRegionDistribution}
                />
                <ChartItem
                    name={'Employee Skill Distribution'}
                    data={charts.employeeSkillDistribution}
                />
            </ResourceList>
        </ResourceView>
    )
}
