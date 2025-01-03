"use client";

import ProfileImg from "@/../public/proImg.png";
import {
  IconBasketCheck,
  IconLogout,
  IconPhone,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock";
import Image from "next/image";
import { useState } from "react";

export default function ProfileAndNav({ links }) {
  const [profileOpener, setProfileOpener] = useState(false);

  return (
    <div className="bg-blue-00 z-50 flex gap-2 items-center justify-between w-full min-h-[10%] text-xl font-semibold">
      <div
        onClick={() => setProfileOpener(!profileOpener)}
        className="flex gap-2 items-center"
      >
        <Image
          src={ProfileImg}
          alt="profile img"
          className="w-11 h-11 border-2 border-white rounded-full"
        />
        <h1 className="capitalize relative top-2">hello,mk ....!</h1>
      </div>
      {profileOpener && (
        <div className="flex flex-col gap-2 absolute top-20 p-3 text-lg bg-white w-56  rounded-3xl shadow-2xl">
          <IconX
            className="bg-red-500 absolute top-3 right-3 rounded-lg"
            color="white"
            onClick={() => setProfileOpener(!profileOpener)}
          />

          <div className="flex gap-2 items-center">
            <IconUser />
            <h1>MKh Tamim</h1>
          </div>
          <div className="flex gap-2 items-center">
            <IconPhone />
            <h1>01613201181</h1>
          </div>
          <div className="flex gap-2 items-center">
            <IconBasketCheck />
            <h1>Plan:Freemium </h1>
          </div>
          <div className="self-center flex gap-2 items-center">
            <IconLogout color="red" />
            <h1 className="text-red-500">logout</h1>
          </div>
        </div>
      )}
      <FloatingDock mobileClassName="scale-125 z-50" items={links} />
    </div>
  );
}
