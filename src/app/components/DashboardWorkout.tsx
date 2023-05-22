'use client';

import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from 'recharts';
import { supabase } from '../../../lib/superbase';

interface Workout {
  id: string;
  data: string;
  part: string;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  isDone: boolean;
}

const DashboardWorkout = () => {
  const [workout, setWorkout] = useState<Workout[]>([]);

  const getBodyStatus = async () => {
    const { data, error } = await supabase
      .from('workouts')
      .select()
      .order('date', { ascending: false })
      .limit(1);
    if (error) {
      console.log(error);
      return;
    }

    const latestDate = data[0]?.date;
    if (latestDate) {
      getGet(latestDate);
    }
  };

  const getGet = async (date: string) => {
    const { data, error } = await supabase.from('workouts').select().eq('date', date);
    if (error) {
      console.log(error);
      return;
    }
    setWorkout(data as Workout[]);
  };

  useEffect(() => {
    getBodyStatus();
  }, []);
  return (
    <>
      <ResponsiveContainer
        width='100%'
        height='100%'>
        <BarChart
          width={500}
          height={300}
          data={workout}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey='totalVolume'
            stackId='a'
            fill='#e132ba'
          />
          <Bar
            dataKey='weight'
            stackId='b'
            fill='#5a54d3'
          />
          <Bar
            dataKey='sets'
            stackId='b'
            fill='#d5d5e0'
          />
          <Bar
            dataKey='reps'
            stackId='b'
            fill='#82ca9d'
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DashboardWorkout;
