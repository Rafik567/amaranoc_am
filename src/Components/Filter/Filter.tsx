  import React, {useEffect, useState } from "react";
  import { dataRegion } from "../Data/DataBase";

  interface Region {
    name: string;
    count: number;
  }


  interface Currency {
    symbol: JSX.Element;
    id: string;
  }
  interface FilterProps {
    setMinPrice: React.Dispatch<React.SetStateAction<string>>;
    setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
    setSelectedRegions: React.Dispatch<React.SetStateAction<string[]>>;
    setMinPeople: React.Dispatch<React.SetStateAction<number>>; // ✅ Ավելացրինք
  }


  const currencies: Currency[] = [
    { id: "usd", symbol: <i className="fa fa-dollar" style={{ fontSize: "16px" }}></i> },
    { id: "eur", symbol: <i className="fa fa-euro" style={{ fontSize: "16px" }}></i> },
    { id: "rub", symbol: <i className="fa fa-ruble" style={{ fontSize: "16px" }}></i> },
  ];

  const Filter: React.FC<FilterProps> = ({  setMinPrice,
    setMaxPrice,
    selectedRegions,
    setSelectedRegions,
    setCount,
    setCount2,
    count,
    count2, }) => {
    const [localSelectedRegions, setLocalSelectedRegions] = useState<string[]>(selectedRegions);


    const [selected, setSelected] = useState<string>("Բոլորը");
    const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
    const handleRegionChange = (regionName: string) => {
      setLocalSelectedRegions((prevRegions) => {
        const newRegions = prevRegions.includes(regionName)
          ? prevRegions.filter((name) => name !== regionName) // Հանում ենք
          : [...prevRegions, regionName]; // Ավելացնում ենք
  
        console.log("Թարմացված տարածաշրջաններ:", newRegions);
        return newRegions;
      });
    };
    useEffect(() => {
      setSelectedRegions(localSelectedRegions);
    }, [localSelectedRegions]);
  

    return (
      <div className="w-[300px] flex flex-col space-y-4 lg:space-y-6 p-4 sm:p-6 lg:p-5 lg:rounded-2xl lg:border h-full overflow-y-auto lg:border-secondary-extra-light max-sm:pb-20">
        <div className="min-h-[160px]">
          <p className="text-secondary text-text3_bold sm:text-text2_bold">Տարածաշրջան</p>
          <div className="flex flex-col space-y-4 max-h-[160px] overflow-auto styled-scrollbar pr-2">
            {dataRegion.map((region) => (
              <div key={region.name} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-secondary/70 rounded-md"
                  checked={selectedRegions.includes(region.name)}
                  onChange={() => handleRegionChange(region.name)}
                />
                <span className="text-text3 text-secondary">{region.name}</span>
                <span className="text-text3 text-secondary/70">({region.count})</span>
              </div>
            ))}
          </div>
        </div>

        <hr />

        <div className="flex gap-[10px] w-full items-center">
          <p className="text-secondary text-text2">Արժեք</p>
          <div className="flex gap-[10px] items-center">
            {currencies.map((currency) => (
              <button
                key={currency.id}
                onClick={() => setSelectedCurrency(currency.id)}
                className="py-3 px-6 rounded-full flex justify-center items-center w-[34px] h-[34px] border transition-colors duration-300 "
              >
                {currency.symbol}
              </button>
            ))}
          </div>

        </div>
        <div className="flex items-center space-x-2">
          <label className="relative flex flex-col px-4 py-3 rounded-lg border border-secondary-extra-light">
            <input
              className="w-full h-[24px] bg-transparent text-secondary text-xs md:text-text3 outline-none"
              placeholder="Սկսած"

              onChange={(e) => setMinPrice(e.target.value || "0")}
            />
          </label>
          <div className="w-2 h-px bg-secondary"></div>
          <label className="relative flex flex-col px-4 py-3 rounded-lg border border-secondary-extra-light">
            <input
              className="w-full h-[24px] bg-transparent text-secondary text-xs md:text-text3 outline-none"
              placeholder="Մինչև"
              onChange={(e) => setMaxPrice(e.target.value || "999999")}
            />
          </label>
        </div>

        <hr />

        <div>
          <p className="text-secondary text-text3_bold sm:text-text2_bold">Մարդկանց թույլատրելի քանակ</p>
          <div className="flex gap-[10px] mt-[10px]">
            <button
              className="bg-gray-300 w-[60px] h-[40px] rounded-[20px] flex justify-center items-center"
              onClick={() => setCount((prev) => Math.max(0, prev - 1))}
            >
              -
            </button>
            <p className="border border-gray-400 rounded-md px-5 py-2 w-[50px] text-center">{count}</p>
              <button
                className="bg-gray-300 w-[60px] h-[40px] rounded-[20px] flex justify-center items-center"
                onClick={() => setCount((prev) => prev + 1)}
              >
              +
            </button>
          </div>
        </div>

        <hr />

        <div className="flex flex-col space-y-3">
          <p className="text-secondary text-text3_bold sm:text-text2_bold">Գիշերակացի առկայություն</p>
          <div className="flex flex-wrap gap-2">
            {["Բոլորը", "Այո", "Ոչ"].map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`py-3 px-6 rounded-[40px] overflow-hidden transition-colors duration-300 border ${selected === option
                    ? "bg-black text-white border-black"
                    : "text-secondary border-secondary-extra-light hover:bg-gray"
                  }`}
              >
                <span className={`text-text3 font-montserrat ${selected === option ? "text-white" : "text-secondary-light"}`}>
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-secondary text-text3_bold sm:text-text2_bold">Մարդկանց թույլատրելի քանակը գիշերակացով</p>
          <div className="flex gap-[10px] mt-[10px]">
            <button
              className="bg-gray-300 w-[60px] h-[40px] rounded-[20px] flex justify-center items-center"
              onClick={() => setCount2((prev) => Math.max(0, prev - 1))}
            >
              -
            </button>
            <p className="border border-gray-400 rounded-md px-5 py-2 w-[50px] text-center">{count2}</p>
            <button
              className="bg-gray-300 w-[60px] h-[40px] rounded-[20px] flex justify-center items-center"
              onClick={() => setCount2((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Filter;
