import React, { useEffect, useState } from "react";
import * as S from "styles/components/intro/style";

import { useRouter } from "next/router";

const Intro = () => {
  return (
    <>
      <S.VideoWrapper className="video-wrapper">
        {/* <S.Video
          muted={true}
          autoPlay={true}
          id="video"
          src="https://player.vimeo.com/54273897-13fb-4b13-9b1b-5ed7500fc745"
        /> */}
        <S.IMG src="https://images.pexels.com/photos/2832432/pexels-photo-2832432.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </S.VideoWrapper>
    </>
  );
};

export default Intro;
