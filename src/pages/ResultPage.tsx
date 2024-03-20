import React from 'react';
import styled from 'styled-components';

const ResultPage: React.FC = () => {
  return (
    <Container>
      <div>resultpage </div>
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: pre-line;

  > div {
    margin-top: 30px;
    width: 342px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 750px) {
      margin-top: 54px;
      zoom: 1.5;
    }
  }
`;
