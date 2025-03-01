import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../Data/DataBase";
const HomeAll: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="  w-[1400px]">
        <hr/>
                <Slider {...settings}>
                    {data.map((category, index) => (
                     <div key={index} className="flex flex-col items-center">
                     <img src={category.url} className="w-[50px] object-cover" alt={category.label} />
                     <p className="mt-2 text-center">{category.label}</p>
                   </div>
                   
                    ))}
                </Slider>
        <hr/>

            </div>
            

        </>
    );
};



export default HomeAll;
