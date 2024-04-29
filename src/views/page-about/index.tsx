"use client";
import { useLoading } from "@/hooks/useLoading";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

interface Props {

};

const AboutUi = ({  }: Props) => {
    const router = useRouter();
    // const sectionOne = data.sectionOneCmsData[0];
    // const sectionTwo = data.sectionTwoCmsData[0];
    // const sectionThree = data.sectionThreeCmsData[0];
    // const sectionFour = data.sectionFourCmsData[0];
    // let faqCMS;
    // if (data.faqPageCmsData) faqCMS = data.faqPageCmsData[0];
    const AboutData = [
        {
            title: "Supplier Company",
            desc: "Welcome to Tazrin International, your premier supplier of diverse and quality products. Established with the vision to meet global demands with excellence and reliability, Tazrin International is a leading supplier specializing in a wide range of products, including textiles, electronics, construction materials, food and dairy items, and IT solutions.At Tazrin International, we believe in building strong relationships with our clients by providing top-quality products and exceptional service.Our commitment to sustainability and ethical practices ensures that while we cater to your needs, we also take care of our planet. Tazrin International operates across districts, ensuring a seamless supply chain and timely delivery regardless of your location. Choose Tazrin International as your trusted partner for quality, diversity, and reliability. Let us help you achieve your goals with our comprehensive range of products and dedicated customer support.",
            image: "/images/supplier.jpeg"
        },
        {
            title: "IT Solutions",
            desc: "At Tazrin International, our IT services division offers a wide array of software and hardware solutions designed to empower your business. From developing custom software and automated tools that streamline operations to providing robust hardware procurement and installation, we cover all your technological needs. Our expertise also extends to deploying enterprise resource planning (ERP) systems, ensuring seamless integration and enhanced efficiency across your business processes. Whether you're looking to modernize your IT infrastructure or optimize your operational workflows, Tazrin International is your partner in navigating the complexities of today’s digital landscape.",
            image: "/images/software.jpeg",
        },
        {
            title: "Food Products",
            desc: "We take pride in our comprehensive range of high-quality food products, with a special emphasis on dairy. Operating our very own dairy firm, we are committed to delivering freshness and excellence. Our product line includes a diverse array of dairy items—from milk and cheese to yogurt and butter, all produced under stringent quality controls to ensure purity and taste. We also delight our customers with a variety of fresh sweets and ice creams, crafted from the finest ingredients and traditional recipes to offer an authentic and delicious experience. Whether you’re seeking everyday dairy essentials or indulgent treats, Tazrin International provides premium products that cater to both health and taste.",
            image: "/images/agro.jpeg",
        },
        {
            title: "Rental Service",
            desc: "In addition to our diverse product range, Tazrin International proudly offers convenient rental services for transportation needs. Whether you require the agility of a bike, the comfort of a car, the spaciousness of a micro-bus, or the utility of a pickup van, we have you covered. Our rental fleet is meticulously maintained and readily available to cater to your travel requirements, whether for business or leisure. With flexible rental options and competitive rates, Tazrin International ensures a hassle-free experience, allowing you to focus on your journey with peace of mind.",
            image: "/images/rent.jpg",
        },
    ];
    const isLoading = useLoading()
    return (
       <div className="pt-24">
        {isLoading ?
                <div className="_container">
                    {Array.from({ length: AboutData?.length > 0 ? AboutData?.length : 3 }, (_, index) => index)?.map((i) =>
                        <div key={i}>
                            <div className="h-[325px] md:h-[500px] bg-gray-200 animate-pulse mt-8"></div>
                            <div className="h-[40px] bg-gray-200 animate-pulse mt-3"></div>
                            <div className="h-[100px] bg-gray-200 animate-pulse mt-3"></div>
                        </div>)}
                </div> :
                <div className="_container">
                    {AboutData.map((about, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.8 }}
                            className="py-8"
                        >
                            <div className=" hidden lg:flex">
                            <Image
                                src={about.image}
                                width={1296}
                                height={500}
                                className="h-[325px] sm:h-auto object-cover transition-opacity blur-sm"
                                onLoadingComplete={image => image.classList.remove("blur-sm")}
                                alt="slider"
                            />
                            </div>
                            <div className=" lg:hidden">
                            <img  src={about.image} className=" w-full h-56"/>
                            </div>
                            <h2 className="text-xl md:text-4xl text-sc font-font650 my-5">
                                {about.title}
                            </h2>
                            <div className="font-medium text-gray65 text-justify" dangerouslySetInnerHTML={{ __html: about.desc }} />
                            {/* {about.isButton && (
                                <ButtonPrimary
                                    onClick={() => router.push(about.buttonLink!)}
                                    primary
                                    tw="text-sc rounded-[2px] mt-6"
                                >
                                    {about.buttonText}
                                </ButtonPrimary>
                            )} */}
                        </motion.div>
                    ))}

                </div>
            }
       </div>
    );
};

export default AboutUi;

