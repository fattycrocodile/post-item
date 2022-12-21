import React from "react";
import PostItem from "./PostItem";
const PostList = () => {
  return (
    <div className="bg-white w-full">
      <div className="flex mt-[29px]">
        <div className="w-[478px] mx-auto border-[1px] border-solid border-color-[#D9D7D7] rounded-[6px] flex">
          <button className="w-[210px] bg-[#2B9AF3] pt-[16px] pb-[19px] text-white font-sans not-italic font-semibold text-[16px] leading-[22px] rounded-l-[10px] box-border">
            All post
          </button>
          <div className="pt-[16px] pb-[19px] pl-[46px] font-sans not-italic font-semibold text-[16px] leading-[22px] text-[#292929]">
            Following post
          </div>
        </div>
      </div>
      <div className="ml-[29px] mr-[10px] mt-[22px]">
        <div className="font-sans not-italic font-semibold text-[24px] leading-[36px] text-[#262626]">
          What are you looking for?
        </div>
        <div className="flex space-x-[28px] mt-[18px]">
          <div className="relative">
            <div className="absolute inset-y-3 left-[-4px] items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              className="box-border border-[1px] border-solid border-color-[#D9D7D7] outline-0 rounded-[6px] w-[390px] pt-[11px] pb-[14px] focus:border-blue-500 pl-[30px] font-sans not-italic font-normal text-[15px] leading-[20px] text-[#9A9A9A]"
              placeholder="Search by a tilte, description or organization"
            ></input>
          </div>
          <div className="relative">
            <div className="absolute inset-y-3 left-[-4px] items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              className="box-border border-[1px] border-solid border-color-[#D9D7D7] outline-0 rounded-[6px] w-[293px] pt-[11px] pb-[14px] focus:border-blue-500 pl-[30px] font-sans not-italic font-normal text-[15px] leading-[20px] text-[#9A9A9A]"
              placeholder="Search by a city, state or Zipcode"
            ></input>
          </div>
          <div className="relative">
            <input
              className="box-border border-[1px] border-solid border-color-[#D9D7D7] outline-0 rounded-[6px] w-[97px] pt-[11px] pb-[14px] focus:border-blue-500 pl-[30px] font-sans not-italic font-normal text-[15px] leading-[20px] text-[#9A9A9A]"
              placeholder="Tags"
            ></input>
          </div>
          <div className="relative">
            <select
              id="countries"
              defaultValue={1}
              className="box-border border-[1px] border-solid border-color-[#D9D7D7] outline-0 rounded-[6px] w-[140px] pt-[11px] pb-[14px] focus:border-blue-500 pl-[30px] font-sans not-italic font-normal text-[15px] leading-[20px] text-[#9A9A9A]"
            >
              <option value="CA">Canada</option>
              <option value="US">United States</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="relative">
            <select
              id="countries"
              defaultValue={1}
              className="box-border border-[1px] border-solid border-color-[#D9D7D7] outline-0 rounded-[6px] w-[140px] pt-[11px] pb-[14px] focus:border-blue-500 pl-[30px] font-sans not-italic font-normal text-[15px] leading-[20px] text-[#9A9A9A]"
            >
              <option value="CA">Canada</option>
              <option value="US">United States</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </div>
      <div className="ml-[19px] mr-[13px] mt-[19px] border-[1px] border-solid border-color-[#E9E9E9] rounded-[15px]">
        <PostItem />
        <div className="flex justify-end mr-[9px] mb-[12px] mt-[12px]">
          <div className="font-sans not-italic font-medium text-[15px] leading-[22px] text-black">
            32 more urgent requestes posted.
          </div>
          <a className="font-sans not-italic font-medium text-[15px] leading-[22px] text-[#2B9AF3] underline">
            View all
          </a>
        </div>
      </div>
      <div className="ml-[19px] mr-[13px] mb-[19px] mt-[19px] pb-[12px] border-[1px] border-solid border-color-[#E9E9E9] rounded-[15px]">
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};

export default PostList;
