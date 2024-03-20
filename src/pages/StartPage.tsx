import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { pageState } from '../assets/recoil';
import Button from '../components/Button';
import Background from '../assets/images/bg.png';

const StartPage: React.FC = () => {
  const setPage = useSetRecoilState(pageState);

  return (
    <Container>
      <img src={Background} alt="배경" />
      <div>
        <h1>
          HORROR
          <br />
          TEST
        </h1>
        <Button
          text="테스트 시작하기"
          onAni={true}
          onClick={() => setPage(1)}
        />
      </div>
    </Container>
  );
};

export default StartPage;

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

  > img {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: auto;

    @media screen and (min-width: 750px) {
      width: 750px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  > div {
    @media screen and (min-width: 750px) {
      transform: scale(1.15);
    }

    @media screen and (max-height: 700px) {
      transform: scale(0.9);
    }
  }

  > div > h1 {
    font-family: 'Hanalei Fill';
    font-weight: 400;
    font-size: 80px;
    line-height: 80px;
    color: #a63333;
    margin-bottom: 132px;
    -webkit-text-stroke: 1px #000000;
  }
`;
