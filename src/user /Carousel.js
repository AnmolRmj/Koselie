import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700, // 0.5 seconds
    };

    const navigate = useNavigate();

    const handleDetails = (item) => {
        navigate('/detail', { state: { item } }); // Pass item details to the route
    };

    return (
        <Slider {...settings}>
            {data?.map((item) => (
                <div key={item.id} className="p-4" onClick={() => handleDetails(item)}>
                    <div className="md:flex justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            height: "17rem",
                            width: "80rem"
                        }}>
                    </div>
                </div>
            ))}
        </Slider>
    );
};
