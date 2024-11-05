import { useEffect, useRef } from "react";
import * as S from "styles/components/slick/style";
import Slider from "react-slick";
import { Alumni } from "constants/alumni";
import AOS from "aos";
import "aos/dist/aos.css";
function Slick() {
  useEffect(() => {
    AOS.init();
  });

  const AlumniList = Alumni;
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <S.MainContainer>
      <Slider {...settings}>
        {AlumniList.map(({ name, src }) => (
          <S.ElementWrapper key={name} data-aos="fade">
            <S.ImageWrapper>
              <img src={src.src} />
            </S.ImageWrapper>
          </S.ElementWrapper>
        ))}
      </Slider>
    </S.MainContainer>
  );
}

export default Slick;
