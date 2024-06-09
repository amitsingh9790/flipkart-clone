import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import React from "react";
 
const ImageSlider = ({ images }) => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <br />
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img className="imgslider_img"
                                src={item.src}
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};
export default ImageSlider;