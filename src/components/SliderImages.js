import React from "react"
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

const CustomSlideButton = styled.div`
  display: none;
  .svg-inline--fa.fa-w-10 {
    color: #41413c;
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
    // slider.slickNext()
  }
  const previous = () => {
    // slider.slickPrev()
  }

  const settings = {
    dots: true,
    fade: false,
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
    <Slider {...settings} className="overflow-hidden">
      {children}
    </Slider>
  )
}

export default SliderImages
