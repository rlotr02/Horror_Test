import React from 'react';
import styled from 'styled-components';

interface TButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<TButtonProps> = ({ text, ...props }) => {
  return <Btn {...props}>{text}</Btn>;
};

export default Button;

const Btn = styled.button`
  width: 228px;
  height: 58px;
  background-color: #a63333;
  font-family: 'Jeju Hallasan';
  font-size: 20px;
  color: #000000;

  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;
