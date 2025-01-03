"use client";

import BgImgComp from "@/components/CustomComps/BgImgComp";
import { DatePicker } from "@/components/CustomComps/DatePicker";
import ImagePicker from "@/components/CustomComps/ImagePicker";
import PasswordInput from "@/components/CustomComps/PasswordInput";
import ProfileAndNav from "@/components/CustomComps/ProfileAndNavComp";
import { Button } from "@/components/ui/button";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Input } from "@/components/ui/input";

import {
  IconSignature,
  IconBuildingFactory2,
  IconPhone,
  IconDroplet,
  IconMapPin,
  IconCurrencyTaka,
} from "@tabler/icons-react";
import { IconBrandGithub, IconBrandX, IconChecklist, IconEditCircle, IconExchange, IconHome, IconMoodPlus, IconNewSection, IconTerminal2, IconUserPause, IconUserPlus, IconUsersPlus } from "@tabler/icons-react";


export default function AdminForm() {

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];



  return (
    <div className="bg-lightBg-1 bg-cover">
    {/* <BgImgComp/> */}
    <div className="hidden md:block h-screen ">
      <h1 className="h-full flex items-center justify-center">this version is only for mobile</h1>
    </div>
      <div className=" p-5 h-screen flex flex-col items-center justify-start    md:hidden">
        <ProfileAndNav links={links}/>
        <div className="bg-red-00 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Create User Form</h1>
        <div className="w-full flex flex-col justify-center items-center p-5  rounded-3xl bg-red-00 shadow-2xl">
          <div className="bg-red-00 w-3/4 mb-5 flex gap-5 flex-col justify-center items-center">
            <div className="flex gap-1 w-full">
              <Input
                type="email"
                className=" placeholder:text-center text-center capitalize"
                placeholder="Mail ID"
              />
            </div>
            <PasswordInput />
            <DatePicker
              className="placeholder:text-center text-center"
              datePlaceholder="Joining date"
            />
            <div className="flex gap-2 justify-center items-center">
              <Input
              type="number"
              min="0"
              placeholder="  Amount"
              className="placeholder:text-center text-center w-3/4"
            />
            <IconCurrencyTaka className="border bg-white rounded-lg w-10 h-10"/>
            </div>
            <DatePicker
              className="placeholder:text-center text-center"
              datePlaceholder="Last payment date"
            />
          </div>
            <Button>Submit</Button>
        </div>
        </div>
        
      </div>
    </div>
  );
}
