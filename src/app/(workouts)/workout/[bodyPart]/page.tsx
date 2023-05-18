'use client';

import { sortOfWorkout, getTodayDate } from '@/app/data';
import { useParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { IoAddOutline, IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { supabase } from '../../../../../lib/superbase';

interface Workout {
  id: string;
  date: string;
  part: string;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  isDone: boolean;
}

const StartingPage = () => {
  const { bodyPart } = useParams();
  const bodyPartInKorean = decodeURIComponent(bodyPart);
  const [workoutList, setWorkoutList] = useState<Workout[]>([]);
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const uuid = self.crypto.randomUUID();

  const deleteWorkout = (id: string) => {
    setWorkoutList((prevWorkoutList) => prevWorkoutList.filter((item: Workout) => item.id !== id));
  };

  const handleWorkoutChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(event.target.value);
  };
  // 데이터 생성하기
  const createWorkout = async () => {
    workoutList.map(async (item: Workout) => {
      const { data, error } = await supabase.from('workouts').insert([
        {
          id: item.id,
          date: getTodayDate(),
          part: bodyPartInKorean,
          name: item.name,
          sets: item.sets,
          reps: item.reps,
          weight: item.weight,
          isDone: false,
        },
      ]);
      if (error) console.error('Error: ', error);
      else console.log('Created workout: ', data);
    });
  };

  return (
    <Container>
      <Box2>
        <WorkoutTitle>🏋️‍♀️&nbsp;{bodyPartInKorean}</WorkoutTitle>
        <AddWorkoutBoxTitle>어떤 운동을 할까?</AddWorkoutBoxTitle>
        <AddWorkoutBox>
          <SelectWorkout
            value={selectedItem}
            onChange={handleWorkoutChange}>
            <option value=''>---&nbsp;운동 선택&nbsp;---</option>
            {sortOfWorkout[bodyPartInKorean].map((item, index) => (
              <option
                key={index}
                value={item}>
                {item}
              </option>
            ))}
          </SelectWorkout>
          <AddInput
            type='text'
            maxLength={3}
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
          세트
          <AddInput
            type='text'
            maxLength={3}
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
          회
          <AddInput
            type='text'
            maxLength={3}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          KG
          <AddWorkoutBtn
            onClick={() => {
              if (selectedItem === '') {
                alert('운동을 선택해주세요!');
                return;
              }
              if (sets === '') {
                alert('세트를 입력해주세요!');
                return;
              }
              if (reps === '') {
                alert('회수를 입력해주세요!');
                return;
              }
              if (weight === '') {
                alert('무게를 입력해주세요!');
                return;
              }
              setWorkoutList((prevWorkoutList) => [
                ...prevWorkoutList,
                {
                  id: uuid,
                  date: getTodayDate(),
                  part: decodeURIComponent(bodyPart),
                  name: selectedItem,
                  sets: sets,
                  reps: reps,
                  weight: weight,
                  isDone: false,
                },
              ]);
              setSets('');
              setReps('');
              setWeight('');
              setSelectedItem('');
            }}>
            <AddIcon />
          </AddWorkoutBtn>
        </AddWorkoutBox>
        <Hr />
        <WorkoutBox>
          {workoutList.map((item) => (
            <WorkoutList key={item.id}>
              {`${item.name} : ${item.sets} 세트 X  ${item.reps} 회 X ${item.weight} KG`}
              <TrashIcon onClick={() => deleteWorkout(item.id)} />
            </WorkoutList>
          ))}
        </WorkoutBox>
      </Box2>
      <Box3>
        <StartBtnBox>
          <StartBtn onClick={() => createWorkout()}>운동 시작!</StartBtn>
        </StartBtnBox>
      </Box3>
    </Container>
  );
};

export default StartingPage;

const Container = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background-color: #432f7f;
  padding: 30px;
`;

const Box2 = styled.div``;

const WorkoutTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bolder;
  color: #ffffff;
  margin-bottom: 40px;
`;

const AddWorkoutBoxTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: #8cc8f9;
`;

const AddWorkoutBox = styled.div`
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  height: 50px;
  border-radius: 10px;
  background: #e132ba;
  box-shadow: -13px 10px 34px #2f2159, 13px -10px 34px #573da5;
`;

const SelectWorkout = styled.select`
  height: 25px;
  background-color: #e132ba;
  color: #ffffff;
  padding: 0 20px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  option {
    color: black;
    background: white;
    font-size: 2rem;
    display: flex;
    white-space: pre;
    min-height: 20px;
  }
`;
const AddInput = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  text-align: center;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
  width: 35px;
`;
const AddWorkoutBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.3rem;
  color: #ffffff;
  border: none;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & :hover {
    color: #e132ba;
  }
`;

const Hr = styled.hr`
  margin-top: 20px;
`;

const WorkoutBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;
`;

const TrashIcon = styled(IoCloseOutline)`
  cursor: pointer;
  &:hover {
    color: #c32626;
  }
`;

const Box3 = styled.div``;
const StartBtnBox = styled.div``;
const StartBtn = styled.button`
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.3rem;
  padding: 15px 50px;
  border-radius: 30px;
  border-radius: 10px;
  background: #e132ba;
  box-shadow: -13px 10px 34px #2f2159, 13px -10px 34px #573da5;
  &:hover {
    color: #ffffff;
    background-color: #000000;
  }
`;

const WorkoutList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #8cc8f9;
  background-color: #0000003e;
`;

const AddIcon = styled(IoAddOutline)``;
