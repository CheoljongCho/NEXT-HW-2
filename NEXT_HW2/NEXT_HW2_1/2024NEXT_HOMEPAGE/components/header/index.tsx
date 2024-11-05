import React, { useEffect, useState } from 'react';
import { URLS } from 'constants/urls';
import * as S from 'styles/components/header/style';
import LogoImg from 'public/assets/logo.png';
import BlackLogoImg from 'public/assets/blackLogo.png';
import { useMediaQuery } from 'react-responsive';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import 'antd/dist/reset.css';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
const Links = [
    { name: 'HOME', path: URLS.HOME },
    { name: 'ABOUT US', path: URLS.ABOUT_US },
    { name: 'ACTIVITIES', path: URLS.ACTIVITIES },
    { name: 'PEOPLE', path: URLS.PEOPLE },
    { name: 'JOIN US', path: URLS.JOIN_US },
];
const NavBar = () => {
    const router = useRouter();
    const pathname = router.pathname;
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [fullscreen, setFullscreen] = useState<number>();
    const [subMenu, setSubMenu] = useState('');
    const logoSrc = pathname === URLS.HOME || pathname === URLS.JOIN_US ? LogoImg : BlackLogoImg;
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    const isMobile = useMediaQuery({
        query: '(max-width:820px)',
    });

    useEffect(() => {
        setFullscreen(window.innerHeight);
        window.addEventListener('scroll', updateScroll);
    }, []);
    const sidebar = {
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
        closed: {
            x: '-100%',
            transition: {
                // delay: 0.4,
                type: 'spring',
                stiffness: 600,
                damping: 40,
            },
        },
    };
    if (isMobile) {
        return (
            <>
                {fullscreen && (
                    <>
                        <S.Container isOpen={isOpen}>
                            <S.Header>
                                <S.NavBarLogo src={LogoImg.src} onClick={() => router.push('home')} alt="NEXT 로고" />
                                <S.HamburgerContainer
                                    onClick={() => {
                                        setIsOpen((prev) => !prev);
                                    }}
                                    click={isOpen}
                                    isWhite={pathname === URLS.HOME}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </S.HamburgerContainer>
                            </S.Header>
                            <motion.nav animate={isOpen ? 'open' : 'closed'} variants={sidebar} initial={false}>
                                <S.MenuContainer isOpen={isOpen}>
                                    <S.MenuWrapper>
                                        {Links.map(({ name, path }) => (
                                            <>
                                                <S.Menu
                                                    onClick={() => {
                                                        if (name === 'ABOUT US' || name === 'ACTIVITIES') {
                                                            if (subMenu === path) {
                                                                setSubMenu('');
                                                            } else {
                                                                setSubMenu(path);
                                                            }
                                                        } else {
                                                            router.push(path);
                                                            setSubMenu('');
                                                            setIsOpen((prev) => !prev);
                                                        }
                                                    }}
                                                    selected={pathname === path ? true : false}
                                                    key={name}
                                                >
                                                    {name}
                                                </S.Menu>
                                                {path === '/about' && (
                                                    <AnimatePresence>
                                                        {subMenu === '/about' && (
                                                            <motion.div
                                                                initial={{ height: 0 }}
                                                                animate={{ height: 'auto' }}
                                                                exit={{ height: 0, transition: { delay: 0.5 } }}
                                                            >
                                                                <S.SubMenuContainer id="/about" subMenu={subMenu}>
                                                                    <motion.div
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        exit={{ opacity: 0 }}
                                                                    >
                                                                        <S.SubMenu
                                                                            onClick={() => {
                                                                                router.push({
                                                                                    pathname: path,
                                                                                    query: { key: '1' },
                                                                                });
                                                                                setIsOpen((prev) => !prev);
                                                                            }}
                                                                        >
                                                                            Introductions
                                                                        </S.SubMenu>
                                                                        <S.SubMenu
                                                                            onClick={() => {
                                                                                router.push({
                                                                                    pathname: path,
                                                                                    query: { key: '2' },
                                                                                });
                                                                                setIsOpen((prev) => !prev);
                                                                            }}
                                                                        >
                                                                            Greeting
                                                                        </S.SubMenu>
                                                                        <S.SubMenu
                                                                            onClick={() => {
                                                                                router.push({
                                                                                    pathname: path,
                                                                                    query: { key: '3' },
                                                                                });
                                                                                setIsOpen((prev) => !prev);
                                                                            }}
                                                                        >
                                                                            History
                                                                        </S.SubMenu>
                                                                        <S.SubMenu
                                                                            onClick={() => {
                                                                                router.push({
                                                                                    pathname: path,
                                                                                    query: { key: '4' },
                                                                                });
                                                                                setIsOpen((prev) => !prev);
                                                                            }}
                                                                        >
                                                                            Achievement
                                                                        </S.SubMenu>
                                                                        <S.SubMenu
                                                                            onClick={() => {
                                                                                router.push({
                                                                                    pathname: path,
                                                                                    query: { key: '5' },
                                                                                });
                                                                                setIsOpen((prev) => !prev);
                                                                            }}
                                                                        >
                                                                            Partners
                                                                        </S.SubMenu>
                                                                    </motion.div>
                                                                </S.SubMenuContainer>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                )}
                                                {path === '/activities' && (
                                                    <AnimatePresence>
                                                        {subMenu === '/activities' && (
                                                            <motion.div
                                                                initial={{ height: 0 }}
                                                                animate={{ height: 'auto' }}
                                                                exit={{ height: 0, transition: { delay: 0.5 } }}
                                                            >
                                                                <S.SubMenuContainer id="/activities" subMenu={subMenu}>
                                                                    <motion.div
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        exit={{ opacity: 0 }}
                                                                    >
                                                                        <S.SubMenu
                                                                            onClick={() => {
                                                                                router.push({
                                                                                    pathname: path,
                                                                                    query: { key: '1' },
                                                                                });
                                                                                setIsOpen((prev) => !prev);
                                                                            }}
                                                                        >
                                                                            Curriculum
                                                                        </S.SubMenu>
                                                                        <S.SubMenu
                                                                            onClick={() => {
                                                                                router.push({
                                                                                    pathname: path,
                                                                                    query: { key: '2' },
                                                                                });
                                                                                setIsOpen((prev) => !prev);
                                                                            }}
                                                                        >
                                                                            Session
                                                                        </S.SubMenu>
                                                                        <S.SubMenu
                                                                            onClick={() => {
                                                                                router.push({
                                                                                    pathname: path,
                                                                                    query: { key: '3' },
                                                                                });
                                                                                setIsOpen((prev) => !prev);
                                                                            }}
                                                                        >
                                                                            Project
                                                                        </S.SubMenu>
                                                                        <S.SubMenu
                                                                            onClick={() => {
                                                                                router.push({
                                                                                    pathname: path,
                                                                                    query: { key: '4' },
                                                                                });
                                                                                setIsOpen((prev) => !prev);
                                                                            }}
                                                                        >
                                                                            Demoday
                                                                        </S.SubMenu>
                                                                    </motion.div>
                                                                </S.SubMenuContainer>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                )}
                                            </>
                                        ))}
                                    </S.MenuWrapper>
                                    <S.NoticeContainer>
                                        <p>ⓒ NEXT X Likelion</p>
                                        <p>next.recruit@gmail.com</p>
                                        <p>Korea University, Anam-dong, Seongbuk-gu,</p>
                                        <p>Seoul, South Korea</p>
                                    </S.NoticeContainer>
                                </S.MenuContainer>
                            </motion.nav>
                        </S.Container>

                        {/* <S.HeaderWhiteSpace /> */}
                    </>
                )}
            </>
        );
    }
    return (
        <>
            {fullscreen && (
                <S.NavBarContainer
                    scroll={scrollPosition > 60 ? true : false}
                    // scroll={scrollPosition > fullscreen * 0.2 ? true : false}
                    pathname={pathname}
                >
                    <S.NavBarLogo src={logoSrc.src} onClick={() => router.push('home')} alt="NEXT 로고" />

                    <S.NavLinkWrapper>
                        {Links.map(({ name, path }) => (
                            <S.StyledNav
                                isWhite={pathname === URLS.HOME || pathname === URLS.JOIN_US}
                                onClick={() => {
                                    router.push(path);
                                }}
                                selected={pathname === path ? true : false}
                                key={name}
                            >
                                {name}
                            </S.StyledNav>
                        ))}
                    </S.NavLinkWrapper>
                </S.NavBarContainer>
            )}
        </>
    );
};

export default NavBar;
