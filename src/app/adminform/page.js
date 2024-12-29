"use client";

import BgImgComp from "@/components/CustomComps/BgImgComp";
import ImagePicker from "@/components/CustomComps/ImagePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { IconSignature,IconBuildingFactory2,IconPhone,IconDroplet,IconMapPin } from "@tabler/icons-react";

export default function AdminForm() {
  return (
    <div className="bg-lightBg-1 bg-cover">
      {/* <BgImgComp /> */}
      <div className=" p-12 h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Admin Form</h1>
        <div className="min-h-[70%]       w-full flex gap-2 flex-col justify-end items-center py-5 px-6 rounded-3xl relative bg-red-00 shadow-2xl">
          <ImagePicker />
          <div className="flex gap-1 h-[9%] w-full ">
            <IconSignature className="bg-white w-auto h-auto  rounded-lg p-1" size={30}/>
            <Input
              className=" h-full placeholder:text-center text-center capitalize"
              placeholder="Name"
            />
          </div>
          <div className="flex gap-1 h-[9%] w-full">
            <IconBuildingFactory2 className="bg-white w-auto h-auto  rounded-lg p-1" size={30}/>
            <Input
              className=" h-full placeholder:text-center text-center capitalize"
              placeholder="Coaching Name"
            />
          </div>
          <div className="flex gap-1 h-[9%] w-full">
            <IconPhone className="bg-white w-auto h-auto  rounded-lg p-1" size={30}/>
            <Input
              type="number"
              min="0"
              className=" h-full placeholder:text-center text-center capitalize"
              placeholder="Contact"
            />
          </div>
          <div className="flex gap-1 h-[9%] w-full">
            <IconDroplet className="bg-white w-auto h-auto  rounded-lg p-1" size={30}/>
            <Input
              type="number"
              min="0"
              className=" h-full placeholder:text-center text-center capitalize"
              placeholder="Contact"
            />
          </div>
          <div className="flex gap-1 h-[9%] w-full">
            <IconMapPin className="bg-white w-auto h-auto  rounded-lg p-1" size={30}/>
            <textarea 
            placeholder="Address"
            className=" resize-none w-full h-16 placeholder:relative placeholder:top-4 placeholder:text-center  capitalize rounded-md" 
            />
          </div>
          <div className="h-[20%] mt-10 w-full flex justify-center">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
