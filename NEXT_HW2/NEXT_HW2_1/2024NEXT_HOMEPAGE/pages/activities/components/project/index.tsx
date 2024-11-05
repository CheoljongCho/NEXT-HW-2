import * as S from "styles/activities/components/project/index";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import SliderSlick from "components/sliderSlick/index";
import { ProjectItem } from "constants/project";
import Hackerton from "public/images/activities/project/hackerton.png";
import SNUHackerton from "public/images/activities/project/SNUhackerton.png";
import Longton from "public/images/activities/project/Longton.png";

export default function Curriculrum() {
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
              <S.SessionTitleBox isMobile={isMobile}>
                <p>무박 2일 해커톤</p>
              </S.SessionTitleBox>
              <S.SessionSemiTitleBox isMobile={isMobile}>
                <p>5월 중순</p>
              </S.SessionSemiTitleBox>
              <S.SessionInfoBox isMobile={isMobile}>
                꿈꿔왔던 아이템을 개발 세션을 통해 배운 도구들로 직접
                만들어봅니다. 제한된 시간 안에 아이디어를 선정하고 배포하는 것을
                목표로 하며, 창업가로서의 협업 경험을 쌓습니다.
              </S.SessionInfoBox>
              <S.SessionImgBox>
                <img src={Hackerton.src} alt="무박 해커톤" />
              </S.SessionImgBox>
            </S.SessionWrapper>
            <S.SessionWrapper isMobile={isMobile}>
              <S.SessionTitleBox isMobile={isMobile}>
                <p>연합 4주 해커톤</p>
              </S.SessionTitleBox>
              <S.SessionSemiTitleBox isMobile={isMobile}>
                <p>7월 한달</p>
              </S.SessionSemiTitleBox>
              <S.SessionInfoBox isMobile={isMobile}>
                22번의 개발세션을 통해 배운 도구들을 활용해볼 수 있는
                시간입니다. 4주 동안 새로운 팀원과 소통하면서 단순한 서비스의
                구현보다는 실제 서비스 출시와 운영에 집중합니다.
              </S.SessionInfoBox>
              <S.SessionImgBox>
                <img src={Longton.src} alt="연합 해커톤" />
              </S.SessionImgBox>
            </S.SessionWrapper>
            <S.ProjectExampleWrapper>
              <S.ProjectTextBox>NEXT 프로젝트 예시</S.ProjectTextBox>
              <S.SlideWrapper>
                <SliderSlick slideItemGroup={ProjectItem} slideShowGroup={2} />
              </S.SlideWrapper>
            </S.ProjectExampleWrapper>
          </S.MainContainer>
        </S.Container>
      )}
    </>
  );
}
