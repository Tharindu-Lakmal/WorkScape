import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import CustomButton from "./CustomButton";
import { popularSearch } from "../utils/data";
import { HeroImage } from "../assets";

const SearchInput = ({ placeholder, icon, value, setValue, styles }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clearInput = () => setValue("");

  return (
    <div className={`flex w-full md:w-1/3 items-center ${styles}`}>
      {icon}

      <input
        value={value}
        onChange={(e) => handleChange(e)}
        type='text'
        className='w-full md:w-80 p-2 outline-none text-bgDark bg-lightWhite-100 border-2 border-lightWhite-100 rounded-full text-base'
        placeholder={placeholder}
      />

      {/* <AiOutlineCloseCircle
        className='hidden ml-2 md:flex text-bgDark/90 text-xxl cursor-pointer'
        onClick={clearInput}
      /> */}
    </div>
  );
};

const Header = ({
  title,
  type,
  handleClick,
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
}) => {
  return (
    <div className='bg-hero bg-no-repeat bg-cover bg-center w-full sm:pt-[40px] pt-[60px]'>
      <div
        className={`w-[85%] mx-auto ${
          type ? "h-[500px]" : "h-[350px]"
        } flex items-center relative`}
      >
        <div className='w-full z-10'>
          <div className='mb-12 md:mb-16 text-center'>
            <p className='text-slate-700 leading-[42px] tracking-normal font-bold text-[38px] md:leading-normal md:text-6xl'>{title}</p>
          </div>

          <div className='md:w-full lg:w-fit lg:backdrop-blur-sm m-auto flex flex-col md:flex-row items-center 
          justify-center lg:justify-center gap-1 md:gap-3 lg:bg-lightWhite-100/10 px-2 md:px-5 py-2 md:py-5 
          md:shadow-2xl rounded-full'>
            <SearchInput
              placeholder='Job Title or Keywords'
              
              value={searchQuery}
              setValue={setSearchQuery}
              styles={"w-full"}
            />
            <SearchInput
              placeholder='Add Country or City'
              
              value={location}
              setValue={setLocation}
              styles={"hidden lg:flex"}
            />

            <div className="w-full md:w-[120px]">
              <CustomButton
                onClick={handleClick}
                title='Search'
                containerStyles={
                  "w-full  bg-brightBlue-100 text-lightWhite-100 px-5 py-3 rounded-full hover:bg-brightBlue-300 focus:potline-none flex-col items-center lg:mt-0 mt-2"
                }
              />
            </div>
        </div>

          {type && (
            <div className='w-full md:w-3/5 m-auto justify-center lg:1/2 flex flex-wrap gap-3 md:gap-3 py-10 md:py-14'>
              {popularSearch.map((search, index) => (
                <span
                  key={index}
                  className='outline outline-2 text-lightWhite-100 py-1 px-3 rounded-full text-sm md:text-base'
                >
                  {search}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* <div className='w-1/3 h-full absolute top-24 md:-top-6 lg:-top-14 right-16 2xl:right-[18rem]'>
          <img src={HeroImage} className='object-contain' />
        </div> */}
      </div>
    </div>
  );
};

export default Header;