'use client';

import { chain } from '../data';
import styled from 'styled-components';

const WorkoutChain = () => {
  return (
    <>
      <DonTBreakTheChainTitle>연속으로 운동한지 110일째!</DonTBreakTheChainTitle>
      <DonTBreakTheChainBox>
        {chain.map((item, index) => (
          <DonTBreakTheChainCube key={index}></DonTBreakTheChainCube>
        ))}
      </DonTBreakTheChainBox>
    </>
  );
};

export default WorkoutChain;

// Don't Break The Chain
const DonTBreakTheChainTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: #ffffff;
`;
const DonTBreakTheChainBox = styled.div`
  background-color: #0000003e;
  border-radius: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const DonTBreakTheChainCube = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ff6f0f;
  border-radius: 0.5rem;
  padding: 0.1rem;
`;
