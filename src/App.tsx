import React from 'react';
import { useRecoilValue } from 'recoil';
import { pageState } from './assets/recoil';
import StartPage from './pages/StartPage';
import SelectPage from './pages/SelectPage';
import ResultPage from './pages/ResultPage';
import LoadingPage from './pages/LoadingPage';

const App: React.FC = () => {
  const page = useRecoilValue(pageState);

  return (
    <>
      {page === 0 && <StartPage />}
      {page === 1 && <SelectPage />}
      {page === 2 && <LoadingPage />}
      {page === 3 && <ResultPage />}
    </>
  );
};

export default App;
