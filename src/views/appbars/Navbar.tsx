"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Nav_pc from "./Nav_pc";
import Nav_pn from "./Nav_pn";
import Nav from "./StickyNav";

type Props = {};

const Navbar = (props: Props) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const pn = usePathname();

    if (pn === "/" && scrollY < 100) {
        return (
            <>
                <Nav>
                    <div className={`bg-white fixed w-full text-sc`}>
                        <div className="flex justify-center items-center">
                            <Nav_pc />
                        </div>
                        <Nav_pn />
                    </div>
                </Nav>
                {pn !== "/" && (
                    <PageTitle path={pn} />
                )}
            </>
        );
    } else {
        return (
            <>
                <Nav>
                    <div className={`bg-white text-sc `}>
                        <Nav_pc />
                        <Nav_pn />
                    </div>
                </Nav>
                {pn !== "/" && pn !== "/retailers" && (
                    <PageTitle path={pn} />
                )}
            </>
        );
    }
};

export default Navbar;

export const NavItem = ({ href, children }: any) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`${pathname === href ? "md:border-b-2 md:border-pc" : ""
                } lg:px-4 lg:my-0 lg:py-1 transition-all duration-200 text-base`}
        >
            {children}
        </Link>
    );
};

export const navData = [
    {
        id: 3,
        name: "PROJECTS",
        link: "#",
    },
    {
        id: 4,
        img: "/images/logo.png",
    },
    {
        id: 5,
        name: "ABOUT US",
        link: "#",
    },
    {
        id: 6,
        name: "BLOGS",
        link: "#",
    },
    {
        id: 7,
        name: "CONTACT US",
        link: "#",
    },
];

export const PageTitle = (p: { path: string }) => {
    const pathname = p.path;

    let page =
        pathname.replace("/", "").charAt(0).toUpperCase() +
        pathname.replace("/", "").slice(1);
    pathname.startsWith("/blog/") && (page = "Blog Details");
    pathname.startsWith("/projects/") && (page = "Project Details");
    pathname.startsWith("/strains/") && (page = "Strains Details");
    pathname.startsWith("/terms") && (page = "Terms and Services");
    pathname.startsWith("/privacy") && (page = "Privacy Policy");
    pathname.startsWith("/career/") && (page = "Job Details");
    const pageName1 = (pathname.split("/")[1] ? pathname.split("/")[1] : "");
    const pageName2 = (pathname.split("/")[2] ? pathname.split("/")[2] : "");
    const pageName3 = (pathname.split("/")[3] ? pathname.split("/")[3] : "");

    let pageWithDash: any = []
    if (page == "Privacy Policy" || page === "Terms and Services") {
        pageWithDash = pageName1 ? pageName1.split("-") : []
    }

    const pageSlug = pageName2 ? pageName2.split("-") : []

    return (
        <div className="flex justify-center items-center flex-col bg-[#333333] text-white py-3 md:py-4">
            <h1 className=" text-2xl md:text-3xl capitalize">{page}</h1>
            <div className="flex gap-1">
                <Link href={"/"} className="text-sm md:text-base capitalize">
                    Home </Link>
                {pageWithDash.length > 0 ?
                    <> / {pageWithDash.map((item: any, index: number) => <p key={index} className="text-sm md:text-base capitalize"> {item}</p>)}</>
                    :
                    pageName1 && <Link href={`/${pageName1}`} className="text-sm md:text-base capitalize">
                        / {pageName1 && pageName1}</Link>
                }
                {pageSlug.length > 0 && <p className="text-sm md:text-base capitalize"> /</p>}

                {pageSlug.length > 0 && pageSlug.slice(0, 4).map((item, index) => <p key={index} className="text-sm md:text-base capitalize"> {item}</p>)
                }
            </div>
        </div>
    )
};
