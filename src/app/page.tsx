"use client"
import Image from "next/image";
import { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
export default function Home() {
  const [showNum, setShowNum] = useState<boolean>(false);
  return (
    <main className=" bg-gradient-to-r from-indigo-500 to-purple-700 flex min-h-screen flex-col items-center  p-24">
        <p className=" font-semibold text-lg whitespace-nowrap">Website Under Construction....</p>
      <div className=" shadow-2xl rounded-xl px-6 pb-6 mt-2 bg-white">
      <Image
          src="/images/logo.png"
          alt="Tazrin Logo"
          width={250}
          height={37}
          priority
        />
         <div className=" flex flex-col  justify-center gap-2">
            <p className=" text-center font-bold ">Contact Us:</p>
            {/* <div className="flex flex-row gap-6 items-center">
            <IoIosMail />
            <a className=" text-[#0D57F6]" href="mailto:tazrininternational@gmail.com">tazrininternational@gmail.com</a>
            </div> */}
            {/* <div className="flex flex-row gap-6 items-center">
            <FaPhoneVolume />
            <a className=" text-[#0D57F6]" href="tel:+8801897701634">+8801897701634</a>
            </div> */}
           {
            showNum === true ? (
              <div className="flex flex-row justify-center items-center mt-4 gap-4">
              <FaPhoneVolume onClick={()=>setShowNum(false)} className=" w-12 h-12 hover:cursor-pointer" />
                  <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
              <p className=" font-bold ">1. </p>
              <a className=" text-[#0D57F6]" href="tel:+8801897701634">+8801897701634</a>
              </div>
              <div className="flex flex-row gap-2 items-center">
              <p className=" font-bold ">2. </p>
              <a className=" text-[#0D57F6]" href="tel:+8801897701634">+8801886314109</a>
              </div>
               </div>
              </div>
            ) : <div className="flex justify-center items-center mt-4">
              <FaPhoneVolume onClick={()=>setShowNum(true)} className=" w-12 h-12 hover:cursor-pointer" />
            </div>
           }
         </div>
      </div>
      
    </main>
  );
}
