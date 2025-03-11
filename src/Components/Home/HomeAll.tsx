import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../Data/DataBase";

const HomeAll: React.FC<{ setSelectedCategory: (category: string) => void }> = ({ setSelectedCategory }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        <div className="max-w-[1400px] hidden sm:block mx-auto px-4">
            <hr className="my-4" />
            <Slider {...settings}>
                {data.map((category, index) => (
                    <div key={index} className="flex  " onClick={() => setSelectedCategory(category.label)}>
                        <img src={category.url} className="w-[70px] sm:w-[50px] ml-[30px] object-cover" alt={category.label} />
                        <p className="mt-2  text-sm md:text-base">{category.label}</p>
                    </div>
                ))}
            </Slider>
            <hr className="my-4" />
        </div>
    );
};

export default HomeAll;
