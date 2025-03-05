import React, { useState } from "react";
import { Link } from "react-router-dom";
import {dataBase} from '../Data/DataBase'
interface TopHeaderProps {
  onSearch: (query: string) => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [showLanguages, setShowLanguages] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(dataBase);


  const handleSearch = () => {
    onSearch(searchQuery);  // Այստեղ փոխանցում ենք searchQuery-ը
  };



  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly px-4 py-3 w-full bg-white">
      <div className="flex items-center">
      <Link to="/" className="hover:text-blue-500">
        <img
          src="https://amaranoc.am/images/logo.svg"
          alt="Logo"
          className="h-[40px] md:h-[50px]"
        />
        </Link>
      </div>

      <div className="hidden md:flex gap-8 text-lg">
        <Link to="/" className="hover:text-blue-500">
          Գլխավոր
        </Link>
        <Link to="/discount" className="hover:text-blue-500 cursor-pointer">
          Զեղչեր
        </Link>
        <Link to="/services" className="hover:text-blue-500">
          Ծառայություններ
        </Link>
        <Link to="/about" className="hover:text-blue-500 cursor-pointer">
          Մեր մասին
        </Link>
      </div>

      <div className="flex items-center gap-6 relative">
   
        <i
          className="fa fa-globe text-2xl cursor-pointer"
          onClick={() => setShowLanguages((prev) => !prev)}
        ></i>

        <Link to="/login">
          <i className="fa fa-user text-2xl cursor-pointer"></i>
        </Link>

        {showLanguages && (
          <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-2 w-[150px] z-50">
            <ul className="text-black">
              <li className="cursor-pointer hover:bg-gray-200 p-1">
                🇦🇲 Հայերեն
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-1">
                🇷🇺 Русский
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-1">English</li>
            </ul>
            <button
              className="mt-2 w-full bg-gray-300 rounded-md p-1 hover:bg-gray-400"
              onClick={() => setShowLanguages(false)}
            >
              Փակել
            </button>
          </div>
        )}
      </div>

      <div className="hidden md:flex relative">
      <input
          type="text"
          placeholder="Որոնել ըստ նկարագրության..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  // Փոփոխվում է searchQuery-ը
        />
        <button onClick={handleSearch}>Որոնել</button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Ընտրած ապրանքներ</h2>
            <p>Բասկետը դատարկ է։</p>
            <button
              className="mt-4 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              Փակել
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHeader;