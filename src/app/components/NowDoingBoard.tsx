'use client';

import styled from 'styled-components';
import { supabase } from '../../../lib/superbase';
import { useEffect, useState } from 'react';

type Workout = {
  id: string;
  date: string;
  part: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  isDone: boolean;
  totalVolume: number;
  isSetDone: number[];
};

const NowDoingBoard = () => {
  const [nowWorkoutList, setNowWorkoutList] = useState<Workout[]>([]);
  console.log('🚀 ~ file: NowDoingBoard.tsx:21 ~ NowDoingBoard ~ nowWorkoutList:', nowWorkoutList);

  const getNowWorkoutList = async () => {
    const { data, error } = await supabase.from('workouts').select('*').eq('isDone', false);
    if (error) {
      console.error('Error: ', error);
      return;
    }
    setNowWorkoutList(data);
  };

  const handleCheck = (id: string, index: number, checked: boolean) => {
    setNowWorkoutList((prevWorkouts) =>
      prevWorkouts.map((workout) => {
        if (workout.id === id) {
          let updatedSets = [...workout.isSetDone];
          updatedSets[index] = checked ? 1 : 0;
          return { ...workout, isSetDone: updatedSets };
        } else {
          return workout;
        }
      })
    );
  };

  const handleDoneBTNClick = async (id) => {
    const { error } = await supabase
      .from('workouts')
      .update({
        isSetDone: nowWorkoutList.filter((item) => item.id === id)[0].isSetDone,
        isDone: true,
      })
      .eq('id', id);
  };

  useEffect(() => {
    getNowWorkoutList();
  }, []);
  return (
    <>
      <DuringWorkout>진행 중인 운동</DuringWorkout>
      <WorkoutBox>
        <WorkoutToDo>
          {nowWorkoutList.map((item) => (
            <WorkoutPart>
              🏋️‍♀️ {item.part}
              <WorkoutName>
                {item.name}
                {item.isSetDone?.map((sets, index) => (
                  <WorkoutStatus key={index}>
                    <CheckBox
                      onChange={(e) => handleCheck(item.id, index, e.target.checked)}
                      type='checkbox'
                    />
                    <Set>{`${index + 1}세트`}</Set>
                    <Rep>{item.reps}회</Rep>
                    <Weight>{item.weight}KG</Weight>
                  </WorkoutStatus>
                ))}
              </WorkoutName>
              <DoneBTN onClick={() => handleDoneBTNClick(item.id)}>끝!</DoneBTN>
            </WorkoutPart>
          ))}
        </WorkoutToDo>
      </WorkoutBox>
    </>
  );
};
export default NowDoingBoard;

// 진행 중인 운동
const DuringWorkout = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 1.875rem;
`;

const WorkoutBox = styled.div``;

const WorkoutToDo = styled.div``;

const WorkoutPart = styled.div`
  color: #e132ba;
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 1rem;
`;

const WorkoutName = styled.div`
  color: #8cc8f9;
  background-color: #0000003e;
  border-radius: 1rem;
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 400;
  padding: 2rem;
`;

const WorkoutStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #ffffff;
  margin-top: 1rem;
`;
const Set = styled.div``;
const Rep = styled.div``;
const Weight = styled.div``;
const CheckBox = styled.input`
  /* 스타일링 */
  width: 1rem;
  height: 1rem;
  border-radius: 0.3125rem;
  border: none;
  cursor: pointer;
`;

const DoneBTN = styled.button`
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1rem;
  /* padding: 15px 50px; */
  border-radius: 5px;
  background: #e132ba;
  margin: 1rem 0;
  width: 100%;
  &:hover {
    color: #ffffff;
    background-color: #000000;
  }
`;
