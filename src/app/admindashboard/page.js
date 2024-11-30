"use client";

import BgImgComp from "@/components/CustomComps/BgImgComp";
import CheckboxComp from "@/components/CustomComps/CheckboxComp";
import { Button } from "@/components/ui/button";
import { IconChecklist, IconMoodPlus } from "@tabler/icons-react";


export default function AdminForm() {
  return (
    <>
    <BgImgComp/>
    <div className="hidden md:block h-screen ">
      <h1 className="h-full flex items-center justify-center">this version is only for mobile</h1>
    </div>
      <div className="p-5 pt-12 h-screen flex flex-col gap-5 items-center    md:hidden">
        <div className="w-full h-[5%] flex justify-between px-5 text-2xl font-semibold">
            <h1>Admin</h1> 
            <h1>12/12/24</h1>
        </div>
        <div className="bg-blue-00 w-full h-[30%] grid grid-cols-2 place-items-center gap-4 capitalize">
            <div className="bg-red-00 w-full h-full rounded-3xl shadow-2xl border-t border-gray-400 bg-slate-300/20 flex flex-col justify-center items-center">
                <h1 className="text-lg font-semibold">current batches</h1>
                <h1 className="text-4xl font-bold">23</h1>
            </div>
            <div className="bg-red-00 w-full h-full rounded-3xl shadow-2xl border-t border-gray-400 bg-slate-300/20 flex flex-col justify-center items-center">
                <h1 className="text-lg font-semibold">current students</h1>
                <h1 className="text-4xl font-bold">300</h1>
            </div>
            <div className="bg-red-00 w-full h-full rounded-3xl shadow-2xl border-t border-gray-400 bg-slate-300/20 flex flex-col justify-center items-center">
                <h1 className="text-lg font-semibold">due payments</h1>
                <h1 className="text-4xl font-bold">78</h1>
            </div>
            <div className="bg-red-00 w-full h-full rounded-3xl shadow-2xl border-t border-gray-400 bg-slate-300/20 flex flex-col justify-center items-center">
                <h1 className="text-lg font-semibold">due amount</h1>
                <h1 className="text-4xl font-bold">50000</h1>
            </div>
               </div>
        <div className="bg-blue-00 w-full h-[55%]">
            <div className="bg-red-00 w-full h-full p-5 rounded-[4rem] border-t border-gray-400 shadow-2xl bg-slate-300/30 space-y-3">
            <div className="flex justify-around items-center h-[10%]">
                <h1 className="text-center text-2xl font-semibold">Tasks</h1>
                <IconChecklist size={35}/>
            </div>
              
                  <ul className=" flex w-auto  h-[90%] flex-col bg-blue-00 rounded-3xl gap-4 overflow-scroll">
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus "}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                    <CheckboxComp className="text-red-00 text-base" todos={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus"}/>
                  </ul>  
           
                
            </div>
        </div>
        <div className="bg-blue-00 w-full h-[10%] flex gap-2">
           <button className="w-[25%] h-full bg-red-00 shadow-2xl bg-slate-300/40 rounded-3xl grid place-items-center">
            <IconMoodPlus size={60}/>
           </button>
           <div className="w-[75%] h-full bg-red-00 shadow-2xl bg-slate-300/40 rounded-3xl grid place-items-center">
            <h1 className="text-2xl font-bold">Users Section</h1>
           </div>
        </div>
      </div>
    </>
  );
}
