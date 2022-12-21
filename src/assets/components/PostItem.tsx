import React from "react";
import { ReactComponent as BigAvatar } from "../images/big_avatar.svg";
import { ReactComponent as Clock } from "../images/clock.svg";
import { ReactComponent as SmCalendar } from "../images/sm_calendar.svg";
import { ReactComponent as Location } from "../images/location.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
const PostItem = () => {
  return (
    <div className="ml-[10px] mr-[9px] mt-[12px] border-[1px] border-solid border-color-[#D9D7D7] border-box rounded-[6px] flex">
      <div className="bg-[#174265] w-[32rem] rounded-l-[10px]">
        <div className="flex">
          <BigAvatar className="ml-[22px] mt-[27px] w-[78px] h-[68.95px]" />
          <div className="ml-[23px] mt-[46px] space-y-[4px]">
            <div className="font-sans not-italic font-semibold text-[18px] leading-[25px] text-white">
              JHON SIMON STIVEN
            </div>
            <div className="font-sans not-italic font-semibold text-[16px] leading-[22px] text-[#20C9FF]">
              TEACHER
            </div>
          </div>
        </div>
        <hr className="ml-[21px] mr-[20px] mt-[11px] h-[1px] border-none bg-[#1F537D]" />
        <div className="flex ml-[22px] space-x-[14px]">
          <div className="mt-[22px] mb-[20px]">
            <Clock />
          </div>
          <div className="mt-[19px] font-sans not-italic font-normal text-[14px] leading-[19px] text-white">
            posted 2 minutes ago
          </div>
        </div>
      </div>
      <div className="pl-[44px]">
        <div className="mt-[19px] font-sans not-italic font-semibold text-[14px] leading-[19px] text-[#393838]">
          Lorem Ipsum is simply dummy text
        </div>
        <div className="mt-[13px] mr-[30px] font-sans not-italic font-normal text-[14px] leading-[163.1%] text-[#454545]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="pb-[14px] pt-[21px] flex items-center">
          <button className="text-[#212121] pl-[16px] pr-[22px] bg-[#EDF1F2] border-[1px] border-solid border-color-[#E9E9E9] rounded-[15px] font-sans not-italic font-normal text-[13px] leading-[163.1%]">
            Category
          </button>
          <div className="ml-[39px] flex items-center">
            <SmCalendar />
            <div className="ml-[9px] font-sans not-italic font-normal text-[13px] leading-[163.1%] text-[#575757]">
              Friday, Mar 22nd, 2021
            </div>
          </div>
          <div className="ml-[42px] flex items-center">
            <SmCalendar />
            <div className="ml-[9px] font-sans not-italic font-normal text-[13px] leading-[163.1%] text-[#575757]">
              Sunday, Mar 24th, 2021
            </div>
          </div>
          <div className="ml-[45px] flex items-center">
            <Location />
            <div className="ml-[9px] font-sans not-italic font-normal text-[13px] leading-[163.1%] text-[#575757]">
              California, USA
            </div>
          </div>
          <div className="ml-[46px] flex items-center">
            <Comments />
            <div className="ml-[9px] font-sans not-italic font-normal text-[13px] leading-[163.1%] text-[#575757]">
              27 Comments
            </div>
          </div>
        </div>
      </div>
      <div className="w-[82px] bg-[#2B9AF3] text-white rounded-r-[10px] flex items-center">
        <div className="text-center pt-0">View Mode</div>
      </div>
    </div>
  );
};

export default PostItem;
