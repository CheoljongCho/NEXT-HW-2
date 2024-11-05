import * as S from "styles/components/cardnews/style";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

import { ALUMNI_NEWS_INFORMATION } from "constants/alumni-news";
import { ALUMNI_NEWS_INFORMATION_TYPE } from "types/people/alumni-news-information";

const Cardnews = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const NEXT_INSTAGRAM_URL = "https://www.instagram.com/p/CoSJYaohFig/";

  useEffect(() => {
    AOS.init();
    if (isMobile !== undefined && isDesktop !== undefined) {
      setLoading(false);
    }
  }, []);

  const openPopup = (URL: string) => {
    if (isDesktop) {
      const popupWidth = 600;
      const popupHeight = 800;
      const popupLeft = window.innerWidth / 2 - popupWidth / 2;
      const popupTop = window.innerHeight / 2 - popupHeight / 2;

      window.open(
        URL,
        "InstagramPopup",
        `width=${popupWidth}, height=${popupHeight}, left=${popupLeft}, top=${popupTop}`
      );
    } else if (isMobile) {
      window.location.href = URL; // 모바일일 경우 직접 링크로 이동
    }
  };
  return (
    <>
      {!loading && (
        <S.Container2 className="mount" isMobile={isMobile}>
          {ALUMNI_NEWS_INFORMATION &&
            ALUMNI_NEWS_INFORMATION.map(
              (item: ALUMNI_NEWS_INFORMATION_TYPE, index) => (
                <S.CardDiv key={index}>
                  <S.CardTopDiv>
                    <S.GenerationDiv>{`${item.gen}기`}</S.GenerationDiv>
                    <S.OccupationDiv>{item.occupation}</S.OccupationDiv>
                  </S.CardTopDiv>
                  <S.ThumbnailImgDiv onClick={() => openPopup(item.url)}>
                    {item.thumbnailImgSrc ? (
                      <Image
                        src={item.thumbnailImgSrc}
                        alt={`${index}-${item.occupation}`}
                        width={300}
                        height={170}
                      />
                    ) : (
                      <div
                        style={{
                          backgroundColor: "#333333",
                          width: "300px",
                          height: "170px",
                        }}
                      />
                    )}
                  </S.ThumbnailImgDiv>
                  <S.CommentDiv>{item.comment}</S.CommentDiv>
                </S.CardDiv>
              )
            )}
        </S.Container2>
      )}
    </>
  );
};

export default Cardnews;
