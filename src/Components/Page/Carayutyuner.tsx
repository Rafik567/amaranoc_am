import React from "react";
import TopHeader from "../Header/TopHeader";
import { data, dataCara, dataTesak } from "../Data/DataBase";
import Post from "../BodyAll/Post";
import Footer from "../Footer/Footer";

interface ItemCara {
  id: number;
  url: string;
  text: string;
}

interface ItemTesak {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
}

const Carayutyuner: React.FC = () => {
  return (
    <>
    <TopHeader/>
      <hr className="mt-[50px]" />
      <div className="flex justify-evenly mt-10 flex-wrap gap-1 sm:gap-12">
        {dataCara.map((el: ItemCara) => (
          <div
            key={el.id}
            className="flex flex-col items-center  w-20 sm:w-24 md:w-20"
          >
            <img
              src={el.url}
              alt={el.text}
              className="image rounded-lg  w-20 h-20 sm:w-10 sm:h-10 md:w-10 md:h-10 cursor-pointer"
            />

            <p className="text-black text-center mt-2 sm:text-sm md:text-base">
              {el.text}
            </p>
          </div>
        ))}
        <i
          className="fa fa-arrow-right mt-9 h-10 rounded-2xl border-2 border-gray-300 p-1"
          style={{ fontSize: "24px" }}
        ></i>
      </div>
      <hr />
      <div className="flex justify-center mt-[50px] flex-wrap gap-[15px] sm:gap-[25px] ">
        {dataTesak.map((el: ItemTesak) => (
          <div
            key={el.id}
            className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <img
              src={el.image}
              className="rounded-[10px]   object-cover "
              alt={el.title}
            />
            <p className="text-[black] mt-[5px] sm:text-[16px] md:text-[18px] font-bold">
              {el.title}
            </p>

            <p className="text-[black] mt-[10px] sm:text-[14px] md:text-[16px]">
              {el.description}
            </p>
            <strong className="text-[black] mt-[10px] sm:text-[14px] md:text-[16px]">
              {el.price}
            </strong>
          </div>
        ))}
      </div>

      <Post />
    </>
  );
};

export default Carayutyuner;
