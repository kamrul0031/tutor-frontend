"use client";

import BgImgComp from "@/components/CustomComps/BgImgComp";
import {
  IconBookmark,
  IconBrandGoogleAnalytics,
  IconDoorExit,
  IconMapPin,
  IconPencil,
  IconPhone,
  IconPhoneSpark,
  IconRadar,
  IconUser,
} from "@tabler/icons-react";

export default function UserDashboard() {
  return (
    <>
      <BgImgComp />
      <div className="hidden md:block h-screen ">
        <h1 className="h-full flex items-center justify-center">
          this version is only for mobile
        </h1>
      </div>
      <div className="p-5 pt-12 h-screen flex flex-col gap-5 items-center    md:hidden">
        <div className="bg-red-00 w-full h-[20%] grid place-items-center">
          <div className=" h-32 w-32 bg-white rounded-3xl shadow-xl border-t border-gray-400 grid place-items-center">
            <IconUser size={100} />
          </div>
        </div>
        <div className="bg-red-00 w-full h-[15%]  text-xl flex flex-col justify-evenly">
          <h1 className="text-center text-2xl font-bold">0023@BP.com</h1>
          <div className="uppercase flex justify-around font-semibold">
            <h1 className="flex">
              <IconBrandGoogleAnalytics />
              12th
            </h1>
            <h1 className="flex">
              <IconBookmark />
              frb23
            </h1>
            <h1 className="flex">
              2/1000
              <IconRadar />
            </h1>
          </div>
        </div>
        <div className="bg-red-00 w-full h-[20%]">
          <div className="capitalize h-full flex flex-col justify-evenly items-center rounded-3xl shadow-xl ">
            <h1 className="text-3xl font-bold">
              student name <span>(o+)</span>
            </h1>
            <h1 className="font-semibold text-lg">chattogram bandar college</h1>
            <h1 className="font-semibold text-lg">ID : 2024567</h1>
          </div>
        </div>
        <div className="bg-red-00 w-full h-[35%]">
          <div className="flex flex-col gap-3 h-full  justify-center rounded-3xl shadow-xl ">
            <div className="flex gap-1 justify-center">
              <IconPhone className="bg-white w-12 h-12 rounded-lg p-1" />
              <input
                readOnly
                className="w-3/4 h-12 placeholder:text-center text-xl text-center capitalize rounded focus:outline-none"
                value={"01613201181"}
              />
            </div>
            <div className="flex gap-1 justify-center">
              <IconPhoneSpark className="bg-white w-12 h-12 rounded-lg p-1" />
              <input
                readOnly
                className="w-3/4 h-12 placeholder:text-center text-xl text-center capitalize rounded focus:outline-none"
                value={"01871755663"}
              />
            </div>
            <div className="flex gap-1 justify-center">
              <IconMapPin className="bg-white w-12 h-12 rounded-lg p-1" />
              <textarea
                className="w-3/4 h-20 placeholder:text-center pt-4 resize-none text-xl text-center capitalize rounded focus:outline-none"
                readOnly
                value={"argabad , chotopool , chattogram"}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="bg-red-00 w-full h-[10%] rounded-3xl">
          <div className="h-full px-4 flex justify-between items-center ">
            <button className="w-16 h-16 bg-gray-300/60 rounded-2xl grid place-items-center shadow-2xl"><IconPencil size={45}/></button>
            <button className="w-44 h-16 bg-gray-300/60 rounded-2xl text-2xl font-semibold shadow-2xl">Payments</button>
            <button className="w-16 h-16 bg-gray-300/60 rounded-2xl grid place-items-center shadow-2xl"><IconDoorExit size={45}/></button>
          </div>
        </div>
      </div>
    </>
  );
}
