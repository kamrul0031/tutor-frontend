

"use client"
import { Button } from "@/components/ui/button"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";



import { DatePicker } from "@/components/CustomComps/DatePicker";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { IconRestore,IconCurrencyTaka,IconMoodEdit,IconMoodX ,IconSquareXFilled} from '@tabler/icons-react';
//import floatind dock 
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconUserFilled,
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import LightBg1 from "@/../public/lightBg1.jpg"




import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


   

export default function AllUsersPage() {


  

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



  const placeholders = [
    "Search .....",
    "Search users with the user ID ....!",
    "Click on the User's Card to make",
    "Payment , Edit or Delete",
  ];

  const copyInstaces = 20;
  const users = Array.from({length:copyInstaces});








  return (
    <>
    <div className="hidden md:block h-screen ">
      <h1 className="h-full flex items-center justify-center">this version is only for mobile</h1>
    </div>
    {/* <Image
        src={LightBg1}
        alt="Background"
        objectFit="cover"
        className="absolute h-full -z-10"
        layout="fill" // Ensures the image fills the container
        priority // Loads the image with high priority
      /> */}
    <div className="bg-lightBg-1 h-screen bg-cover p-4 pt-16  flex flex-col gap-5     md:hidden">
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
      />

      <div className="bg-red-00 h-full overflow-scroll flex flex-col gap-7 rounded-2xl">
        {
       users.map(() => (
        UserCard()
       ))
      }
      </div>

      <FloatingDock
        mobileClassName="absolute bottom-5 left-8 scale-150"
        items={links}
      />

      
    </div>
    </>
    
  )
}

const UserCard = () => {
  
  const {
    handleSubmit,
    register,
    control,
    formState: { errors , isSubmitting , isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data: ", data); // The date will appear here
  };


  return(
    <AlertDialog>
    <AlertDialogTrigger>
    <div className="bg-slate-200/50 border shadow-xl w-full h-44 rounded-3xl p-4 flex justify-center items-center gap-3 dark:text-white ">
          <div className="flex flex-col gap-2 items-center justify-center ">
            {/* <div className="w-[6rem] h-[6rem] bg-white rounded-2xl p-2 grid place-items-center"> */}
              <IconUserFilled size={80} className="bg-white rounded-2xl"/>
            {/* </div> */}
            {/* user image */}
            <h1 className="font-bold max-[320px]:text-sm">426BP</h1>
          </div>
          <div className="capitalize flex flex-col gap-2 ">
            <h1 className="font-bold sm:text-xl">student name</h1>
            <div className="max-[520px]:text-[10px]">
               <p className="text-">international college of bangladesh</p>
               <p><span className="font-semibold">contact : </span>01613201181</p>
               <p><span className="font-semibold">due payments : </span>12/12/24</p>
               <p><span className="font-semibold">last payment : </span>12/12/23</p>
            </div>
          </div>
        </div>
    </AlertDialogTrigger>
    <AlertDialogContent className="bg-red-40 border-none rounded-3xl shadow-lg">
      <AlertDialogHeader>
        <AlertDialogTitle className="hidden">Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
        <div className=" w-full bg-white  rounded-3xl p-5 flex gap-7 flex-col justify-between shadow-lg shadow-black ">
        {/* top section */}
        <div className="flex justify-between">
          <h1 className="uppercase font-bold text-xl">420bp</h1>
          <div className="flex gap-2">
          <AlertDialogCancel className="border-none bg-transparent pt-0 scale-150 hover:bg-transparent "><IconSquareXFilled size={50} color="red"/></AlertDialogCancel>
          </div>
        </div>
        <div>
          <h1 className="Capitalize font-bold text-lg">Student Name</h1>
          <h1>Last Paid : 30/08/2023</h1>
          <h1>Amount : 1000</h1>
        </div>
        {/* middle section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 items-center">
            <Controller
              name="paymentDate"
              control={control}
              defaultValue={null} // Default value for the date
              rules={{ required: "Payment date is required" }}
              render={({ field }) => (
                <div className="w-3/4">
                  <DatePicker
                  datePlaceholder="Click to set Payment Date"
                  selectedDate={field.value}
                  onDateChange={field.onChange}
                />
                </div>
                
              )}
            />
            {errors.paymentDate && (
              <p className="text-red-500 text-sm">
                {errors.paymentDate.message}
              </p>
            )}
            <div className="flex gap-2 justify-center items-center">
              <Input
              type="number"
              min="0"
              placeholder="  Amount"
              className="placeholder:text-center text-center w-3/4"
              {...register("amount ",{required:"Amount is required"})}
            />
            <IconCurrencyTaka className="border bg-white rounded-lg w-10 h-10"/>
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
            </div>
            
            <Input
              type="text"
              placeholder="Comment"
              className="placeholder:text-center text-center w-3/4 h-16"
              {...register("comment", {
                maxLength: {
                  value: 20,
                  message: "Comment cannot exceed 20 characters",
                },
              })}
            />
            {/* Error Message */}
            {errors.comment && (
              <p className="text-red-500 text-sm">{errors.comment.message}</p>
            )}
          
          <button
            type="submit"
            className="py-3 px-10 bg-blue-600 text-white p-2 rounded disabled:bg-blue-400"
            disabled={isSubmitting}
          >
            {isSubmitSuccessful ? "Payment Done!" : "Pay"}
          </button>
          </div>
        </form>
        {/* end section */}
        <div className="flex justify-evenly">
            <IconMoodEdit size={45}/>
            <IconMoodX size={45}/>
            <IconRestore size={45}/>
        </div>
      </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      {/* <AlertDialogFooter>
      
      </AlertDialogFooter> */}
    </AlertDialogContent>
  </AlertDialog>
  
  )
}

