import React, { useEffect } from 'react';
import styled from 'styled-components';

const KakaoAdfit2 = () => {
  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = 'display:none;';
    scr.async = 'true';
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-unit', 'DAN-4gPG9K5mBiwi7rd5');
    ins.setAttribute('data-ad-width', '160');
    ins.setAttribute('data-ad-height', '600');
    document.querySelector('.adfit2').appendChild(ins);
    document.querySelector('.adfit2').appendChild(scr);
  }, []);
  return <Advert2 className="adfit2" />;
};

export default KakaoAdfit2;

const Advert2 = styled.div`
  display: none;

  @media screen and (min-width: 750px) {
    display: block;
  }
`;
