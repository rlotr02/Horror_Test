import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionJson from '../assets/api/Question.json';
import QuestBtn from '../components/QuestBtn';
import Background from '../assets/images/bg.png';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { pageState, resultState } from '../assets/recoil';
import KakaoAdfit3 from '../assets/KakaoAdfit/KakaoAdfit3';

const SelectPage: React.FC = () => {
  const [num, setNum] = useState(0);
  const [result, setResult] = useRecoilState(resultState);
  const setPage = useSetRecoilState(pageState);
  const MARGIN_BOTTOM = QuestionJson[num].question.split('\n').length - 1;

  const onButtonClick = (type: string) => {
    if (result === '') {
      setResult(result + type);
    } else {
      setResult(result + ',' + type);
    }
    if (num === 6) {
      setPage(2);
    } else {
      setNum(num + 1);
    }
  };

  return (
    <Container>
      <img src={Background} alt="배경" />
      <div>
        <Question $marginbottom={MARGIN_BOTTOM}>
          {QuestionJson[num].question.split('\n').map((data, index) => {
            return <div key={index}>{data}</div>;
          })}
        </Question>
        <QuestBtns>
          <QuestBtn
            onClick={() => onButtonClick(QuestionJson[num].answers[0].type)}
            text={QuestionJson[num].answers[0].answer
              .split('\n')
              .map((data, index) => {
                return <div key={index}>{data}</div>;
              })}
          />
          <QuestBtn
            onClick={() => onButtonClick(QuestionJson[num].answers[0].type)}
            text={QuestionJson[num].answers[1].answer
              .split('\n')
              .map((data, index) => {
                return <div key={index}>{data}</div>;
              })}
          />
        </QuestBtns>
        <KakaoAdfit3 />
      </div>
    </Container>
  );
};

export default SelectPage;

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
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: auto;
    transform: rotate(180deg);

    @media screen and (min-width: 500px) {
      width: 500px;
      transform: rotate(180deg);
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
`;

const Question = styled.h2<{ $marginbottom: number }>`
  font-family: 'Jeju Hallasan';
  font-size: 23px;
  line-height: 35px;
  letter-spacing: -0.07em;
  color: #a63333;

  margin-bottom: ${(props) => (props.$marginbottom === 1 ? 45 : 20)}px;
`;

const QuestBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
