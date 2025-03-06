import React, { useState } from 'react';
import Post from '../Post/Post';
import BestOffers from '../OfferDetails/BestOffers';
import Order from './Order';
import Footer from '../Footer/Footer';

const Prize: React.FC = () => {
  // Սահմանում ենք նախնական արժեքները
  const [minPrice] = useState<string>("0");
  const [maxPrice] = useState<string>("1000000");
  const [selectedRegions] = useState<string[]>([]);
  const [count] = useState<number>(0);
  const [searchQuery] = useState<string>("");
  const [selectedCategory] = useState<string>("");

  return (
    <>
      <div className='flex justify-center items-center space-x-4'>
        <div
          className="mt-[50px] space-y-4 sm:space-y-6 bg-gray-light hidden sm:block py-6 px-4 sm:py-10 sm:px-6 md-max:px-10 rounded-2xl shadow-lg 
                      shadow-[0px_15px_50px_rgba(255,255,255,0.8)] bg-gray-100 transition-all duration-300 w-[600px]"
        >
          <div className="pb-3 sm:pb-2 border-b border-b-primary">
            <p className="text-h4 sm:text-h3 md-max:text-h2 font-armHmk text-secondary uppercase 
                        hover:text-orange-500 transition-all duration-300">
              Պատվիրի՛ր <span className="text-orange-700">Նվեր քարտ</span> <br className="max-md-max:hidden" />
              Քո կամ ընկերներիդ համար
            </p>
          </div>
          <span className="text-secondary text-text3 sm:text-text2">
            Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում ես <br /> քո հաջորդ արձակուրդը՝ ընկերներիդ կամ ընտանիքիդ անդամների <br /> հետ,
            մեր զեղչային քարտերը առաջարկում են անգերազանցելի <br /> խնայողություններ ամառանոցների և ծառայությունների լայն <br /> տեսականիով։
            Ընտրիր զեղչի չափը քարտի վրա։
          </span>
        </div>
        <div className='mt-[50px]'>
          <Order />
        </div>
      </div>
      <div className="mt-[20px] flex justify-center items-center">
        <strong className="px-5 xs:px-10 md:px-20 w-max text-[26px] xs:text-h4 sm:text-h3 md-max:text-h2 text-secondary !font-armHmk z-[1]">
          Թեժ առաջարկներ
        </strong>
      </div>
      <BestOffers
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedRegions={selectedRegions}
        count={count}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
      <Post/>
      <Footer/>
    </>
  );
};

export default Prize;
