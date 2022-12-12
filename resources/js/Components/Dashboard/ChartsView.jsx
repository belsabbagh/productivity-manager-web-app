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
                    data={charts.projectRegionDistribution}
                />
                <DoughnutChart
                    className={'h-max'}
                    name={'Employee Skill Distribution'}
                    data={charts.employeeSkillDistribution}
                />
            </Carousel>
        </ResourceView>
    )
}
