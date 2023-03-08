import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../data1";

export default function Product_carousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
    <div className="m-16 ml-28 font-Poppins ">
        <h5 className="text-light_green text-6xl font-medium ">Trending Products</h5>
    </div>
    <div className="App w-[80%] m-auto mt-12 mb-20">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card  text-white h-96 border-2 border-solid border-white bg-black rounded-lg overflow-hidden">
            <div className="card-top">
              <img
                className="w-full h-full object-cover"
                src={item.linkImg}
                alt={item.title}
              />
              <h3 className="text-base pl-2 pt-4 pb-1 mt-2 mb-5">
                {item.title}
              </h3>
            </div>
            <div className="card-bottom pl-2 ">
              <h3 className="pb-1">{item.price}</h3>
              <p className="relative border-b-[3px] border-solid border-indigo-500 ">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
}
