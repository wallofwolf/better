'use client';

import { useRef, useState } from 'react';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import { supabase } from '../../lib/superbase';
import WorkoutToday from './components/WorkoutToday';
import { chain, data, items } from './data';
import RecordBodyStatus from './components/RecordBodyStatus';

const Home = () => {
  // 데이터 가져오기
  async function fetchData() {
    let { data, error } = await supabase.from('your-table-name').select('*');

    if (error) console.error('Error: ', error);
    else console.log('Data: ', data);
  }

  // 유튜브 가져오기
  const api =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=운동&key=AIzaSyAed5yCicGD71RKvBz2182ewsrJxaf-DPc';

  const getWokroutVideos = async () => {
    const response = await fetch(api);
    const data = await response.json();
    console.log('🚀 ~ file: page.tsx:95 ~ getWokroutVideos ~ data:', data);
  };

  // 운동 배우기
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
  };

  const handleNext = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
  };

  const [current, setCurrent] = useState(0);

  return (
    <Container>
      <Box1>
        <MediumWidget>
          <WorkoutToday />
        </MediumWidget>
        <MediumWidget>
          <DonTBreakTheChainTitle>연속으로 운동한지 110일째!</DonTBreakTheChainTitle>
          <DonTBreakTheChainBox>
            {chain.map((item, index) => (
              <DonTBreakTheChainCube key={index}></DonTBreakTheChainCube>
            ))}
          </DonTBreakTheChainBox>
        </MediumWidget>
      </Box1>
      <Box2>
        <Box2Left>
          <LargeWidget>
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
          </LargeWidget>
        </Box2Left>
        <Box2Right>
          <MediumWidget>
            {/* 가장 마지막으로 한 운동 부위와 종목을 그 직전 데이터와 비교한 수치를 시각적으로 보여주는
            대시보드를 구성하면 될 듯 */}
            <ResponsiveContainer
              width='100%'
              height='100%'>
              <BarChart
                width={150}
                height={40}
                data={data}>
                <Bar
                  dataKey='지방량'
                  fill='#8884d8'
                />
              </BarChart>
            </ResponsiveContainer>
          </MediumWidget>
          <MediumWidget>
            <CarouselTitle>운동 배우기</CarouselTitle>
            <CarouselWrapper>
              <PrevButton onClick={handlePrev}>&lt;</PrevButton>
              <CarouselContainer ref={carouselRef}>
                {items.map((item, index) => (
                  <CarouselItem key={index}>{/* 여기 동영상 삽입 */}</CarouselItem>
                ))}
              </CarouselContainer>
              <NextButton onClick={handleNext}>&gt;</NextButton>
            </CarouselWrapper>
          </MediumWidget>
        </Box2Right>
      </Box2>
      <Box3>
        <MediumWidget>
          <RecordBodyStatus />
        </MediumWidget>
        <MediumWidget>
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
              <XAxis dataKey='name' />
              <YAxis />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='지방량'
                stroke='#8884d8'
                fillOpacity={1}
                fill='url(#colorUv)'
              />
              <Area
                type='monotone'
                dataKey='골격근량'
                stroke='#82ca9d'
                fillOpacity={1}
                fill='url(#colorPv)'
              />
              <Area
                type='monotone'
                dataKey='체중'
                stroke='#c9ca82'
                fillOpacity={1}
                fill='url(#colorOv)'
              />
            </AreaChart>
          </ResponsiveContainer>
        </MediumWidget>
      </Box3>
    </Container>
  );
};

export default Home;

// 신체 대시보드

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Box1 = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 1.875rem;
  margin-bottom: 5rem;
  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
  }
`;
const Box2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;
  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
  }
`;
const Box2Left = styled.div``;
const Box2Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`;
const Box3 = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 5rem;
  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
  }
`;

const MediumWidget = styled.div`
  width: 31.25rem;
  height: 12.5rem;
  padding: 1.875rem;
  border-radius: 3.8125rem;
  background: linear-gradient(315deg, #483288, #3c2a72);
  box-shadow: -1.125rem -1.125rem 2.1875rem #2c1f54, 0.3125rem 0.3125rem 2.1875rem #5a3faa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  @media (max-width: 767px) {
    width: 16rem;
  }
`;
const LargeWidget = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 31.25rem;
  height: 32.1875rem;
  padding: 1.875rem;
  border-radius: 2.375rem;
  border-radius: 3.8125rem;
  background: linear-gradient(315deg, #483288, #3c2a72);
  box-shadow: -1.125rem -1.125rem 2.1875rem #2c1f54, 0.3125rem 0.3125rem 2.1875rem #5a3faa;
  /* 스크롤바 */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  @media (max-width: 767px) {
    width: 16rem;
  }
`;

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

// 운동 배우기
const CarouselTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: #ffffff;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  gap: 1rem;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: calc(100% / 3); /* Display 3 items at a time */
  scroll-snap-align: start;
  background-color: #0000003e;
  height: 7rem;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const PrevButton = styled(IoArrowBackOutline)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #e132bb87;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  left: -40px;
`;

const NextButton = styled(IoArrowForwardOutline)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #e132bb87;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  right: -40px;
`;
