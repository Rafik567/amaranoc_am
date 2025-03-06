import React from 'react'
import BestOffers from '../OfferDetails/BestOffers'

const Order = () => {
  return (
    <div>
      <div
        className="flex flex-col bg-orange-400 w-[600px] items-center p-4 sm:p-6 md-max:p-10 space-y-6 sm:space-y-10 rounded-2xl shadow-cardShadow"
      >
        <div className="relative w-[236px] h-16 sm:w-[295px] sm:h-20">
        <img
          src="https://amaranoc.am/images/logo.svg"
          alt="Logo"
          className="h-[40px] md:h-[50px]"
        
            style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
          />
        </div>
        <div className="grid grid-cols-3 gap-1 sm:gap-2">
          <button className="border border-white rounded-[40px] xs:py-2 xs:px-4 py-1 px-2 w-[80px] xs:w-[100px] sm:w-[120px] hover:bg-white/10 transition-all">
            <div className="flex justify-center gap-x-1 items-center text-text2 xs:text-text1 sm:text-md md-max:text-xl text-white">
              <span className="font-anton">50,000</span>
              <span className="font-montserrat font-semibold">֏</span>
            </div>
          </button>
          <button className="border border-white rounded-[40px] xs:py-2 xs:px-4 py-1 px-2 w-[80px] xs:w-[100px] sm:w-[120px] hover:bg-white/10 transition-all">
            <div className="flex justify-center gap-x-1 items-center text-text2 xs:text-text1 sm:text-md md-max:text-xl text-white">
              <span className="font-anton">60,000</span>
              <span className="font-montserrat font-semibold">֏</span>
            </div>
          </button>
          <button className="border border-white rounded-[40px] xs:py-2 xs:px-4 py-1 px-2 w-[80px] xs:w-[100px] sm:w-[120px] hover:bg-white/10 transition-all">
            <div className="flex justify-center gap-x-1 items-center text-text2 xs:text-text1 sm:text-md md-max:text-xl text-white">
              <span className="font-anton">70,000</span>
              <span className="font-montserrat font-semibold">֏</span>
            </div>
          </button>
          <button className="border border-white rounded-[40px] xs:py-2 xs:px-4 py-1 px-2 w-[80px] xs:w-[100px] sm:w-[120px] hover:bg-white/10 transition-all">
            <div className="flex justify-center gap-x-1 items-center text-text2 xs:text-text1 sm:text-md md-max:text-xl text-white">
              <span className="font-anton">80,000</span>
              <span className="font-montserrat font-semibold">֏</span>
            </div>
          </button>
          <button className="border border-white rounded-[40px] xs:py-2 xs:px-4 py-1 px-2 w-[80px] xs:w-[100px] sm:w-[120px] hover:bg-white/10 transition-all">
            <div className="flex justify-center gap-x-1 items-center text-text2 xs:text-text1 sm:text-md md-max:text-xl text-white">
              <span className="font-anton">90,000</span>
              <span className="font-montserrat font-semibold">֏</span>
            </div>
          </button>
          <button className="border border-white rounded-[40px] xs:py-2 xs:px-4 py-1 px-2 w-[80px] xs:w-[100px] sm:w-[120px] hover:bg-white/10 transition-all">
            <div className="flex justify-center gap-x-1 items-center text-text2 xs:text-text1 sm:text-md md-max:text-xl text-white">
              <span className="font-anton">100,000</span>
              <span className="font-montserrat font-semibold">֏</span>
            </div>
          </button>
        </div>
        <button className="py-3 px-6 relative rounded-[40px] overflow-hidden transition-colors duration-300 text-white bg-primary border border-primary hover:border-primary-bold hover:bg-primary-bold !px-5 !py-2 xs:!px-6 xs:!py-3 pointer-events-none">
          <p className="text-white text-xs font-bold sm:text-text3_bold">Պատվիրել</p>
        </button>
      </div>
      
    </div>
  )
}

export default Order
