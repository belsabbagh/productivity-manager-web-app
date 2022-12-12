import React from "react";
import ResourceView from "@/Components/Dashboard/ResourceView";
import DoughnutChart from "@/Components/Chart/DoughnutChart";
import 'react-multi-carousel/lib/styles.css';
import ResourceList from "@/Components/Dashboard/ResourceList";

export default function ChartsView({className, charts}) {
    return (
        <ResourceView className={className} resource={"charts"}>
            <ResourceList maxHeight={350}>
                <DoughnutChart
                    name={'Project Region Distribution'}
                    data={charts.projectRegionDistribution}
                />
                <DoughnutChart
                    name={'Employee Skill Distribution'}
                    data={charts.employeeSkillDistribution}
                />
            </ResourceList>
        </ResourceView>
    )
}
