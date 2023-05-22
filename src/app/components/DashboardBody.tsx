'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { supabase } from '../../../lib/superbase';
import { useEffect, useState } from 'react';

interface BodyStatus {
  id: string;
  date: string;
  bodyWeight: string;
  bodyFat: string;
  SkeletalMuscle: string;
}

const DashboardBody = () => {
  const [data, setData] = useState<BodyStatus[]>([]);

  const getBodyStatus = async () => {
    const { data, error } = await supabase.from('bodyStatus').select();
    if (error) {
      console.log(error);
      return;
    }
    setData(data as BodyStatus[]);
  };

  useEffect(() => {
    getBodyStatus();
  }, []);

  return (
    <ResponsiveContainer
      width='100%'
      height='100%'>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient
            id='colorUv'
            x1='0'
            y1='0'
            x2='0'
            y2='1'>
            <stop
              offset='5%'
              stopColor='#8884d8'
              stopOpacity={0.8}
            />
            <stop
              offset='95%'
              stopColor='#8884d8'
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient
            id='colorPv'
            x1='0'
            y1='0'
            x2='0'
            y2='1'>
            <stop
              offset='5%'
              stopColor='#82ca9d'
              stopOpacity={0.8}
            />
            <stop
              offset='95%'
              stopColor='#82ca9d'
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient
            id='colorOv'
            x1='0'
            y1='0'
            x2='0'
            y2='1'>
            <stop
              offset='5%'
              stopColor='#cab182'
              stopOpacity={0.8}
            />
            <stop
              offset='95%'
              stopColor='#d0631a'
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey='date' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='bodyFat'
          stroke='#ceccea'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
        <Area
          type='monotone'
          dataKey='bodyWeight'
          stroke='#11e061'
          fillOpacity={1}
          fill='url(#colorPv)'
        />
        <Area
          type='monotone'
          dataKey='skeletalMuscle'
          stroke='#2a0c50'
          fillOpacity={1}
          fill='url(#colorOv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DashboardBody;
