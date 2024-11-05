import * as S from 'styles/activities/components/curriculum/style';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import CurriculumDesktop from 'public/images/activities/curriculum/curriculum-desktop.png';
import CurriculumMobile from 'public/images/activities/curriculum/curriculum-mobile.png';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

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
                        <S.TextWrapper isMobile={isMobile}>
                            <p className="main-text">
                                <b>개발/창업 경험이 전혀 없더라도</b>
                            </p>
                            <p className="sub-text">1년 간의 활동을 통해</p>
                            <p className="sub-text">
                                기본적인 <b>개발 능력을 갖춘 창업자</b>로 성장합니다.
                            </p>
                            <p className="test">
                                📌 아래 세션 일정은 1학기 기준으로, 2학기 세션 일정은 학회 내부 공지 예정입니다.
                            </p>
                        </S.TextWrapper>
                        <S.ScheduleContainer isMobile={isMobile}>
                            <S.ScheduleWrapper isMobile={isMobile}>
                                <S.ScheduleEventBox>
                                    <p>22</p>
                                </S.ScheduleEventBox>
                                <S.ScheduleInfoBox>
                                    <div>
                                        <h2>Development</h2>
                                        <h2>Sessions</h2>
                                    </div>
                                    <p>개발 세션</p>
                                </S.ScheduleInfoBox>
                            </S.ScheduleWrapper>
                            <S.ScheduleWrapper isMobile={isMobile}>
                                <S.ScheduleEventBox>
                                    <p>6</p>
                                </S.ScheduleEventBox>
                                <S.ScheduleInfoBox>
                                    <div>
                                        <h2>Startup</h2>
                                        <h2>Sessions</h2>
                                    </div>
                                    <p>창업 세션</p>
                                </S.ScheduleInfoBox>
                            </S.ScheduleWrapper>
                            <S.ScheduleWrapper isMobile={isMobile}>
                                <S.ScheduleEventBox>
                                    <p>4</p>
                                </S.ScheduleEventBox>
                                <S.ScheduleInfoBox>
                                    <div>
                                        <h2>Project</h2>
                                        <h2>Weeks</h2>
                                    </div>
                                    <p>4주 해커톤</p>
                                </S.ScheduleInfoBox>
                            </S.ScheduleWrapper>
                            <S.ScheduleWrapper isMobile={isMobile}>
                                <S.ScheduleEventBox>
                                    <p>1</p>
                                </S.ScheduleEventBox>
                                <S.ScheduleInfoBox>
                                    <div>
                                        <h2>Demoday</h2>
                                        <h2></h2>
                                    </div>
                                    <p>데모데이</p>
                                </S.ScheduleInfoBox>
                            </S.ScheduleWrapper>
                        </S.ScheduleContainer>
                        <S.LottieContainer isMobile={isMobile}>
                            {isMobile ? (
                                <Image layout="intrinsic" alt="CurriculumMobile" src={CurriculumMobile} />
                            ) : (
                                <Image layout="intrinsic" alt="CurriculumDesktop" src={CurriculumDesktop} />
                            )}
                        </S.LottieContainer>
                    </S.MainContainer>
                </S.Container>
            )}
        </>
    );
}
