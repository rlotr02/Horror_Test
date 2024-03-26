import React, { useEffect } from 'react';
import styled from 'styled-components';

const KakaoAdfit3 = () => {
  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = 'display:none;';
    scr.async = 'true';
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-unit', 'DAN-T0EkRqvQwPUQYNfe');
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '100');
    document.querySelector('.adfit3').appendChild(ins);
    document.querySelector('.adfit3').appendChild(scr);
  }, []);
  return <Advert3 className="adfit3" />;
};

export default KakaoAdfit3;

const Advert3 = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;
