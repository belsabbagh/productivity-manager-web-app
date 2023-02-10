import React from 'react';
import {
  Chart,
  CategoryScale,
  ArcElement,
  Tooltip,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from 'chart.js';
import ContentView from '@/Components/ContentView';
import getCharts from '@/Components/Dashboard/ChartsCarousel/config';
import DoughnutChart from '@/Components/Charts/DoughnutChart';
import LineChart from '@/Components/Charts/LineChart';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

Chart.register(
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip
);

export default function charts({charts, auth, errors}) {
  const {
    projectRegionDistribution,
    employeeSkillDistribution,
    averageUtilizationPerSkill,
    employeeUtilizationDistribution,
    crossUtilizationDistribution,
  } = getCharts(charts);
  return (
    <AuthenticatedLayout
      auth={auth}
      errors={errors}
      title={'Charts'}
      backHref={'/dashboard'}
    >
      <div className={'flex flex-col bg-background justify-center'}>
        <div className={'flex flex-row justify-between'}>
          <ContentView
            title={employeeUtilizationDistribution.title}
            className={'w-max'}
          >
            <DoughnutChart
              className={'w-max'}
              chartClassName={'w-full h-full'}
              chartData={{
                data: employeeUtilizationDistribution.data,
                label: employeeUtilizationDistribution.label,
                labelKey: employeeUtilizationDistribution.labelKey,
                countKey: employeeUtilizationDistribution.countKey,
              }}
            />
          </ContentView>
          <ContentView
            title={crossUtilizationDistribution.title}
            className={'w-max'}
          >
            <DoughnutChart
              className={'w-max'}
              chartClassName={'w-full h-full'}
              chartData={{
                data: crossUtilizationDistribution.data,
                label: crossUtilizationDistribution.label,
                labelKey: crossUtilizationDistribution.labelKey,
                countKey: crossUtilizationDistribution.countKey,
              }}
            />
          </ContentView>
        </div>
        <div>
          <ContentView
            title={averageUtilizationPerSkill.title}
            className={'max-w-6'}
          >
            <LineChart
              className={'max-w-6'}
              chartData={{
                data: averageUtilizationPerSkill.data,
                label: averageUtilizationPerSkill.label,
                labelKey: averageUtilizationPerSkill.labelKey,
                countKey: averageUtilizationPerSkill.countKey,
              }}
            />
          </ContentView>
        </div>
        <div className={'flex flex-row justify-between'}>
          <ContentView
            title={employeeSkillDistribution.title}
            className={'w-max'}
          >
            <DoughnutChart
              className={'w-max'}
              chartClassName={'w-full h-full'}
              chartData={{
                data: employeeSkillDistribution.data,
                label: employeeSkillDistribution.label,
                labelKey: employeeSkillDistribution.labelKey,
                countKey: employeeSkillDistribution.countKey,
              }}
            />
          </ContentView>
          <ContentView
            title={projectRegionDistribution.title}
            className={'w-max'}
          >
            <DoughnutChart
              className={'w-max'}
              chartClassName={'w-full h-full'}
              chartData={{
                data: projectRegionDistribution.data,
                label: projectRegionDistribution.label,
                labelKey: projectRegionDistribution.labelKey,
                countKey: projectRegionDistribution.countKey,
              }}
            />
          </ContentView>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
