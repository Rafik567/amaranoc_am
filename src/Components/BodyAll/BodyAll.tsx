import React, {useState} from 'react'
import Filter from '../Filter/Filter'
import HomeAll from '../Home/HomeAll'
import Map from '../Map/Map'
import BestOffers from '../OfferDetails/BestOffers'

const BodyAll = () => {
    const [minPrice, setMinPrice] = useState(""); 
    const [maxPrice, setMaxPrice] = useState(""); 
  
    return (
      <>
        <div className="flex justify-evenly mt-[60px]">
          <Filter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
          <div>
            <Map />
            <div>
              <HomeAll />
            </div>
            <div className="mt-[50px]">
              {/* Այստեղ setMinPrice-ի փոխարեն minPrice պետք է փոխանցես */}
              <BestOffers minPrice={minPrice} maxPrice={maxPrice} />
            </div> 
          </div>
        </div>
      </>
    );
  };
  

export default BodyAll