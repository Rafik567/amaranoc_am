import React from "react";
import "../BodyAll/filter.css";
import Prize from "../BodyAll/Prize";
import TopHeader from "../Header/TopHeader";

interface Discount {
  id: number;
  percentage: string;
  title: string;
  description: string;
}

const discounts: Discount[] = [
  { id: 1, percentage: "-10%", title: "Զեղչ կախված ամրագրման օրերի քանակից", description: "Ստացիր 5-15% զեղչ կատարելով ամրագրում 3-ից մինչև 20 օր։" },
  { id: 2, percentage: "-10%", title: "Ամենահայտնի Reel-ը սոցիալական հարթակում", description: "Վիդեո տարբերակով ներկայացրու քո լավագույն օրերից մեկը amaranoc.am-ի առանձնատներից մեկում և ստացիր 15% զեղչ։" },
  { id: 3, percentage: "-5%", title: "Ավելացրու 5% զեղչ քո յուրաքանչյուր 3-րդ այցի համար", description: "Իրականացրու բազմաթիվ ամրագրումներ և յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ։" },
];

const DisCount: React.FC = () => {
  return (
    <>
    <TopHeader/>
      <div className="flex justify-center items-center mb-6">
        <strong className="px-5 xs:px-10 md:px-20 w-max text-[26px] xs:text-h4 sm:text-h3 md-max:text-h2 text-secondary !font-armHmk z-[1]">
          Հատուկ զեղչեր
        </strong>
      </div>
      <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center place-items-center">
        {discounts.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 shadow-cardShadow p-4 sm:p-6 space-y-4 sm:space-y-6 rounded-2xl text-center"
          >
            <strong className="font-anton text-[40px] leading-[48px] sm:text-6xl text-white">
              {item.percentage}
            </strong>
            <p className="text-white text-sm font-medium sm:text-text1">
              {item.title}
            </p>
            <div className="flex flex-col space-y-2">
              <p className="text-white text-sm font-medium">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Prize />
    </>
  );
};

export default DisCount;
