import React, { useState } from "react";
import Filter from "../Filter/Filter";
// import HomeAll from "../Home/HomeAll";
import Map from "../Map/Map";
import BestOffers from "../OfferDetails/BestOffers";
import Regular from "../RegularDetails/Regular";
import Post from "../Post/Post";
import Footer from "../Footer/Footer";
import TopHeader from "../Header/TopHeader";
import HomeAll from "../Home/HomeAll"
const BodyAll = () => {
  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("999999");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);  // Փոխանցում ենք searchQuery-ը
  };

  return (
    <>
      <TopHeader onSearch={handleSearch} />  {/* Փոխանցում ենք onSearch */}
      <div className="flex justify-evenly mt-[60px]">
        <Filter
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
          setCount={setCount}
          setCount2={setCount2}
          count={count}
          count2={count2}
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
              count={count}
              searchQuery={searchQuery}  
            />
            <Regular
              minPrice={minPrice}
              maxPrice={maxPrice}
              selectedRegions={selectedRegions}
              count={count}
              searchQuery={searchQuery}  
            />
          </div>
        </div>
      </div>
      <Post />
      <Footer />
    </>
  );
};


export default BodyAll;
