import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataBase2 } from "../Data/DataBase";

interface Offer {
  id: number;
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
}

interface RegularProps {
  minPrice: string;
  maxPrice: string;
  selectedRegions: string[];
}

const Regular: React.FC<RegularProps> = ({ minPrice, maxPrice, selectedRegions }) => {
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>(dataBase2);

  useEffect(() => {
    console.log("Ֆիլտրի փոփոխություն:", { minPrice, maxPrice, selectedRegions });

    const newFilteredOffers = dataBase2.filter((offer: Offer) => {
      const price = parseInt(offer.title.replace(/\D/g, ""), 10);
      const min = minPrice ? parseInt(minPrice, 10) : 0;
      const max = maxPrice ? parseInt(maxPrice, 10) : Infinity;
      const matchesRegion = selectedRegions.length === 0 || selectedRegions.some(region => offer.description.includes(region));
      
      return price >= min && price <= max && matchesRegion;
    });

    setFilteredOffers(newFilteredOffers);
  }, [minPrice, maxPrice, selectedRegions]);

  return (
    <>
      <div className="flex items-center justify-between pb-3 border-b border-b-secondary-thin pr-4 md:pr-0">
        <p className="text-secondary text-text2_bold sm:text-text1">Սովորական առաջարկներ</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredOffers.length > 0 ? (
          filteredOffers.map((offer: Offer) => (
            <div key={offer.id} className="border w-[500px] rounded-lg shadow-lg p-4">
              <div className="relative w-full h-48">
                <Slider dots infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
                  <img src={offer.image1} className="rounded-lg object-cover w-full h-48" alt={offer.description} />
                  <img src={offer.image2} className="rounded-lg object-cover w-full h-48" alt={offer.description} />
                  <img src={offer.image3} className="rounded-lg object-cover w-full h-48" alt={offer.description} />
                </Slider>
              </div>
              <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
            </div>
          ))
        ) : (
          <p>Չկան առաջարկներ</p>
        )}
      </div>
    </>
  );
};

export default Regular;
