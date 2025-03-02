import React, { useState } from "react";
import Filter from "../Filter/Filter";
import HomeAll from "../Home/HomeAll";
import Map from "../Map/Map";
import BestOffers from "../OfferDetails/BestOffers";
import Regular from "../RegularDetails/Regular";
import Post from "../Post/Post";
import Footer from "../Footer/Footer";
import TopHeader from "../Header/TopHeader";

const BodyAll = () => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]); // ✅ Ավելացնենք

  return (
    <>
    <TopHeader/>
    <div className="flex justify-evenly mt-[60px]">
      <Filter
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        selectedRegions={selectedRegions}
        setSelectedRegions={setSelectedRegions} // ✅ Ավելացվեց
      />
      <div>
        <Map />
        <div>
          <HomeAll />
        </div>
        <div className="mt-[50px]">
          <BestOffers
            minPrice={minPrice}
            maxPrice={maxPrice}
            selectedRegions={selectedRegions}
          />
          <Regular minPrice={minPrice}
            maxPrice={maxPrice}
            selectedRegions={selectedRegions} />
        </div>
      </div>
    </div>
      <Post/>
      <Footer/>
      </>
  );
};

export default BodyAll;
