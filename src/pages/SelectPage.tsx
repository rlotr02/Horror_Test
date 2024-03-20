import React from 'react';
import styled from 'styled-components';

const SelectPage: React.FC = () => {
  return (
    <Container>
      <div>selectPage</div>
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

  > div {
    @media screen and (min-width: 750px) {
      transform: scale(1.15);
    }

    @media screen and (max-height: 700px) {
      transform: scale(0.9);
    }
  }
`;
