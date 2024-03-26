import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Background from '../assets/images/bg.png';
import LoadingBackground from '../assets/images/loadingbg.png';
import LeftHand from '../assets/images/handleft.png';
import RightHand from '../assets/images/handright.png';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState, resultNumState, resultState } from '../assets/recoil';

const LoadingPage: React.FC = () => {
  const setPage = useSetRecoilState(pageState);
  const result = useRecoilValue(resultState);
  const setResultNum = useSetRecoilState(resultNumState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(3);
    }, 3800);
    const frequencies: { [key: string]: number } = result
      .split(',')
      .reduce((acc: { [key: string]: number }, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});

    let maxKey: string = '';
    let maxValue: number = 0;
    Object.entries(frequencies).forEach(([key, value]) => {
      if (value > maxValue) {
        maxKey = key;
        maxValue = value;
      }
    });

    if (maxKey === '탐험') {
      setResultNum(0);
    } else if (maxKey === '관찰') {
      setResultNum(1);
    } else if (maxKey === '회피') {
      setResultNum(2);
    } else if (maxKey === '해결') {
      setResultNum(3);
    }
    return () => clearTimeout(timer);
  }, [result, setPage, setResultNum]);

  return (
    <Container>
      <LoadingImg src={LoadingBackground} alt="배경" />
      <BackGroundImg src={Background} alt="배경" />
      <div>
        <Img
          src={RightHand}
          alt="손"
          style={{ top: 50, right: 0 }}
          $delay="500ms"
        />
        <Img
          src={LeftHand}
          alt="손"
          style={{ top: 120, left: 0 }}
          $delay="1s"
        />
        <Img
          src={RightHand}
          alt="손"
          style={{ top: 350, right: 0 }}
          $delay="1500ms"
        />
        <Img
          src={LeftHand}
          alt="손"
          style={{ top: 420, left: 0 }}
          $delay="2s"
        />
      </div>
    </Container>
  );
};

export default LoadingPage;

const slideInFromRight = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  > div {
    position: relative;
    height: 100%;

    @media screen and (min-width: 500px) {
      width: 500px;
    }

    > img {
      position: absolute;
      width: 200px;
    }
  }
`;

const Img = styled.img<{ $delay: string }>`
  opacity: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 38px;
  animation: 1s ${slideInFromRight} ease-out;
  animation-delay: ${(props) => props.$delay || '0s'};
  animation-fill-mode: forwards;
`;

const LoadingImg = styled.img`
  position: fixed;
  top: 0;
  z-index: -10;
  width: 100%;
  height: auto;

  @media screen and (min-width: 500px) {
    width: 500px;
  }
`;

const BackGroundImg = styled.img`
  position: fixed;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: auto;
  transform: rotate(180deg);

  @media screen and (min-width: 500px) {
    width: 500px;
  }
`;
