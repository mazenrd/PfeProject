import React, { useState } from "react";

import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import RenderCard from "shared/components/RenderCard";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { renders } from "utils/mocks";
import "./styles.scss";

const Carousel = ({ rendertype }) => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="content">
      <Slider ref={setSliderRef} {...sliderSettings}>
        {renders[rendertype].map((item, index) => (
          <RenderCard item={item} key={index} />
        ))}
      </Slider>
      <button className="carousel-button" onClick={sliderRef?.slickPrev}>
        <FaChevronLeft />
      </button>
      <button className="carousel-button" onClick={sliderRef?.slickNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};
Carousel.propTypes = {
  rendertype: PropTypes.string,
};
export default Carousel;
