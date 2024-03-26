import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { pageState } from './assets/recoil';
import StartPage from './pages/StartPage';
import SelectPage from './pages/SelectPage';
import ResultPage from './pages/ResultPage';
import LoadingPage from './pages/LoadingPage';
import KakaoAdfit1 from './assets/KakaoAdfit/KakaoAdfit1';
import KakaoAdfit2 from './assets/KakaoAdfit/KakaoAdfit2';

const App: React.FC = () => {
  const page = useRecoilValue(pageState);

  return (
    <>
      {page === 0 || page === 1 || page === 2 ? (
        <Container>
          {page === 0 && <StartPage />}
          {page === 1 && <SelectPage />}
          {page === 2 && <LoadingPage />}
          <KakaoAdfitDiv1>
            <KakaoAdfit1 />
          </KakaoAdfitDiv1>
          <KakaoAdfitDiv2>
            <KakaoAdfit2 />
          </KakaoAdfitDiv2>
        </Container>
      ) : (
        <Container2>
          {page === 3 && <ResultPage />}
          <KakaoAdfitDiv1>
            <KakaoAdfit1 />
          </KakaoAdfitDiv1>
          <KakaoAdfitDiv2>
            <KakaoAdfit2 />
          </KakaoAdfitDiv2>
        </Container2>
      )}
    </>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
`;

const KakaoAdfitDiv1 = styled.div`
  position: absolute;
  top: 15%;
  margin-right: 690px;
`;

const KakaoAdfitDiv2 = styled.div`
  position: absolute;
  top: 15%;
  margin-left: 690px;
`;
