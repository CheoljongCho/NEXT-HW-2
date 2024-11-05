import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const ScrollProgressBar= styled.div<{ isMobile: boolean }>`{
  width: 5px;
  height: 94.5%;
  background-color: ${THEME.GRAY};
  position: absolute; //부모요소는 history의 index.tsx의 Container

  top: 7rem;
  left: 25rem;
  right: 0;

  z-index: 10;


  ${(props) =>
    props.isMobile &&
    css`
      top: 3rem;
      left: 3rem;
      right: 0;
      }
    `}
}
`;

export const ScrollProgress= styled.div<{ isMobile: boolean }>`{
  width: 5px;
  height: 94.5%;
  overflow: hidden;
  background-color: ${THEME.ORANGE};
  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  z-index: 10;
  

}
`;

// export const ScrollProgressBar= styled.div`{
//   width: 4px;
//   height: 50%;
//   background-color: ${THEME.GRAY};
//   position: fixed;

//   top: 250px; 
//   left: 180px;
//   right: 0;

//   z-index: 10;

//   }
// }
// `;

// export const ScrollProgress= styled.div`{
//   width: 4px;
//   height: 50%;
//   overflow: hidden;
//   background-color: ${THEME.ORANGE};
//   position: fixed;

//   top: 250px;
//   left: 180px;
//   right: 0;

//   z-index: 10;
//   }
// }
// `;



// export const ScrollProgressBar= styled.div`{
//   width: 100%;
//   height: 4px;
//   background-color: ${THEME.LIGHT_BLACK};
//   position: fixed;

//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 10;

//   }
// }
// `;

// export const ScrollProgress= styled.div`{
//   width: 100%;
//   height: 4px;
//   background-color: ${THEME.ORANGE};
//   position: fixed;

//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 10;
//   }
// }
// `;