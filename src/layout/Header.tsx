import React from "react";
import { ReactComponent as Avatar } from "../assets/images/default_avatar.svg";
import { ReactComponent as Notification } from "../assets/images/notification.svg";
import { ReactComponent as Calendar } from "../assets/images/calendar.svg";
import { ReactComponent as Messages } from "../assets/images/messages.svg";
import { ReactComponent as MyRequests } from "../assets/images/my-requests.svg";
import { ReactComponent as RequestsFeed } from "../assets/images/requests-feed.svg";
import { ReactComponent as Profile } from "../assets/images/profile.svg";
import { ReactComponent as Organizations } from "../assets/images/organizations.svg";
import { ReactComponent as Setting } from "../assets/images/setting.svg";
import { ReactComponent as Logout } from "../assets/images/logout.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-end pt-[14px]">
        <div className={`${styles.navbar_item_margin_y}  mr-[64px]`}>
          <RequestsFeed className="mx-auto" />
          <div className={styles.navbar_item_text}>{"Request feed"}</div>
        </div>
        <div className={`${styles.navbar_item_margin_y} mr-[62px]`}>
          <MyRequests className="mx-auto" />
          <div className={styles.navbar_item_text}>{"My request"}</div>
        </div>
        <div className={`${styles.navbar_item_margin_y} mr-[65px] mt-[5px]`}>
          <Messages className="mx-auto" />
          <div className={styles.navbar_item_text}>{"Messages"}</div>
        </div>
        <div className={`${styles.navbar_item_margin_y} mr-[64px] mt-[7px]`}>
          <Calendar className="mx-auto" />
          <div className={styles.navbar_item_text}>{"Calendar"}</div>
        </div>
        <div className={`${styles.navbar_item_margin_y} mr-[55px] mt-[7px]`}>
          <Notification className="mx-auto" />
          <div className={styles.navbar_item_text}>{"Notification"}</div> 5
        </div>
        <div className="relative">
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="mt-[15px] mr-[51px]"
            type="button"
          >
            <Avatar className="h-[49.51px]" />
          </button>
          <div
            id="dropdown"
            className="absolute top-[75px] right-[51px] w-[246px] z-10"
          >
            <ul
              className="bg-[#174265] rounded-[6px] px-[12px]"
              aria-labelledby="dropdownDefault"
            >
              <li className="pt-[22px] pb-[27px]">
                <a
                  href="#"
                  className="block text-white text-right space-y-[2px]"
                >
                  <div className="font-sans not-italic font-semibold text-[14px] leading-[163.1%]">
                    JHON SIMON STIVEN
                  </div>
                  <div className="font-sans not-italic font-semibold text-[14px] leading-[16px]">
                    Teacher
                  </div>
                  <div className="font-sans not-italic font-semibold text-[13px] leading-[18px]">
                    Mountain Ridgey Elementary.
                  </div>
                </a>
              </li>
              <hr className="bg-[#2D618B] h-[1px] border-none" />
              <li className="py-[16px]">
                <a href="#" className="block">
                  <div className="flex text-white justify-end font-sans not-italic font-semibold text-[16px] leading-[16px]">
                    My Profile
                    <Profile className="ml-[16px]" />
                  </div>
                </a>
              </li>
              <hr className="bg-[#2D618B] h-[1px] border-none" />
              <li className="py-[16px]">
                <a href="#" className="block">
                  <div className="flex text-white justify-end font-sans not-italic font-semibold text-[16px] leading-[16px]">
                    My Organization
                    <Organizations className="ml-[16px]" />
                  </div>
                </a>
              </li>
              <hr className="bg-[#2D618B] h-[1px] border-none" />
              <li className="py-[16px]">
                <a href="#" className="block">
                  <div className="flex text-white justify-end font-sans not-italic font-semibold text-[16px] leading-[16px]">
                    Settings
                    <Setting className="ml-[16px]" />
                  </div>
                </a>
              </li>
              <hr className="bg-[#2D618B] h-[1px] border-none" />
              <li className="py-[16px]">
                <a href="#" className="block">
                  <div className="flex text-white justify-end font-sans not-italic font-semibold text-[16px] leading-[16px]">
                    Logout
                    <Logout className="ml-[16px]" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar_href_text flex justify-center bg-purple ">
        <div className="text-white">You have not added a recovery mail?</div>
        <div className="text-green hover:underline">
          <a href="#">Add now?</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
