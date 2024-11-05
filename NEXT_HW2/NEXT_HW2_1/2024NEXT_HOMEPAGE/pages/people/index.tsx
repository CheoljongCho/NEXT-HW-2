import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import * as S from 'styles/people/style';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import { Tabs } from 'antd';
import { PEOPLE_ITEMS } from 'constants/people';
import Member from './components/Member';
import { PEOPLE_INFORMATION } from 'constants/people';
import Cardnews from './components/Cardnews';

const { TEN, ELEVEN, TWELVE } = PEOPLE_ITEMS;

export default function People() {
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
            <Head>
                <title>NEXT: PEOPLE</title>
                <meta name="description" content="고려대학교 소프트웨어창업학회 NEXT PEOPLE" />
            </Head>
            {!loading && (
                <S.Container isMobile={isMobile}>
                    <Tabs
                        defaultActiveKey="1"
                        centered
                        items={[
                            {
                                label: 'Alumni',
                                key: '1',
                                children: <Cardnews />,
                            },
                            {
                                label: `${TEN}기`,
                                key: '2',
                                children: (
                                    <Member peopleInformation={PEOPLE_INFORMATION.filter((item) => item.gen === 10)} />
                                ),
                            },
                            {
                                label: `${ELEVEN}기`,
                                key: '3',
                                children: (
                                    <Member peopleInformation={PEOPLE_INFORMATION.filter((item) => item.gen === 11)} />
                                ),
                            },
                            {
                                label: `${TWELVE}기`,
                                key: '4',
                                children: (
                                    <Member peopleInformation={PEOPLE_INFORMATION.filter((item) => item.gen === 12)} />
                                ),
                            },
                        ]}
                    />
                </S.Container>
            )}
        </>
    );
}
