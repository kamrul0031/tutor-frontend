"use client";

import BgImgComp from "@/components/CustomComps/BgImgComp";
import { DatePicker } from "@/components/CustomComps/DatePicker";
import ImagePicker from "@/components/CustomComps/ImagePicker";
import PasswordInput from "@/components/CustomComps/PasswordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  IconSignature,
  IconBuildingFactory2,
  IconPhone,
  IconDroplet,
  IconMapPin,
  IconCurrencyTaka,
} from "@tabler/icons-react";

export default function AdminForm() {
  return (
    <>
      <BgImgComp />
      <div className="p-12 h-screen flex flex-col items-center justify-center">
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
    </>
  );
}
