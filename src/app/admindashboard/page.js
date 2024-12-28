"use client";

import BgImgComp from "@/components/CustomComps/BgImgComp";
import ProfileImg from '@/../public/proImg.png';
import CheckboxComp from "@/components/CustomComps/CheckboxComp";
import { Button } from "@/components/ui/button";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconChecklist, IconEditCircle, IconExchange, IconHome, IconMoodPlus, IconNewSection, IconTerminal2, IconUserPause, IconUserPlus, IconUsersPlus } from "@tabler/icons-react";
import Image from "next/image";
import TaskManagerComp from "@/components/CustomComps/TaskManagerComp";


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
    <div className="bg-lightBg-1 bg-cover h-screen">
    <div className="hidden md:block h-screen ">
      <h1 className="h-full flex items-center justify-center">this version is only for mobile</h1>
    </div>
      <div className="flex flex-col gap-4 p-4 items-center h-screen md:hidden">
        {/* admin name section  */}
        <div className="bg-blue-00 flex gap-2 items-center w-full min-h-[10%] text-xl font-semibold">
          <Image src={ProfileImg} alt="profile img" className="w-11 h-11 border-2 border-white rounded-full"/>
          <h1 className="capitalize relative top-2">hello,mk ....!</h1>
        </div>
        {/* current batches section  */}
        <div className="bg-blue-00 min-h-[30%] capitalize w-full grid gap-2 grid-cols-2">
          <div className="bg-white/50 shadow-xl max-h-[320px]:text-green-500 rounded-xl flex flex-col justify-center items-center">
            <h1 className="text-lg sm:text-red-500 font-medium">batches</h1>
            <h1 className="font-semibold text-2xl">23</h1>
          </div>
          <div className="bg-white/50 shadow-xl max-h-[320px]:text-green-500 rounded-xl flex flex-col justify-center items-center">
            <h1 className="text-lg sm:text-red-500 font-medium">students</h1>
            <h1 className="font-semibold text-2xl">300</h1>
          </div>
          <div className="bg-white/50 shadow-xl max-h-[320px]:text-green-500 rounded-xl flex flex-col justify-center items-center">
            <h1 className="text-lg sm:text-red-500 font-medium">due payments</h1>
            <h1 className="font-semibold text-2xl">78</h1>
          </div>
          <div className="bg-white/50 shadow-xl max-h-[320px]:text-green-500 rounded-xl flex flex-col justify-center items-center">
            <h1 className="text-lg sm:text-red-500 font-medium">due amount</h1>
            <h1 className="font-semibold text-2xl">50000</h1>
          </div>
          
        </div>


        {/* task board section  */}
        <div className="min-h-[55%] w-full bg-red-00">
          <TaskManagerComp className={" bg-white/50 shadow-xl"}/>
        </div>








        {/* <div className="bg-blue-00 h-full w-full pt-4">
          <div className="bg-white/50 shadow-xl w-full h-full rounded-3xl overflow-scroll relative" >
            <div className="flex items-center justify-around pt-3 ">
              <h1 className="capitalize font-semibold ">tasks</h1>
              <IconEditCircle size={30}/>
            </div>
            <div className="bg-red-00 w-full h-full p-5 flex flex-col gap-5 absolute"> */}

   {/* use to create dame array for looping */}
              {/* {[...Array(15)].map((_, i) => (
        <CheckboxComp key={i} todos={"Lorem ipsum dolor, sit amelestiae, illo amet facilis rerum itaque eius."} />
      ))}
              
            </div>
          </div>
        </div> */}











        <FloatingDock
                mobileClassName="absolute bottom-2 right-8 scale-125"
                items={links}
              />
        {/* end section  */}
        {/* <div className="bg-blue-500 h-[15%] w-full flex justify-evenly">
          <button>
            <IconUsersPlus className="bg-white/40 rounded-xl p-1" size={40}/>
          </button>
          <button>
            <IconUsersPlus className="bg-white/40 rounded-xl p-1" size={40}/>
          </button>
          <button>
            <h1 className="capitalize text-xl font-semibold bg-white/40 px-10 p-2 rounded-xl">users section</h1>
          </button>
        </div> */}
      </div>
    </div>
  );
}
