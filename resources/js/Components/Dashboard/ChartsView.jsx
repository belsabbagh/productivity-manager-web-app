import ResourceView from "@/Components/Dashboard/ResourceView";
import DoughnutChart from "@/Components/Chart/DoughnutChart";
import Carousel from 'react-material-ui-carousel';

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
            </Carousel>
        </ResourceView>
    )
}
