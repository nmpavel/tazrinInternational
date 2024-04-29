'use client';
import Loader from '@/components/Loader';
import { useLoading } from '@/hooks/useLoading';
import useToast from '@/hooks/useToast';
import { useGlobalStore } from '@/store/global.store';
import { imageLoader } from '@/utils/imageLoader';
import { validateEmail } from '@/utils/validation.utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BsTelephoneInbound } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosMail, IoMdCall } from 'react-icons/io';

type Props = {};

const Footer = (props: Props) => {
    const [headerFooterCmsData, socialLinkData] = useGlobalStore((store: any) => [store.headerFooterCmsData, store.socialLinkData])

    const pn = usePathname()
    // if (pn === "/retailers") {
    //     return <div></div>
    // }


    const footerLinks = [
        {
            title: 'Quick Link',
            links: [
                { title: 'Projects', url: '#' },
                { title: ' About', url: '#' },
                { title: ' Blogs', url: '#' },
                { title: 'Find a Store', url: '/' },
            ],
        },
        {
            title: '',
            links: [
                { title: 'Find a Store', url: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { title: 'About', url: '#' },

                { title: 'Career', url: '#' },
                { title: 'Contact Us', url: '#' },
            ],
        },
        {
            title: 'Exclusive Services',
            links: [
                { title: `Call Us: +8801827784232`, url: `tel:+8801827784232`, icon: <BsTelephoneInbound /> },
                { title: `Email Us:  hello.tazrinintl@gmail.com`, url: `mailto:hello.tazrinintl@gmail.com`, icon: <IoIosMail /> },
            ],
        },
    ];

    return (
        <div className=" ">
            {/* <FooterCard /> */}
            <div className=" bg-[#333]">
                <footer className="mt-6 md:mt-0 md:pb-16 pb-8 pt-8 md:pt-2 _container">
                    <div className="">
                        <div className="md:pt-16 pt-5 grid md:grid-cols-12 grid-cols-1 gap-y-5 md:gap-y-0">
                            <div className=" flex flex-col gap-5 items-center col-span-3 ">
                                <Image
                                    loader={imageLoader}
                                    src={headerFooterCmsData?.footerLogo ? headerFooterCmsData?.footerLogo : "/images/footerLogo.png"}
                                    width={150}
                                    height={117}
                                    className="object-contain"
                                    alt="logo"
                                />

                                <div className="flex gap-5 text-white md:mt-3 ">
                                    {socialLinkData?.map((item: any, index: number) => {
                                        return (
                                            <Link key={index} target='_blank' href={item?.link}>
                                                <Image
                                                    className="h-[16px] w-full curosr-pointer"
                                                    style={{ objectFit: "cover" }}
                                                    loader={imageLoader}
                                                    src={item?.icon}
                                                    alt="get-started"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* {/* For Desktop */}
                            <div className="flex-1 w-full justify-between flex-wrap col-span-9 items-center flex-row hidden md:flex pt-5">
                                {footerLinks.slice(0, 1).map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-2 text-base min-w-[170px] md:h-[200px] flex-wrap md:gap-x-10 _quick-link"
                                    >
                                        <h3 className=" font-[500] text-xl text-white">
                                            {item.title}
                                        </h3>
                                        {item.links.map((item: any) => (
                                            <Link
                                                key={item.title}
                                                href={item.url}
                                                className={`text-white font-medium text-base h-[1.8rem] ${item.icon ? 'flex gap-2 items-center' : ''
                                                    }`}
                                            >
                                                {item?.icon}
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                                {/* <Image
                                    loader={imageLoader}
                                    src={headerFooterCmsData?.footerImage ? headerFooterCmsData?.footerImage : "/images/image 335.svg'"}
                                    width={107}
                                    height={103}
                                    alt="logo"
                                    className=" md:ml-10 md:-mt-[5rem]"
                                /> */}

                                {footerLinks.slice(2, 4).map((item, i) => (
                                    <div
                                        key={item.title}
                                        className="flex flex-col gap-2 text-base min-w-[170px] md:h-[200px] flex-wrap md:gap-x-10"
                                    >
                                        <h3 className=" font-[500] text-xl text-white">
                                            {item.title}
                                        </h3>
                                        {item.links.map((item: any) => (
                                            <Link
                                                key={item.title}
                                                href={item.url}
                                                className={`text-white font-medium text-base ${item.icon ? 'flex gap-2 items-center' : ''
                                                    }`}
                                            >
                                                {item?.icon}
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            {/* For Mobile */}
                            <div className="mb-5 md:hidden">
                                <div className="flex justify-between text-center">
                                    {footerLinks.slice(0, 1).map((item, i) => (
                                        <div
                                            key={item.title}
                                            className="flex flex-col gap-2 text-base min-w-[170px]  "
                                        >
                                            <h3 className=" font-[500] text-xl text-white">
                                                {item.title}
                                            </h3>
                                            {item.links.map((item: any) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.url}
                                                    className={`text-white font-medium text-base ${item.icon ? 'flex gap-2 items-center' : ''
                                                        }`}
                                                >
                                                    {item?.icon}
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}

                                    {footerLinks.slice(2, 3).map((item, i) => (
                                        <div
                                            key={item.title}
                                            className="flex flex-col gap-2 text-base min-w-[170px] "
                                        >
                                            <h3 className=" font-[500] text-xl text-white">
                                                {item.title}
                                            </h3>
                                            {item.links.map((item: any) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.url}
                                                    className={`text-white font-medium text-base ${item.icon ? 'flex gap-2 items-center' : ''
                                                        }`}
                                                >
                                                    {item?.icon}
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <div className=''>
                                <Link href="tel:+8801827784232" className="mx-auto flex flex-col md:flex-row items-center gap-x-5 py-5 ml-2 md:ml-12 justify-center">
                                    <IoMdCall size={40} className=" text-[#F5A800] mb-2" />
                                    <div>
                                        <p className="text-center text-lg font-normal text-white leading-[21.58px] mb-2">
                                            Call Now : +8801827784232
                                        </p>
                                    </div>
                                </Link>
                                <Link href="mailto:hello.tazrinintl@gmail.com" className="mx-auto flex flex-col md:flex-row items-center gap-x-5 py-5 ml-2 md:ml-12 justify-center">
                                    <IoIosMail size={40} className=" text-[#F5A800] mb-2" />
                                    <div>
                                        <p className="text-center text-lg font-normal text-white leading-[21.58px] mb-2">
                                            Email Us : hello.tazrinintl@gmail.com
                                        </p>
                                    </div>
                                </Link>
                                </div>
                               
                            </div>
                        </div>
                        {/* Last Footer */}
                    </div>
                    <div className=" flex justify-center items-center flex-col gap-y-3 ">
                        <p className="text-xs text-[#FFFFFF] font-medium text-center md:text-left">
                            <Link href="/terms-and-services" className="underline">
                                Terms & Conditions
                            </Link>{' '}
                            I{' '}
                            <Link href="/privacy-policy" className="underline">
                                Privacy Policy
                            </Link>{' '}
                            {headerFooterCmsData?.copyrightText}
                        </p>
                        <p className="text-xs text-[#FFFFFF] font-medium text-center md:text-left">
                            {headerFooterCmsData?.footerText}
                        </p>
                        <p className="md:text-sm text-white text-xs">
                           All rights reserved by Tazrin International
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;


const FooterCard = () => {
    const isLoading = useLoading()
    const [newsletterCMS] = useGlobalStore((store: any) => [store.newsletterCMS])
    const { success, warn, error } = useToast();
    //const [token] = useUserData((s) => [s.token])

    const [email, setEmail] = useState("");
    const [showLoader, setShowLoader] = useState(false);

    const validateForm = (data: any) => {
        setShowLoader(true);
        if (!data) {
            warn(`Please enter a email.`);
            setShowLoader(false);
            return false;
        }
        else if (!validateEmail(data)) {
            warn(`Please enter a correct email.`);
            setShowLoader(false);
            return false;
        }
        return true
    }

    // const mutation = useMutation((body: any) => postData({ url: api.contactus.newsLetter, body }));
    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    //     if (validateForm(email)) {
    //         setShowLoader(true);
    //         try {
    //             const response = await mutation.mutateAsync({ "email": email });
    //             if (response?.statusCode == 201) {
    //                 success("Successfully submitted email.");
    //                 setShowLoader(false);
    //                 setEmail("");
    //             } else {
    //                 error(response?.message);
    //                 setShowLoader(false);
    //             }
    //         } catch (e: any) {
    //             error(e?.data?.message);
    //             setShowLoader(false);
    //         }
    //     }
    // };

    return (
        <>
            {showLoader && <Loader />}
            {isLoading ?
                <div className="_container">
                    <div className=" md:w-[100%] md:h-[309px] w-[341px] h-[259px] mx-auto bg-gray-200 animate-pulse rounded-md flex gap-4 items-center justify-center shadow-2xl flex-col md:translate-y-[3rem] p-8 mb-8 md:mb-0">

                        <div className="bg-gray-400 animate-pulse rounded-md w-[300px]  h-[100px] mt-4 "></div>
                        <div className=" bg-gray-400 animate-pulse rounded-md w-[600px]  h-[60px] "></div>
                        <div className=" bg-gray-400 animate-pulse rounded-md w-[600px] h-[100px] mt-4 "></div>
                        <div className=" bg-gray-400 animate-pulse rounded-md w-[300px] h-[40px] "></div>
                    </div>
                </div>
                :
                <div className="_container">
                    <div className=" md:w-[100%] md:h-[309px] w-[341px] h-[259px] mx-auto bg-white rounded-md flex items-center justify-center shadow-2xl flex-col md:translate-y-[3rem] p-8 mb-8 md:mb-0">
                        <h2 className=" md:text-[36px] font-[650] md:leading-[43.2px] text-[#333] text-[25px] leading-[30px]">
                            {newsletterCMS?.title}
                        </h2>
                        <p className=" md:text-base font-medium text-[#333] mt-3 text-sm text-center md:text-left">
                            {newsletterCMS?.subTitle}
                        </p>
                        <form method="post">
                            <div className=" flex items-center md:mt-8 mt-4">
                                <div className="flex items-center border rounded-md px-2 py-3 rounded-r-none ">
                                    <HiOutlineMail className="text-[#C5C5C5] mr-2" size={20} />
                                    <input
                                        type="email"
                                        placeholder={newsletterCMS?.placeholderText}
                                        className="focus:outline-none md:w-[450px] w-[180px]"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="px-4 py-3 bg-[#F5A800] text-[#333333] rounded-r-md -ml-1">
                                    {newsletterCMS?.buttonText}
                                </button>
                            </div>
                        </form>

                        <p className=" text-xs font-medium text-[#333] mt-3 text-center md:text-left">
                            {newsletterCMS?.hintText}
                        </p>
                    </div>
                </div>
            }
        </>

    );
};
