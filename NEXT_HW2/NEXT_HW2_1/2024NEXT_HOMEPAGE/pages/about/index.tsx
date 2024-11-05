import Head from "next/head";
import React, { useState, useEffect } from "react";
import * as S from "styles/about/style";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useRouter } from "next/router";
import { Tabs } from "antd";
import { ABOUT_ITEMS } from "constants/about";
import Partners from "pages/about/components/partners";
import Introduction from "pages/about/components/introduction";
import Greeting from "pages/about/components/greeting";
import History from "pages/about/components/history";
import Achievement from "pages/about/components/achievement";
import { useRouter } from "next/router";
const { INTRODUCTION, GREETING, HISTORY, ACHIEVEMENT, PARTNERS } = ABOUT_ITEMS;

export default function About() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const isTabCenter = useMediaQuery({ minWidth: 500 });
  const key = router.query.key;
  const [viewKey, setViewKey] = useState<any>("1");

  useEffect(() => {
    AOS.init();
    if (isMobile != undefined && isDesktop != undefined) {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    if (key) {
      setViewKey(key);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>NEXT: ABOUT</title>
        <meta
          name="description"
          content="고려대학교 소프트웨어창업학회 NEXT ABOUT"
        />
      </Head>
      {!loading && (
        <S.Container isMobile={isMobile}>
          <Tabs
            defaultActiveKey={"1"}
            activeKey={viewKey}
            onChange={(key) => setViewKey(key)}
            centered={isTabCenter}
            items={[
              {
                label: INTRODUCTION,
                key: "1",
                children: <Introduction />,
              },
              {
                label: GREETING,
                key: "2",
                children: <Greeting />,
              },
              {
                label: HISTORY,
                key: "3",
                children: <History />,
              },
              {
                label: ACHIEVEMENT,
                key: "4",
                children: <Achievement />,
              },
              {
                label: PARTNERS,
                key: "5",
                children: <Partners />,
              },
            ]}
          />
        </S.Container>
      )}
    </>
  );
}
