import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconBrandWhatsapp, IconUserScreen } from "@tabler/icons-react";

export default function LoginForm() {
  return (
    <div className="bg-lightBg-1 bg-cover">
      <div className="hidden md:block h-screen ">
        <h1 className="h-full flex items-center justify-center">
          this version is only for mobile
        </h1>
      </div>
      {/* <BgImgComp /> */}
      <div className=" p-12 pb-10 sm:hidden h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="min-h-[50%]       w-full flex gap-2 flex-col justify-center items-center px-6 rounded-3xl relative bg-red-00 shadow-2xl">
          <Tabs defaultValue="account" className="w-full bg-red-00  flex flex-col justify-center">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="admin">Tutor</TabsTrigger>
              <TabsTrigger value="user">Student</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <h1 className="text-center font-semibold">For Tutor Account contact with Us</h1>
                <div className="flex gap-1 justify-center items-center">
                    <IconUserScreen size={35} className="bg-white rounded-lg p-1"/>
                    <p className="bg-white rounded-lg p-[6px] px-3">01613201181</p>
                    <IconBrandWhatsapp size={35} className="bg-white rounded-lg p-1"/>
                </div>
            </TabsContent>
            <TabsContent value="admin">
              <div className="flex flex-col gap-2 items-center">
                <Input className="text-center" placeholder="Tutor ID" type="text" />
                <Input className="text-center" placeholder="Tutor Password" type="password" />
                <Button className="w-1/2">Login</Button>
              </div>
            </TabsContent>
            <TabsContent value="user">
            <div className="flex flex-col gap-2 items-center">
                <Input className="text-center" placeholder="Student ID" type="text" />
                <Input className="text-center" placeholder="Student Password" type="password" />
                <Button className="w-1/2">Login</Button>
              </div>
            </TabsContent>
          </Tabs>
          
        </div>
      </div>
    </div>
  );
}
