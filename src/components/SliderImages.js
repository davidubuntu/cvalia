import React, { createRef } from "react"
import styled from "styled-components"
import media from "../styles/media"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const customSlider = createRef()

const CustomSlideButton = styled.div`
  display: none;
  .svg-inline--fa.fa-w-10 {
    color: #676665;
    height: 20px;
    width: 20px;
  }
  :before {
    font-size: 0;
  }
  ${media.tablet`
   display: block;
   right: ${props => props.right && "-6rem"};
   left: ${props => props.left && "-6rem"};
 `};
  ${media.laptopL`
    display: block;
    right: ${props => props.right && "-10rem"};
    left: ${props => props.left && "-10rem"};
 `};
`

const SliderButton = styled.div`
  display: none;
  position: absolute;

  ${media.tablet`
    display: block;
    right: ${props => props.right && "3rem"};
    left: ${props => props.left && "3rem"};
  `};
  ${media.laptopL`
    display: block;
    right: ${props => props.right && "10rem"};
    left: ${props => props.left && "10rem"};
  `};
`

const SliderBox = styled.div`
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-dots li {
    margin: 0;
    height: 10px;
    width: 10px;
  }
  ${media.mobileM`
    .slick-dots li {
    margin: 0 0.5px;
    height: 12px;
    width: 12px;
    }
  `};
  ${media.mobileL`
    .slick-dots li {
    margin: 0 1px;
    height: 12px;
    width: 12px;
    }
  `};

  ${media.tablet`
    .slick-dots li {
      margin: 0 3px;
      height: 15px;
      width: 15px;
    }
  `};

  ${media.laptopL`
    .slick-dots li {
      margin: 0 5px;
      height: 15px;
      width: 15px;
    }
  `};
`

const NextArrow = props => {
  const { className, onClick } = props
  return (
    <CustomSlideButton className={className} onClick={onClick} right>
      <FontAwesomeIcon icon={faChevronRight} />
    </CustomSlideButton>
  )
}
const PrevArrow = props => {
  const { className, onClick } = props
  return (
    <CustomSlideButton className={className} onClick={onClick} left>
      <FontAwesomeIcon icon={faChevronLeft} />
    </CustomSlideButton>
  )
}

const SliderImages = ({ children }, props) => {
  const next = () => {
    customSlider.current.slickNext()
  }
  const previous = () => {
    customSlider.current.slickPrev()
  }

  const settings = {
    dots: true,
    fade: false,
    speed: 500,
    infinite: true,
    autoplay: false,
    lazyLoad: true,
    accessibility: false,
    draggable: true,
    centerMode: false,
    arrows: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <SliderBox>
      <Slider {...settings} className="overflow-hidden" ref={customSlider}>
        {children}
      </Slider>
      {/* <SliderButton onClick={() => previous()} left>
        <FontAwesomeIcon icon={faChevronLeft} />
      </SliderButton>
      <SliderButton onClick={() => next()} right>
        <FontAwesomeIcon icon={faChevronRight} />
      </SliderButton> */}
    </SliderBox>
  )
}

export default SliderImages
