import ResourceView from "@/Components/Dashboard/ResourceView";
import DoughnutChart from "@/Components/Chart/DoughnutChart";
import Carousel from 'react-material-ui-carousel';
import {Chart, ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js'
import LineChart from "@/Components/Chart/LineChart";

Chart.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

export default function ChartsView({className, charts}) {
    return (
        <ResourceView className={className} resource={"charts"}>
            <Carousel height={250} sx={{width: 350, paddingX: 8, paddingTop: 4, paddingBottom: 0}}>
                <DoughnutChart
                    className={'h-max'}
                    name={'Project Region Distribution'}
                    chartData={{
                        data: charts.projectRegionDistribution,
                        label: 'project count',
                        labelKey: 'region',
                        countKey: 'total'
                    }}
                />
                <DoughnutChart
                    className={'h-max'}
                    name={'Employee Skill Distribution'}
                    chartData={{
                        data: charts.employeeSkillDistribution,
                        label: 'employee count',
                        labelKey: 'name',
                        countKey: 'employee_count'
                    }}
                />
                <DoughnutChart
                    className={'w-max h-max'}
                    name={'Average Utilization Per Skill'}
                    chartData={{
                        data: charts.averageUtilizationPerSkill,
                        label: 'average utilization',
                        labelKey: 'skill',
                        countKey: 'averageUtilization'
                    }}
                />
                <DoughnutChart
                    className={'w-max h-max'}
                    name={'Employee Utilization Distribution'}
                    chartData={{
                        data: charts.employeeUtilizationDistribution,
                        label: 'category',
                        labelKey: 'category',
                        countKey: 'count'
                    }}
                />
            </Carousel>
        </ResourceView>
    )
}
