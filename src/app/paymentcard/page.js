"use client";

import { DatePicker } from "@/components/CustomComps/DatePicker";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { IconRestore,IconCurrencyTaka,IconMoodEdit,IconMoodX } from '@tabler/icons-react';
import Image from "next/image";
import LightBg1 from "@/../public/lightBg1.jpg"


export default function PaymentCard() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors , isSubmitting , isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data: ", data); // The date will appear here
  };

  return (
    <div className="h-screen bg-light-bg-1 bg-cover p-10 grid place-items-center">
      {/* container div */}
      <Image
        src={LightBg1}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        layout="fill" // Ensures the image fills the container
        priority // Loads the image with high priority
      />
      <div className="bg-red- w-full h-[60%] rounded-3xl p-5 flex flex-col justify-between shadow-lg shadow-black ">
        {/* top section */}
        <div className="flex justify-between">
          <h1 className="uppercase font-bold text-xl">420bp</h1>
          <div className="flex gap-2">
            <IconMoodEdit size={35}/>
            <IconMoodX size={35}/>
            <IconRestore size={35}/>
          </div>
        </div>
        <div>
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
                <DatePicker
                  datePlaceholder="Click to set Payment Date"
                  selectedDate={field.value}
                  onDateChange={field.onChange}
                />
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
            className="mt-4 px-10 bg-blue-600 text-white p-2 rounded disabled:bg-blue-400"
            disabled={isSubmitting}
          >
            {isSubmitSuccessful ? "Payment Done!" : "Pay"}
          </button>
          </div>
        </form>
        {/* end section */}
        <div>

        </div>
      </div>
    </div>
  );
}
