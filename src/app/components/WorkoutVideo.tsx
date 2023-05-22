'use client';

import { useRef, useState } from 'react';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { items } from '../data';

const WorkoutVideo = () => {
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
    <>
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
    </>
  );
};

export default WorkoutVideo;

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
