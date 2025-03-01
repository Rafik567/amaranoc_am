import React from "react";

interface Region {
  name: string;
  count: number;
}

interface Currency {
  symbol: string;
  active: boolean;
}

const regions: Region[] = [
  { name: "Դիլիջան", count: 77 },
  { name: "Ծաղկաձոր", count: 54 },
  { name: "Ձորաղբյուր", count: 14 },
  { name: "Աշտարակ", count: 14 },
  { name: "Երևան", count: 13 },
  { name: "Գառնի", count: 11 },
  { name: "Արզնի", count: 10 },
  { name: "Ջրվեժ", count: 10 },
  { name: "Նոր Հաճն", count: 8 },
  { name: "Աբովյան", count: 7 },
  { name: "Քասախ", count: 6 },
  { name: "Պտղնի", count: 6 },
  { name: "Զովունի", count: 6 },
  { name: "Սևան", count: 6 },
];
const currencies: { symbol: JSX.Element; active: boolean }[] = [
  { symbol: <></>, active: true },
  { symbol: <i className="fa fa-dollar" style={{ fontSize: "16px" }}></i>, active: false },
  { symbol: <i className="fa fa-euro" style={{ fontSize: "16px" }}></i>, active: false },
  { symbol: <i className="fa fa-ruble" style={{ fontSize: "16px" }}></i>, active: false },
];

const Filter: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-4 lg:space-y-6 p-4 sm:p-6 lg:p-5 lg:rounded-2xl lg:border h-full overflow-y-auto lg:border-secondary-extra-light max-sm:pb-20">
      
    

      <div className="min-h-[160px]">
        <div className="flex flex-col space-y-4">
          <p className="text-secondary text-text3_bold sm:text-text2_bold">
            Տարածաշրջան
          </p>
          <div className="flex flex-col space-y-4 max-h-[160px] overflow-auto styled-scrollbar pr-2">
            {regions.map((region) => (
              <div key={region.name} className="flex gap-2 items-center">
                <input type="checkbox" className="w-4 h-4 border border-secondary/70 rounded-md" />
                <span className="text-text3 text-secondary">{region.name}</span>
                <span className="text-text3 text-secondary/70">({region.count})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full  items-center">
        <p className="text-secondary text-text2">Արժեք</p>
        <div className="flex items-center space-x-2">
          {currencies.map((currency) => (
            <button
              key={currency.symbol}
              className={`py-3 px-6 relative rounded-full overflow-hidden transition-colors duration-300 flex justify-center items-center w-[34px] h-[34px] border ${
                currency.active
                  ? "text-white bg-secondary border-secondary"
                  : "text-secondary border-secondary-extra-light hover:bg-gray"
              }`}
            >
              <p className="text-xs xs:text-text3 md:text-text2">{currency.symbol}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
