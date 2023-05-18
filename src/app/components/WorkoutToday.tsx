import styled from 'styled-components';
import { getTodayDate, bodyPartsList } from '../data';
import { useRouter } from 'next/navigation';



const WorkoutToday = () => {
  const router = useRouter();
  return (
    <>
      <WorkoutTodayTitle>오늘 할 운동</WorkoutTodayTitle>
      <WorkoutTodayDate>{getTodayDate()}</WorkoutTodayDate>
      <WorkoutSelectBox>
        {bodyPartsList.map((bodyPart) => (
          <Workout
            onClick={() => router.push(`/workout/${bodyPart}`)}
            key={bodyPart}>
            {bodyPart}
          </Workout>
        ))}
      </WorkoutSelectBox>
    </>
  );
};

export default WorkoutToday;

// 오늘 할 운동
const WorkoutTodayTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: #ffffff;
`;
const WorkoutTodayDate = styled.div`
  font-size: 1.5rem;
  color: #8cc8f9;
`;
const WorkoutSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
`;
const Workout = styled.button`
  font-size: 1rem;
  font-weight: bold;
  width: 5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.625rem;
  background-color: #e132ba;
  color: #000000;
  cursor: pointer;
  &:hover {
    background-color: #ffffff7d;
  }
`;
