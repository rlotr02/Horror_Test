import React from 'react';
import styled from 'styled-components';

interface TQuestBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: React.ReactNode;
}

const QuestBtn: React.FC<TQuestBtnProps> = ({ text, ...props }) => {
  return <Btn {...props}>{text}</Btn>;
};

export default QuestBtn;

const Btn = styled.button`
  width: 290px;
  height: 100px;
  background-color: #a63333;
  font-family: 'Jeju Hallasan';
  border: none;
  font-size: 20px;
  line-height: 25px;
  color: #261f1f;
  margin-top: 21px;

  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;
