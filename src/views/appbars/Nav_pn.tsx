import Drower from '@/components/Drower/Drower';
import { useGlobalStore } from '@/store/global.store';
import { imageLoader } from '@/utils/imageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { NavItem, navData } from './Navbar';

type Props = {};

const Nav_pn = (p: Props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [headerFooterCmsData] = useGlobalStore((store: any) => [store.headerFooterCmsData])

    return (
        <nav className="lg:hidden flex items-center px-3 z-50">
            {/* <RiBarChartHorizontalLine
                className="cursor-pointer"
                size={25}
                onClick={() => setNavbarOpen(true)}
            />
            <Link href="/" className="mx-auto">
                <Image loader={imageLoader}
                    src={headerFooterCmsData?.headerLogo ? headerFooterCmsData?.headerLogo : "/images/logo.png"} width={75} height={80} alt={'alt'} />
            </Link>

            <Drower
                open={navbarOpen}
                handleClose={() => setNavbarOpen(false)}
                ancor="left"
            >
                <div className="flex flex-col justify-center text-center text-sc">
                    {navData.map((item, i) =>
                        item.img ? (
                            ''
                        ) : (
                            <span key={i} className="my-3">
                                <NavItem href={item.link}><button onClick={() => setNavbarOpen(false)}>{item.name}</button></NavItem>
                            </span>
                        )
                    )}
                </div>
            </Drower> */}
            <div className=" w-full flex-1 flex flex-col justify-between items-center shadow-xl">
        <Link href="/">
          <Image
            loader={imageLoader}
            src={
              headerFooterCmsData?.headerLogo
                ? headerFooterCmsData?.headerLogo
                : "/images/logo.png"
            }
            width={150}
            height={72}
            alt="logo"
            className="mx-14"
          />
        </Link>
        <p className="lg:px-4 pb-4  text-base">Website Under Construction.........</p>
      </div>
        </nav>
    );
};

export default Nav_pn;
