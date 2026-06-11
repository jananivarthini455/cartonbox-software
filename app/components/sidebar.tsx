"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


// const pathname = usePathname();

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `p-2 rounded block transition ${
      isActive(path) ? "bg-gray-600 text-white" : "hover:bg-gray-700"
    }`;

  return (
    // <div className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <div
  className={`${
    collapsed ? "w-16" : "w-64"
  } min-h-screen bg-gray-900 text-white p-4 transition-all duration-300`}
>
  <button
  onClick={() => setCollapsed(!collapsed)}
  className="mb-4 text-xl"
>
  {collapsed ? "▶" : "◀"}
</button>
      {/* <h1 className="text-2xl font-bold mb-6">
        Packaging software
      </h1> */}

      {!collapsed && (
  <h1 className="text-2xl font-bold mb-6">
    Packaging software
  </h1>
)}

      <div className="flex flex-col gap-4">
{/* 
        <Link href="/create-customer" className={linkClass("/create-customer")}>
          Create Customer
        </Link> */}
        <Link href="/create-customer" className={linkClass("/create-customer")}>
  {collapsed ? "👤" : "Create Customer"}
</Link>

        {/* <Link href="/create-job" className={linkClass("/create-job")}>
          Job Card
        </Link> */}
        {/* {collapsed ? "📋" : "Job Card"} */}


         <Link href="/create-job" className={linkClass("/create-job")}>
  {collapsed ? "📋"  : "Job Card"}
  </Link>


  {/* <Link
  href="/job-card-report"
  className={linkClass("/job-card-report")}
>
  Job Card Report
</Link> */}


 <Link href="/jobcard-report" className={linkClass("/jobcard-report")}>
  {collapsed ? "📋"  : "Jobcard-report"}
  </Link>



        {/* <Link href="/billing" className={linkClass("/billing")}>
          Billing Management
        </Link> */}
        {/* {collapsed ? "💰" : "Billing Management"} */}

          {/* <Link href="/jobvard-report" className={linkClass("/jobcard-report")}>
  {collapsed ? "📋"  : "JobCard Report"}
  </Link> */}

         <Link href="/billing" className={linkClass("/billing")}>
  {collapsed ? "💰"  : "Billing Management"}
  </Link>

{/* 
        <Link href="/stock-management" className={linkClass("/stock-management")}>
          Stock Management
        </Link> */}
        {/* {collapsed ? "📦" : "Stock Management"} */}


         <Link href="/stock-management" className={linkClass("/stock-management")}>
  {collapsed ? "📦"  : "stock Management"}
  </Link>


      </div>
    </div>
  );
}