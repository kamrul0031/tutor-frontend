"use client";

import BgImgComp from "@/components/CustomComps/BgImgComp";
import ImagePicker from "@/components/CustomComps/ImagePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { IconSignature,IconBuildingFactory2,IconPhone,IconDroplet,IconMapPin } from "@tabler/icons-react";

export default function AdminForm() {
  return (
    <>
      <BgImgComp />
      <div className="p-12 h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Admin Form</h1>
        <div className="w-full flex gap-5 flex-col justify-center items-center p-5 rounded-3xl bg-red-00 shadow-2xl">
          <ImagePicker />
          <div className="flex gap-1">
            <IconSignature className="bg-white w-10 h-10 rounded-lg p-1" size={30}/>
            <Input
              className="w-3/4 placeholder:text-center text-center capitalize"
              placeholder="Name"
            />
          </div>
          <div className="flex gap-1">
            <IconBuildingFactory2 className="bg-white w-10 h-10 rounded-lg p-1" size={30}/>
            <Input
              className="w-3/4 placeholder:text-center text-center capitalize"
              placeholder="Coaching Name"
            />
          </div>
          <div className="flex gap-1">
            <IconPhone className="bg-white w-10 h-10 rounded-lg p-1" size={30}/>
            <Input
              type="number"
              min="0"
              className="w-3/4 placeholder:text-center text-center capitalize"
              placeholder="Contact"
            />
          </div>
          <div className="flex gap-1">
            <IconDroplet className="bg-white w-10 h-10 rounded-lg p-1" size={30}/>
            <Input
              className="w-3/4 placeholder:text-center placeholder:capitalize text-center uppercase"
              placeholder="Blood Group"
            />
          </div>
          <div className="flex gap-1">
            <IconMapPin className="bg-white w-10 h-10 rounded-lg p-1" size={30}/>
            <Input
              className="w-3/4 h-20 placeholder:text-center -pt-5 capitalize"
              placeholder="Address"
            />
          </div>
          <Button>Submit</Button>
        </div>
      </div>
    </>
  );
}
