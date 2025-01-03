import ProfileAndNav from "@/components/CustomComps/ProfileAndNavComp";
import TaskManagerComp from "@/components/CustomComps/TaskManagerComp";
import { IconFileTypeDoc, IconHome, IconNewSection, IconSitemap, IconUsers } from "@tabler/icons-react";


export default function UserDashboard(){

  const links = [
    {
      title: "all files",
      icon: (
        <IconFileTypeDoc className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/allusers",
    },
    {
      title: "all batches",
      icon: (
        <IconSitemap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/allusers",
    },
    {
      title: "all users",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/allusers",
    },
    {
      title: "create user",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/createuserform",
    },
    {
      title: "home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    }
    

  ];


  return(
    
    <div className="grid place-items-center bg-lightBg-1 bg-cover h-screen">
      <h1>testing .....</h1>
      <ProfileAndNav links={links}/>
    </div>
  )
}