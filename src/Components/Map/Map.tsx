import React, { useState } from "react";

const Map = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const modalAction = () => {
    setIsModalOpen((prevState) => {
      const newState = !prevState;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  const calendarAction = () => {
    setIsCalendarOpen((prevState) => {
      const newState = !prevState;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  return (
    <div>
      <div className="pl-[70px] hidden sm:block flex flex-wrap gap-[20px]">
        <button
          className="w-[180px] sm:w-[150px] md:w-[180px] rounded-[40px] border-2 border-gray-300 p-[8px]"
          onClick={modalAction}
        >
          Քարտեզ
        </button>
        <i
          className="fa fa-calendar mt-[10px] sm:mt-[5px] rounded-[20px] border-2 border-gray-300 p-[8px] mb-[5px] text-[24px] sm:text-[20px]"
          onClick={calendarAction}
        ></i>
      </div>

      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-content w-[350px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] bg-white p-5 rounded-lg">
            <h2 className="ml-[85px] text-lg sm:text-sm md:text-lg">Այս պահին չեք կարող օգտվել այս ծառայությունից  </h2>
            <button
              onClick={modalAction}
              className="mt-4 ml-[110px] rounded-[20px] bg-red-500 text-white py-2 px-4 flex justify-center items-center"
            >
              Փակել
            </button>
          </div>
        </div>
      )}

      {isCalendarOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-content bg-white p-5 rounded-lg">
          <p>Այս պահին չեք կարող օգտվել այս ծառայությունից </p>
            <button
              onClick={calendarAction}
              className="mt-4 rounded-[20px] bg-red-500 text-white py-2 px-4"
            >
              Փակել
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
