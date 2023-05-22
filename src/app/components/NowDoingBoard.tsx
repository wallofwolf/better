'use client';

import styled from 'styled-components';

const NowDoingBoard = () => {
  return (
    <>
      <DuringWorkout>진행 중인 운동</DuringWorkout>
      <WorkoutBox>
        <WorkoutToDo>
          <WorkoutPart>
            🏋️‍♀️&nbsp;가슴
            <WorkoutName>
              플랫 벤치 프레스
              <WorkoutStatus>
                <CheckBox type='checkbox' />
                <Set>1세트</Set>
                <Rep>10회</Rep>
                <Weight>50KG</Weight>
              </WorkoutStatus>
              <WorkoutStatus>
                <CheckBox type='checkbox' />
                <Set>2세트</Set>
                <Rep>10회</Rep>
                <Weight>50KG</Weight>
              </WorkoutStatus>
              <WorkoutStatus>
                <CheckBox type='checkbox' />
                <Set>3세트</Set>
                <Rep>10회</Rep>
                <Weight>50KG</Weight>
              </WorkoutStatus>
              <WorkoutStatus>
                <CheckBox type='checkbox' />
                <Set>4세트</Set>
                <Rep>10회</Rep>
                <Weight>50KG</Weight>
              </WorkoutStatus>
              <WorkoutStatus>
                <CheckBox type='checkbox' />
                <Set>5세트</Set>
                <Rep>10회</Rep>
                <Weight>50KG</Weight>
              </WorkoutStatus>
              <WorkoutStatus>
                <CheckBox type='checkbox' />
                <Set>6세트</Set>
                <Rep>10회</Rep>
                <Weight>50KG</Weight>
              </WorkoutStatus>
              <WorkoutStatus>
                <CheckBox type='checkbox' />
                <Set>7세트</Set>
                <Rep>10회</Rep>
                <Weight>50KG</Weight>
              </WorkoutStatus>
              <WorkoutStatus>
                <CheckBox type='checkbox' />
                <Set>8세트</Set>
                <Rep>10회</Rep>
                <Weight>50KG</Weight>
              </WorkoutStatus>
              <WorkoutStatus>
                <CheckBox type='checkbox' />
                <Set>9세트</Set>
                <Rep>10회</Rep>
                <Weight>50KG</Weight>
              </WorkoutStatus>
            </WorkoutName>
          </WorkoutPart>
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
