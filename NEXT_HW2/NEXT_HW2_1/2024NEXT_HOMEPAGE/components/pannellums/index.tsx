import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import spaceImg2 from "public/assets/space2.jpg";
import { pannellum } from "./pannellum";

const PanoramaRoot = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  min-height: 100vh;

  .pnlm-about-msg {
    display: none !important;
  }

  .pnlm-load-box {
    display: none !important;
  }
`;

export const Panorama: React.FC = (props) => {
  // Pannellum needs an ID to mount to so we need to generate a unique one for
  // each instance
  const { current: id } = useRef(
    `panorama-${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`
  );
  const viewer = useRef<any>(null);

  useEffect(() => {
    viewer.current = pannellum.viewer(id, {
      autoLoad: true,
      panorama: spaceImg2,
      dynamicUpdate: true,
      compass: false,
      friction: 0,
      mouseZoom: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      type: "equirectangular",
    });

    return () => {
      viewer.current.destroy();
    };
  }, [id]);

  return <PanoramaRoot {...props} id={id} />;
};
