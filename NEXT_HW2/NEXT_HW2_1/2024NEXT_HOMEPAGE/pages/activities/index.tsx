import Head from "next/head";
import React, { useState, useEffect } from "react";
import * as S from "styles/activities/style";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { Tabs } from "antd";
import { ACTIVITY_ITEMS } from "constants/activities";
import Curriculrum from "./components/curriculum";
import Session from "./components/session";
import Project from "./components/project";
import Demoday from "./components/demoday";

const { CURRICULUM, SESSION, PROJECT, DEMODAY } = ACTIVITY_ITEMS;

export default function Activities() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const isTabCenter = useMediaQuery({ minWidth: 381 });
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
            defaultActiveKey="1"
            activeKey={viewKey}
            onChange={(key) => setViewKey(key)}
            centered={isTabCenter}
            items={[
              {
                label: CURRICULUM,
                key: "1",
                children: <Curriculrum />,
              },
              {
                label: SESSION,
                key: "2",
                children: <Session />,
              },
              {
                label: PROJECT,
                key: "3",
                children: <Project />,
              },
              {
                label: DEMODAY,
                key: "4",
                children: <Demoday />,
              },
            ]}
          />
        </S.Container>
      )}
    </>
  );
}
