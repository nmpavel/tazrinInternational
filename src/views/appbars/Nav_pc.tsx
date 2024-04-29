"use client";
import { useGlobalStore } from "@/store/global.store";
import { imageLoader } from "@/utils/imageLoader";
import Image from "next/image";
import Link from "next/link";
import { NavItem, navData } from "./Navbar";

type Props = {};

const Nav_pc = (p: Props) => {
  const [headerFooterCmsData] = useGlobalStore((store: any) => [
    store.headerFooterCmsData,
  ]);
  return (
    <nav className="hidden relative w-full lg:flex justify-between items-center ">
      {/* <div className="flex-1 flex justify-center items-center">
                {navData.map((item, i) =>
                    item.img ? (
                        <Link key={i} href="/">
                            <Image
                                loader={imageLoader}
                                src={headerFooterCmsData?.headerLogo ? headerFooterCmsData?.headerLogo : "/images/logo.png"}
                                width={120}
                                height={72}
                                alt="logo"
                                className="mx-14"
                            />
                        </Link>
                    ) : (
                        <NavItem key={i} href={item.link}>
                            {item.name}
                        </NavItem>
                    )
                )}
          
            </div> */}
      <div className=" w-full flex-1 flex justify-between items-center shadow-xl">
        <Link href="/">
          <Image
            loader={imageLoader}
            src={
              headerFooterCmsData?.headerLogo
                ? headerFooterCmsData?.headerLogo
                : "/images/logo.png"
            }
            width={120}
            height={72}
            alt="logo"
            className="mx-14"
          />
        </Link>
        <p className="lg:px-4 text-base">Website Under Construction.........</p>
      </div>
    </nav>
  );
};

export default Nav_pc;
