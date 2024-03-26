import React, { useEffect } from 'react';
import styled from 'styled-components';

const KakaoAdfit1 = () => {
  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = 'display:none;';
    scr.async = 'true';
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-unit', 'DAN-s5HLmOnZOhI8iqgS');
    ins.setAttribute('data-ad-width', '160');
    ins.setAttribute('data-ad-height', '600');
    document.querySelector('.adfit1').appendChild(ins);
    document.querySelector('.adfit1').appendChild(scr);
  }, []);
  return <Advert1 className="adfit1" />;
};

export default KakaoAdfit1;

const Advert1 = styled.div`
  display: none;

  @media screen and (min-width: 750px) {
    display: block;
  }
`;
