'use client';

import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { data } from '../data';

const DashboardWorkout = () => {
  return (
    <>
      {/* 가장 마지막으로 한 운동 부위와 종목을 그 직전 데이터와 비교한 수치를 시각적으로 보여주는
대시보드를 구성하면 될 듯 */}
      <ResponsiveContainer
        width='100%'
        height='100%'>
        <BarChart
          width={150}
          height={40}
          data={data}>
          <Tooltip />
          <Bar
            dataKey='지방량'
            fill='#8884d8'
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DashboardWorkout;
