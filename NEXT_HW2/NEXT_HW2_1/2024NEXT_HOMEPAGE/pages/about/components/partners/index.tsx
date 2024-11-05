import React, { useState, useEffect } from 'react';
import * as S from 'styles/about/components/achievement/styles';
import { useMediaQuery } from 'react-responsive';
import { Partners as PartnersItems } from 'constants/partners';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const DESKTOP_TAB = {
    width: '100%',
    margin: '0 auto 2rem auto',
};

export default function Partners() {
    const [loading, setLoading] = useState(true);
    const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
    const isMobile = useMediaQuery({ maxWidth: 820 });
    const partners = Partners;

    useEffect(() => {
        AOS.init();
        if (isMobile != undefined && isDesktop != undefined) {
            setLoading(false);
        }
    }, []);
    return (
        <S.Container isMobile={isMobile}>
            <S.MainWrapper isMobile={isMobile}>
                <S.TextWrapper isMobile={isMobile}>
                    <p>
                        <span>
                            고려대학교 소프트웨어 창업학회 NE<b className="titleX">X</b>T는
                        </span>
                    </p>
                    <p>
                        교내 창업지원단체와 교육 기업, <br />
                        그리고 다양한 VC와 긴밀하게 협력하고 있습니다 <br />
                    </p>
                    <p>협업 관련 문의는 next.recruit@gmail.com으로 부탁드립니다</p>
                </S.TextWrapper>
                <S.ImageWrapper isMobile={isMobile} className="mount">
                    {PartnersItems.map(({ name, src }) => (
                        <S.ImageElementWrapper key={name} data-aos="fade" isMobile={isMobile}>
                            <img src={src.src} />
                        </S.ImageElementWrapper>
                    ))}
                </S.ImageWrapper>
            </S.MainWrapper>
        </S.Container>
    );
}
