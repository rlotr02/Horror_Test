import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface TButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onAni: boolean;
}

const Button: React.FC<TButtonProps> = ({ text, onAni, ...props }) => {
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const randomSpeed = Math.random() * 5 + 1;
    setSpeed(randomSpeed);
  }, []);

  return (
    <Btn {...props} speed={speed} $ani={onAni}>
      {text}
    </Btn>
  );
};

export default Button;

const blinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;

const Btn = styled.button<{ speed: number; $ani: boolean }>`
  width: 228px;
  height: 58px;
  background-color: #a63333;
  font-family: 'Jeju Hallasan';
  border: none;
  font-size: 20px;
  color: #000000;

  transition: all 0.2s ease;
  ${(props) =>
    props.$ani &&
    css`
      animation: ${blinkAnimation} ${props.speed}s linear infinite;
    `}

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;
