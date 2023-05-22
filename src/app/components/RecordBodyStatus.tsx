'use client'

import { useState } from 'react';
import styled from 'styled-components';
import { uuid, getTodayDate } from '@/app/data';
import { supabase } from '../../../lib/superbase';

const RecordBodyStatus = () => {
  const [bodyStatus, setBodyStatus] = useState({
    bodyWeight: '',
    skeletalMuscle: '',
    bodyFat: '',
  });

  const createBodyStatus = async () => {
    const { data, error } = await supabase.from('bodyStatus').insert([
      {
        id: uuid,
        date: getTodayDate(),
        bodyWeight: bodyStatus.bodyWeight,
        skeletalMuscle: bodyStatus.skeletalMuscle,
        bodyFat: bodyStatus.bodyFat,
      },
    ]);
    if (error) console.error('Error: ', error);
    else console.log('Created body status: ', data);
  };

  return (
    <>
      <RecordBodyStatusTitle>신체 상태 기록하기</RecordBodyStatusTitle>
      <RecordBodyStatusBox>
        <RecordBodyStatusInputBox>
          <RecordBodyStatusInput
            type='text'
            placeholder='체중 (KG)'
            maxLength={3}
            value={bodyStatus.bodyWeight}
            onChange={(e) => setBodyStatus({ ...bodyStatus, bodyWeight: e.target.value })}
          />
          <RecordBodyStatusInput
            type='text'
            placeholder='골격근량 (KG)'
            maxLength={3}
            value={bodyStatus.skeletalMuscle}
            onChange={(e) => setBodyStatus({ ...bodyStatus, skeletalMuscle: e.target.value })}
          />
          <RecordBodyStatusInput
            type='text'
            placeholder='지방량 (KG)'
            maxLength={3}
            value={bodyStatus.bodyFat}
            onChange={(e) => setBodyStatus({ ...bodyStatus, bodyFat: e.target.value })}
          />
        </RecordBodyStatusInputBox>
        <RecordBodyStatusBtn onClick={createBodyStatus}>기록</RecordBodyStatusBtn>
      </RecordBodyStatusBox>
    </>
  );
};

export default RecordBodyStatus;

const RecordBodyStatusTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: #ffffff;
`;
const RecordBodyStatusBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecordBodyStatusInputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecordBodyStatusInput = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: #0000003e;
  color: #ffffff;
  &::placeholder {
    color: #b8b8b8;
  }
`;
const RecordBodyStatusBtn = styled.button`
  background-color: #e132ba;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  color: #ffffff;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff7d;
  }
`;
