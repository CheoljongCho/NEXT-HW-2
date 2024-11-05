// import React, { useState, useEffect } from "react";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  memo,
  MouseEvent,
} from "react";
// import classNames from 'classnames';
import * as S from "styles/about/components/history/styles";
import { ScrollProgress } from "components/scrollprogress";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useRouter } from "next/router";
import { ABOUT_HISTORY, ABOUT_HISTORY as HistoryItems } from "constants/about";

export const DESKTOP_TAB = {
  width: "100%",
  margin: "0 auto 2rem auto",
};

export default function History() {
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
    <S.Container isMobile={isMobile} className="mount">
      <ScrollProgress></ScrollProgress>
      {/* <S.ProgressIndicator></S.ProgressIndicator> */}
      <S.MainContainer isMobile={isMobile} className="mount">
        {HistoryItems.map(({ YEAR, TITLE, CONTENT }) => (
          <S.TextWrapper key={YEAR} data-aos="fade">
            <S.TitleTextElementWrapper isMobile={isMobile}>
              <span>
                <b>{YEAR}</b>
              </span>
              <span style={{ fontSize: "2.4rem" }}>{TITLE}</span>
            </S.TitleTextElementWrapper>
            <S.TextElementWrapper isMobile={isMobile}>
              {/* {IsActing ? (
                          <S.Badge>Acting</S.Badge>
                        ) : (<div></div>
                        )} */}
              {CONTENT.map((item) => (
                <p>
                  <S.FlexRow isMobile={isMobile} key={item[1]}>
                    {
                      item[1] == 2 ? (
                        <S.TextElementWrapper
                          isMobile={isMobile}
                          style={{ width: "10rem" }}
                        >
                          <S.Badge>Alumni</S.Badge>
                        </S.TextElementWrapper>
                      ) : item[1] == 3 ? (
                        <S.TextElementWrapper
                          isMobile={isMobile}
                          style={{ width: "10rem" }}
                        ></S.TextElementWrapper>
                      ) : item[1] == 1 ? (
                        <S.TextElementWrapper
                          isMobile={isMobile}
                          style={{ width: "10rem" }}
                        >
                          <S.Badge>Acting</S.Badge>
                        </S.TextElementWrapper>
                      ) : null
                      // <br />
                    }
                    <S.TextElementWrapper isMobile={isMobile}>
                      {item[0]}
                    </S.TextElementWrapper>
                  </S.FlexRow>
                </p>
              ))}
            </S.TextElementWrapper>
          </S.TextWrapper>
        ))}
      </S.MainContainer>
    </S.Container>
  );
}
