import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
export default function Home() {
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
            <p className=" text-center font-bold ">Contact Info:</p>
            <div className="flex flex-row gap-6 items-center">
            <IoIosMail />
            <a className=" text-[#0D57F6]" href="mailto:tazrininternational@gmail.com">tazrininternational@gmail.com</a>
            </div>
            <div className="flex flex-row gap-6 items-center">
            <FaPhoneVolume />
            <a className=" text-[#0D57F6]" href="tel:+8801897701634">+8801897701634</a>
            </div>
         </div>
      </div>
      
    </main>
  );
}
