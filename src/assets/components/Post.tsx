import React from "react";
import { ReactComponent as BigAvatar } from "../images/big_avatar.svg";
import { ReactComponent as UserGroup } from "../images/user_group.svg";
const Post = () => {
  return (
    <div className="w-[406px] bg-white pt-[52px] pb-[57px] border-[1px] border-solid border-[#D9D7D7] h-[681px]">
      <div className="flex justify-center">
        <BigAvatar className="w-[170px] h-[170px]" />
      </div>
      <div className="font-sans not-italic font-semibold text-[18px] leading-[25px] text-[#2B9AF3] text-center mt-[26px]">
        JHON SIMON STIVEN
      </div>
      <div className="font-sans not-italic font-semibold text-[16px] leading-[22px] text-[#263238] text-center mt-[6px]">
        TEACHER
      </div>
      <div className="font-sans not-italic font-semibold text-[16px] leading-[22px] text-[#393838] text-center mt-[9px]">
        Lorem Ipsum is simply dummy text
      </div>
      <hr className="mt-[32px] ml-[22px] mr-[26px] h-[1px] border-none bg-[#E1E1E1]" />
      <div className="pt-[17px] pb-[36px] px-0 flex space-x-[69px]">
        <div className="text-center ml-[99px]">
          <UserGroup className="justfiy-center mx-auto" />
          <div className="font-sans not-italic font-semibold text-[30px] leading-[41px] text-black text-center">
            100
          </div>
          <div className="font-sans not-italic normal text-[16px] leading-[22px] text-[#474646] text-center">
            Followers
          </div>
        </div>
        <div className="text-center mr-[104px]">
          <UserGroup className="justfiy-center mx-auto" />
          <div className="font-sans not-italic font-semibold text-[30px] leading-[41px] text-black text-center">
            200
          </div>
          <div className="font-sans not-italic font-normal text-[16px] leading-[22px] text-[#474646] text-center">
            Following
          </div>
        </div>
      </div>
      <button className="text-center ml-[41px] w-[346px] mr-[19px] rounded-[6px] bg-[#2B9AF3] text-white font-sans not-italic font-bold text-[14px] leading-[19px] pt-[14px] pb-[15px]">
        Post a Request
      </button>
      <button className="text-center mt-[20px] ml-[41px] mr-[19px] w-[346px] rounded-[6px] bg-[#3A548D] text-white font-sans not-italic font-bold text-[14px] leading-[19px] pt-[14px] pb-[15px]">
        Applied Request
      </button>
    </div>
  );
};

export default Post;
