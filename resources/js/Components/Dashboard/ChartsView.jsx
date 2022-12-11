import {Doughnut} from "react-chartjs-2";
import React from "react";
import ResourceView from "@/Components/Dashboard/ResourceView";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ChartsView({className, charts}) {
    return (
        <ResourceView className={className} resource={"charts"}>
            <Carousel slide={false} style={{color: 'black'}}>
                <Carousel.Item>
                    <Doughnut data={charts.projectRegionDistribution}/>
                    <Carousel.Caption>
                        <h3 style={{color: 'black'}}>Project Region Distribution</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Doughnut data={charts.projectRegionDistribution}/>
                    <Carousel.Caption>
                        <h3 style={{color: 'black'}}>Project Region Distribution</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </ResourceView>
    )
}
