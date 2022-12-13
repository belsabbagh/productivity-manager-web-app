import ResourceView from "@/Components/Dashboard/ResourceView";
import DoughnutChart from "@/Components/Chart/DoughnutChart";
import Carousel from 'react-material-ui-carousel';
import {Chart, ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js'
import getCharts from "@/Components/Dashboard/ChartsCarousel/config";

Chart.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

export default function ChartsCarousel({className, charts}) {
    const chartsData = getCharts(charts)
    return (
        <ResourceView className={className} resource={"charts"}>
            <Carousel height={250} sx={{width: 350, paddingX: 8, paddingTop: 4, paddingBottom: 0}}>
                {
                    chartsData.map((chart) => {
                        return (
                            <DoughnutChart
                                className={'h-max'}
                                name={chart.title}
                                chartData={{
                                    data: chart.data,
                                    label: chart.label,
                                    labelKey: chart.labelKey,
                                    countKey: chart.countKey
                                }}
                            />
                        )
                    })
                }
            </Carousel>
        </ResourceView>
    )
}
