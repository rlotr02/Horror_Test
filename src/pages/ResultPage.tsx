import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState, resultNumState } from '../assets/recoil';
import ResultJson from '../assets/api/Result.json';
import Hand from '../assets/images/hand.png';
import Button from '../components/Button';
import Bg from '../assets/images/bg.png';
import { RESULT_IMAGES } from '../assets/image';

const ResultPage: React.FC = () => {
  const result = useRecoilValue(resultNumState);
  const setPage = useSetRecoilState(pageState);

  const saveImage = () => {
    const imageUrl = RESULT_IMAGES[result];
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${ResultJson[result].title}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyLink = () => {
    const link = 'https://horror-test.netlify.app';
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert('링크가 복사되었습니다.');
      })
      .catch((err) => {
        console.error('복사에 실패했습니다.', err);
      });
  };

  return (
    <Container>
      <HandImg src={Hand} alt="손" />
      <BgImg src={Bg} alt="배경" />
      <div>
        <Text>나의 공포 유형은</Text>
        <Title>{ResultJson[result].title}</Title>
        <Description>{ResultJson[result].description}</Description>
        <Button
          text="이미지로 저장하기"
          onAni={false}
          onClick={saveImage}
          style={{ marginBottom: '11px' }}
        />
        <Button
          text="테스트 공유하기"
          onAni={false}
          onClick={copyLink}
          style={{ marginBottom: '11px' }}
        />
        <Button
          text="테스트 다시하기"
          onAni={false}
          onClick={() => setPage(0)}
        />
      </div>
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
    margin-top: 23px;

    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
  }
`;

const HandImg = styled.img`
  width: 100%;
  height: auto;

  @media screen and (min-width: 500px) {
    width: 500px;
  }
`;

const BgImg = styled.img`
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
`;

const Text = styled.div`
  font-family: 'Jeju Hallasan';
  font-weight: 400;
  font-size: 23px;
  line-height: 23px;
  letter-spacing: -0.07em;
  color: #742727;
`;

const Title = styled.div`
  margin-top: 11px;
  font-family: 'Jeju Hallasan';
  font-weight: 400;
  font-size: 33px;
  line-height: 33px;
  letter-spacing: -0.07em;
  color: #a63333;
`;

const Description = styled.div`
  margin-top: 35px;
  margin-bottom: 37px;
  font-family: 'Jeju Hallasan';
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #972d2d;
  padding: 0 30px;
`;
