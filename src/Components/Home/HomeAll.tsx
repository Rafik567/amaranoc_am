import React from "react";

const HomeAll: React.FC = () => {
  return (
    <>
      <div className="border-t border-b border-secondary/5 pt-3">
        <div className="h-[80px] overflow-hidden relative">
          <div className="hidden max-sm:hidden absolute z-20 left-0 top-1/2 -translate-y-1/2 flex items-center justify-start bg-gradient-to-r from-white from-70% to-100% to-white/20 self-stretch h-[calc(100%+2px)] !w-[52px] shrink-0">
            <button
              type="button"
              className="w-10 h-10 rounded-full border flex justify-center items-center p-2 border-secondary-extra-light"
              disabled
            >
              <div
                className="bg-secondary"
                style={{
                  maskImage: "url(/images/arrow-left.svg)",
                  maskRepeat: "no-repeat",
                  maskPosition: "center center",
                  maskSize: "cover",
                  width: "16px",
                  height: "16px",
                }}
              ></div>
            </button>
          </div>
          <div
            className="carousel snap-mandatory flex overflow-auto hide-scrollbar space-x-10"
            style={{ touchAction: "pan-x pan-y pinch-zoom" }}
          >
            {categories.map((category, index) => (
              <div className="carousel-item !w-max" key={index}>
                <div className="group cursor-pointer">
                  <div className="flex items-center justify-center flex-col space-y-2 min-w-max">
                    <div
                      className="bg-secondary"
                      style={{
                        maskImage: `url(${category.icon})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center center",
                        maskSize: "cover",
                        width: "40px",
                        height: "40px",
                      }}
                    ></div>
                    <p className="max-sm:text-[12px] text-[13px] max-sm:h-[17px] h-[18px] max-sm:leading-[16.8px] leading-[18.2px] text-secondary whitespace-nowrap">
                      {category.label}
                    </p>
                    <div className="w-8 h-[3px] rounded-[3px] duration-100 bg-transparent group-hover:bg-secondary/5"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const categories = [
  { label: "Առանձնատներ", icon: "https://api.amaranoc.am/home.svg" },
  { label: "Frame houses", icon: "https://api.amaranoc.am/frame_house.svg" },
  { label: "Տնակներ", icon: "https://api.amaranoc.am/cabins.svg" },
  { label: "Փակ լողավազան", icon: "https://api.amaranoc.am/close_pool.svg" },
  { label: "Աղմուկից հեռու", icon: "https://api.amaranoc.am/far_from_noise.svg" },
  { label: "Շքեղ տեսարան", icon: "https://api.amaranoc.am/view.svg" },
  { label: "Պահանջված", icon: "https://api.amaranoc.am/nobel.svg" },
  { label: "Լճի ափին", icon: "https://api.amaranoc.am/along_lake.svg" },
  { label: "Գետի ափին", icon: "https://api.amaranoc.am/along_river.svg" },
  { label: "Տաղավար", icon: "https://api.amaranoc.am/pavilion.svg" },
  { label: "Հյուրանոցներ", icon: "https://api.amaranoc.am/hotel.svg" },
  { label: "Դիզայն", icon: "https://api.amaranoc.am/designed.svg" },
  { label: "Նոր", icon: "https://api.amaranoc.am/new.svg" },
  { label: "Բնակարաններ", icon: "https://api.amaranoc.am/house.svg" },
];

export default HomeAll;
