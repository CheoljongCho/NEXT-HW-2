import React, { useState, useCallback, useEffect, useRef, memo, MouseEvent } from 'react';
import * as S from "styles/components/scrollprogress/styles";
import { useMediaQuery } from "react-responsive";

export const ScrollProgress = memo((): JSX.Element => {
  const [height, setHeight] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 820 });

  const handleScroll = useCallback((): void => {

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop === 0) {
      setHeight(0);
      return;
    }
    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = (scrollTop / windowHeight);
    setHeight(currentPercent * 100);
  }, []);
  

   const handleProgressMove = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    if (progressRef.current !== null) {
      const { scrollHeight } = progressRef.current;
      const { clientY } = e;
      const selectedPercent: number = (clientY / scrollHeight);
      setHeight(selectedPercent);
      
      const windowHeight: number = (document.body.scrollHeight - document.body.clientHeight);

      const moveScrollPercent: number = (windowHeight * selectedPercent);

      window.scrollTo({
        top: moveScrollPercent,
        behavior: 'smooth',
      })
    }
  }, 
[]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, [handleScroll]);

    return (
      <S.ScrollProgressBar isMobile={isMobile} ref={progressRef} onClick={handleProgressMove}>
        <S.ScrollProgress isMobile={isMobile} style={{height: height+'%'}}></S.ScrollProgress>
      </S.ScrollProgressBar>
    );
});



// import React, { useState, useCallback, useEffect, useRef, memo, MouseEvent } from 'react';
// // import classNames from 'classnames';
// // import { ClassNamesFn } from 'classnames/types';
// import * as S from "styles/components/scrollprogress/styles";

// // const style = require('./ScrollProgress.scss');
// // const cx: ClassNamesFn = classNames.bind(style);

// export const ScrollProgress = memo((): JSX.Element => {
//   const [height, setWidth] = useState<number>(0);
//   const progressRef = useRef<HTMLDivElement | null>(null);

//   const handleProgressMove = useCallback((e: MouseEvent<HTMLDivElement>): void => {
//     if (progressRef.current !== null) {
//       const { scrollWidth } = progressRef.current;
//       const { clientX } = e;

//       const selectedPercent: number = ((clientX / scrollWidth) * 100);
//       setWidth(selectedPercent);
      
//       const { scrollHeight, clientHeight } = document.body;
//       const windowHeight: number = scrollHeight - clientHeight;

//       const moveScrollPercent: number = ((windowHeight * selectedPercent) / 100);

//       window.scrollTo({
//         top: moveScrollPercent,
//         behavior: 'smooth',
//       })
//     }
//   }, []);

//   const handleScroll = useCallback((): void => {
//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//     if (scrollTop === 0) {
//       setWidth(0);
//       return;
//     }

//     const windowHeight: number = scrollHeight - clientHeight;
//     const currentPercent: number = (scrollTop / windowHeight);

//     setWidth(currentPercent * 100);
//   }, []);
  
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, true);

//     return () => {
//       window.removeEventListener('scroll', handleScroll, true);
//     }
//   }, [handleScroll]);

//     return (
//       <S.ScrollProgressBar ref={progressRef} onClick={handleProgressMove}>
//         <S.ScrollProgress style={{height: height+'%'}}></S.ScrollProgress>
//       </S.ScrollProgressBar>
//     );
// });