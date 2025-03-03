import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataBase } from "../Data/DataBase";

interface Offer {
  id: number;
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  qanak: string;
}

interface BestOffersProps {
  minPrice: string;
  maxPrice: string;
  selectedRegions: string[];
  count: number;
}

const BestOffers: React.FC<BestOffersProps> = ({ minPrice, maxPrice, selectedRegions, count }) => {
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>(dataBase); 

  useEffect(() => {
    console.log("Ֆիլտրի փոփոխություն:", { count });
  
    
    let newFilteredOffers = [...dataBase]; 
  
    if (count !== 0) {
      newFilteredOffers = newFilteredOffers.filter((offer) => {
        const offerCount = parseInt(offer.qanak, 10);
        console.log(`Offer: ${offer.description}, qanak: ${offer.qanak}, Parsed: ${offerCount}, Count: ${count}`);
  
        return count === offerCount;
      });
    }
  
    setFilteredOffers(newFilteredOffers);
  }, [count]); 
  
  return (
    <>
      <div className="flex items-center justify-between pb-3 border-b border-b-secondary-thin pr-4 md:pr-0">
        <p className="text-secondary text-text2_bold sm:text-text1">Լավագույն առաջարկներ</p>
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
              <div className="flex gap-[20px]">
                <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
                <div className="flex gap-[3px] mt-[5px]">
                  <i className="fa fa-user text-2xl cursor-pointer"></i>
                  <p>{offer.qanak}</p>
                </div>
              </div>
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

export default BestOffers;
