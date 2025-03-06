import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataBase } from "../Data/DataBase";

const TopHeader = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showLanguages, setShowLanguages] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md w-full">

      <Link to="/" className="flex items-center">
        <img
          src="https://amaranoc.am/images/logo.svg"
          alt="Logo"
          className="h-[40px] md:h-[50px]"
        />
      </Link>

     <nav className="hidden md:flex gap-6 text-lg">
        <Link to="/" className="hover:text-blue-500">Գլխավոր</Link>
        <Link to="/discount" className="hover:text-blue-500">Զեղչեր</Link>
        <Link to="/services" className="hover:text-blue-500">Ծառայություններ</Link>
        <Link to="/about" className="hover:text-blue-500">Մեր մասին</Link>
      </nav>

      <div className="flex items-center gap-4 relative">
        <i
          className="fa fa-globe text-2xl cursor-pointer"
          onClick={() => setShowLanguages(!showLanguages)}
        ></i>
        <Link to="/login">
          <i className="fa fa-user text-2xl cursor-pointer"></i>
        </Link>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {showLanguages && (
        <div className="absolute top-12 right-4 bg-white shadow-md rounded-md p-2 w-[150px] z-50">
          <ul className="text-black">
            <li className="cursor-pointer hover:bg-gray-200 p-1">🇦🇲 Հայերեն</li>
            <li className="cursor-pointer hover:bg-gray-200 p-1">🇷🇺 Русский</li>
            <li className="cursor-pointer hover:bg-gray-200 p-1">English</li>
          </ul>
        </div>
      )}

      <div className="hidden md:flex gap-2 relative items-center">
        <input
          type="text"
          placeholder="Որոնում"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-2 rounded-md px-2 py-1 w-[200px]"
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-md"
          onClick={handleSearch}
        >
          Որոնել
        </button>
      </div>

      
      {menuOpen && (
        <nav className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 w-[200px] flex flex-col gap-4 z-50 md:hidden">
          <Link to="/" className="hover:text-blue-500">Գլխավոր</Link>
          <Link to="/discount" className="hover:text-blue-500">Զեղչեր</Link>
          <Link to="/services" className="hover:text-blue-500">Ծառայություններ</Link>
          <Link to="/about" className="hover:text-blue-500">Մեր մասին</Link>
        </nav>
      )}
    </header>
  );
};

export default TopHeader;