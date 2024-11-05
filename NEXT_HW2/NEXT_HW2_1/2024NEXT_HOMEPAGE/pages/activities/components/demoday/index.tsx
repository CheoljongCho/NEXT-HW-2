import * as S from "styles/activities/components/demoday/index";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import SessionDev from "public/assets/activities/session-development.png";
import SessionStartup from "public/assets/activities/session-startup.png";
import Demoteams from "public/images/activities/demoday/demoteams.png";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import {
  DemodayFinalLottie,
  DemodayInHouseLottie,
} from "components/lottie/lottie";
import SliderSlick from "components/sliderSlick/index";
import ImageSlider from "components/imageSlider/index";
import { DemoItem } from "constants/demo.ts";

export default function Curriculrum() {
  const router = useRouter();
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
    <>
      {!loading && (
        <S.Container className="mount" isMobile={isMobile}>
          <S.MainContainer isMobile={isMobile}>
            <S.SessionWrapper isMobile={isMobile}>
              <S.SessionImgBox isMobile={isMobile}>
                <DemodayInHouseLottie />
                <DemodayFinalLottie />
              </S.SessionImgBox>
              <S.SessionTitleBox isMobile={isMobile}>
                최종 데모데이
              </S.SessionTitleBox>
              <S.SessionInfoBox isMobile={isMobile}>
                <p>
                  2학기 활동의 결과물을 알럼나이 및 투자심사역 앞에서 발표하고,
                  <br />
                  최종 창업 진행 여부를 결정합니다.
                </p>
              </S.SessionInfoBox>
              <S.SessionDayBox isMobile={isMobile}>
                ㅣ12월 예정 ㅣ
              </S.SessionDayBox>
            </S.SessionWrapper>

            <S.SessionWrapper isMobile={isMobile}>
              <S.ProjectExampleWrapper>
                <S.ProjectTextBox>2023 NEXT 창업팀</S.ProjectTextBox>
                {/* <SliderSlick
                    slideItemGroup={ProjectItem}
                    slideShowGroup={3}
                  /> */}
                <S.SlideWrapper>
                  <SliderSlick slideItemGroup={DemoItem} slideShowGroup={1} />
                </S.SlideWrapper>
                {/* <S.ProjectImgBox>
                  <img src={Demoteams.src} alt="데모데이 팀들" />
                </S.ProjectImgBox> */}
              </S.ProjectExampleWrapper>
            </S.SessionWrapper>
          </S.MainContainer>
        </S.Container>
      )}
    </>
  );
}
