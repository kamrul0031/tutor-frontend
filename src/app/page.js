import Link from "next/link";


export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
     <div className="flex flex-col gap-10">
      <Link href="/createuserform">Create User Form</Link>
      <Link href="/allusers">All Users</Link>
      <Link href="/adminform">Admin Form</Link>
      <Link href="/userform">User Form</Link>



      <Link href="/admindashboard">Admin Dashboard</Link>
      <Link href="/userDashboard">User Dashboard</Link>
      <Link href="/userform">userForm</Link>
      <Link href="/loginForm">LoginForm</Link>
     </div>
    
    </div>
   
  )
}