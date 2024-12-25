import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = ({ cmp }) => {
  return (
    <div className='w-full lg:max-w-[85%] m-auto h-auto flex gap-4 items-center justify-between bg-bdDarkLight shadow-md rounded'>
      <div className='w-3/4 md:w-2/4 flex gap-2 items-center p-2 md:p-3'>
        <Link to={`/company-profile/${cmp?._id}`}>
          <img
            src={cmp?.profileUrl}
            alt={cmp?.name}
            className='w-10 md:w-14 h-10 md:h-14 rounded'
          />
        </Link>
        <div className='h-full flex flex-col'>
          <Link
            to={`/company-profile/${cmp?._id}`}
            className='text-base md:text-lg font-semibold text-gray-600 truncate'
          >
            {cmp?.name}
          </Link>
          <span className='text-sm text-blue-600'>{cmp?.email}</span>
        </div>
      </div>

      <div className='hidden w-1/4 h-full md:flex items-center'>
        <p className='text-base text-start'>{cmp?.location}</p>
      </div>

      <div className='w-1/4 h-full flex flex-col items-center'>
        <p className='text-blue-600 font-semibold'>{cmp?.jobPosts?.length}</p>
        <span className='text-xs md:base font-normal text-gray-600'>
          Jobs Posted
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;