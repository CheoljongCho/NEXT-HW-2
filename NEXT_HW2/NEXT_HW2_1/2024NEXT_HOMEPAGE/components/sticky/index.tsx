import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "styles/components/sticky/style";
import { useMediaQuery } from "react-responsive";
import homecoming from "public/assets/homecoming.jpg";
import { Fade } from "react-awesome-reveal";
import Slick from "components/slick/index";
import { useRouter } from "next/router";
export default function Sticky() {
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  return (
    <S.StickyContainer>
      <S.StickyContent isMobile={isMobile}>
        <S.TextWrapper isMobile={isMobile}>
          <span>
            <b data-aos="fade-up">Our Vision</b>
          </span>
          <p style={{ fontWeight: "700" }}>
            <span data-aos="fade">
              <big>우리는 믿습니다.</big>
            </span>
            <br />
            <span data-aos="fade">
              10년 안에 이곳에서 <big>유니콘 🦄</big>이 탄생할 것이라고.
            </span>
          </p>
          <p>
            <span data-aos="fade">
              이곳&nbsp;
              <span style={{ fontWeight: "700" }}>
                NE<b>X</b>T
              </span>
              에서는
            </span>
            <br />
            <span data-aos="fade">
              다양한 스타트업이 만들어졌으며, IT 업계 전반에 많은 Alumni들이
              진출해있습니다.
            </span>
          </p>
        </S.TextWrapper>
        <Slick></Slick>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "6rem",
          }}
        >
          <S.MoreBtn
            isMobile={isMobile}
            onClick={() => router.push("people")}
            // data-aos="fade"
          >
            + More Info
          </S.MoreBtn>
        </div>
      </S.StickyContent>
      <S.Sticky isMobile={isMobile}>
        <img src={homecoming.src} />
      </S.Sticky>
    </S.StickyContainer>
  );
}
