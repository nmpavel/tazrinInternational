import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
export default function Home() {
  return (
    <main className=" bg-white flex min-h-screen flex-col items-center  p-24">
        <Image
          src="/images/logo.png"
          alt="Tazrin Logo"
          width={250}
          height={37}
          priority
        />
      <div>
         <p className=" font-semibold text-lg">Website Under Construction....</p>
         <div className=" flex flex-col  justify-center pt-6 gap-2">
            <p className=" text-center font-bold ">Contact Info:</p>
            <div className="flex flex-row gap-6 items-center">
            <IoIosMail />
            <a className=" text-[#0D57F6]" href="mailto:tazrininternational@gmail.com">tazrininternational@gmail.com</a>
            </div>
            {/* <div className="flex flex-row gap-6 items-center">
            <FaPhoneVolume />
            <a className=" text-[#0D57F6]" href="tel:+8801886314109">+8801886314109</a>
            </div> */}
         </div>
      </div>
      
    </main>
  );
}
