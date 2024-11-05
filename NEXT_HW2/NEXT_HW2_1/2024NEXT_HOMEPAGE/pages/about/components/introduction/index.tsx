import React, { useState, useEffect } from "react";
import * as S from "styles/about/components/introduction/styles";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import Next11 from "public/images/next11/next11.png";
import Typewriter from "typewriter-effect";

export const DESKTOP_TAB = {
  width: "100%",
  margin: "0 auto 2rem auto",
};

export default function Introduction() {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });

  useEffect(() => {
    AOS.init();
    if (isMobile != undefined && isDesktop != undefined) {
      setLoading(false);
    }
  }, []);
  return (
    <S.Container isMobile={isMobile}>
      <S.MainImageWrapper isMobile={isMobile}>
        {/* <img src={Next10.src} /> */}
        <S.ContainerBG src={Next11.src} />
      </S.MainImageWrapper>
      <S.MainTextWrapper isMobile={isMobile}>
        <p className="mount">
          작년 한 해동안, 우리는 함께 치열하게 고민하고 발전해왔습니다.
        </p>
        <br />
        <span className="mount">
          빛나는 2024년을 함께할 <br />
          <b>NEXT 12기</b> 여러분을 기다립니다.
        </span>
        {/* <p><Typewriter onInit={(typewriter) => {
          typewriter.typeString('작년 한 해동안, 우리는 함께 치열하게 고민하고 발전해왔습니다.')
          .pauseFor(2500)
          .deleteAll()
          .start();
        }} />
        </p> */}
        {/* <span>
          <Typewriter onInit={(typewriter) => {
          typewriter.typeString('빛나는 2023년을 함께할')
          .pauseFor(2500)
          .deleteAll()
          .start();
          }} />
          <b>
            <Typewriter onInit={(typewriter) => {
            typewriter.typeString('NEXT 11기')
            .pauseFor(2500)
            .deleteAll()
            .start();
            }} />
          </b>
          <Typewriter onInit={(typewriter) => {
          typewriter.typeString('여러분을 기다립니다')
          .pauseFor(2500)
          .deleteAll()
          .start();
          }} />
        </span> */}
      </S.MainTextWrapper>
    </S.Container>
  );
}
