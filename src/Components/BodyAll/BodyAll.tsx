import React from 'react'
import Filter from '../Filter/Filter'
import HomeAll from '../Home/HomeAll'
import Map from '../Map/Map'
import BestOffers from '../OfferDetails/BestOffers'


const BodyAll = () => {
    return (
        <>
            <div className="flex justify-evenly mt-[60px]">
                <Filter />
                <div>
                    <Map />
                    <div>
                        <HomeAll />
                    </div>
                    <div className='mt-[50px]'>
                        <BestOffers />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyAll