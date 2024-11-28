"use client";

import BgImgComp from "@/components/CustomComps/BgImgComp";
import ImagePicker from "@/components/CustomComps/ImagePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { IconSignature,IconPhone,IconDroplet,IconMapPin,
    IconSchool,
    IconBrandGoogleAnalytics,
    IconId,
    IconPhoneSpark, } from "@tabler/icons-react";

export default function UserForm() {
  return (
    <>
      <BgImgComp />
      <div className="hidden md:block h-screen ">
      <h1 className="h-full flex items-center justify-center">this version is only for mobile</h1>
    </div>
      <div className="p-12 h-screen flex flex-col items-center justify-center     md:hidden">
        <h1 className="text-2xl font-bold">Student Form</h1>
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
            <IconBrandGoogleAnalytics className="bg-white w-10 h-10 rounded-lg p-1" size={30}/>
            <Input
            type="number"
            min="0"
              className="w-3/4 placeholder:text-center text-center capitalize"
              placeholder="Standard"
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
            <IconPhoneSpark className="bg-white w-10 h-10 rounded-lg p-1" size={30}/>
            <Input
              type="number"
              min="0"
              className="w-3/4 placeholder:text-center text-center capitalize"
              placeholder="Emergency Contact"
            />
          </div>
          <div className="flex gap-1">
            <IconSchool className="bg-white w-10 h-10 rounded-lg p-1" size={30}/>
            <Input
              className="w-3/4 placeholder:text-center text-center capitalize"
              placeholder="Institute Name"
            />
          </div>
          <div className="flex gap-1">
            <IconId className="bg-white w-10 h-10 rounded-lg p-1" size={30}/>
            <Input
              type="number"
              min="0"
              className="w-3/4 placeholder:text-center text-center capitalize"
              placeholder="Institute ID"
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
