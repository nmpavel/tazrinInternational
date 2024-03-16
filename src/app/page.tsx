import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/logo.png"
          alt="Tazrin Logo"
          width={250}
          height={37}
          priority
        />
      </div>
      <div>
         <p className=" font-semibold text-lg">Website Under Construction....</p>
         <div className=" flex flex-col  justify-center pt-6 gap-2">
            <p className=" text-center font-bold ">Contact Info:</p>
            <div className="flex flex-row gap-6 items-center">
            <IoIosMail />
            <a className=" text-[#0D57F6]" href="mailto:tazrininternational@gmail.com">tazrininternational@gmail.com</a>
            </div>
            <div className="flex flex-row gap-6 items-center">
            <FaPhoneVolume />
            <a className=" text-[#0D57F6]" href="tel:+8801886314109">+8801886314109</a>
            </div>
         </div>
      </div>
      
    </main>
  );
}
