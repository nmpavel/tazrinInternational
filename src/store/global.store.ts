import { FooterBannerCMSDatum, HeaderFooterCMSDatum, HomePageCMS } from "@/models/cms/headerFooterCmsModels";
import { HeroSectionCMSDatum } from "@/models/cms/homePageCmsModels";
import { data } from "autoprefixer";
import { create } from "zustand";

export const useGlobalStore = create<gloablStoreProps>((set: any) => ({
    quickView: { show: false, data: null },
    product: { data: null },
    callView: true,
    isLoading: true,
    heroSectionCmsData: { id: "", createdAt: "", updatedAt: "", isDeleted: false, title: "", buttonText: "", buttonLink: "" },
    newsletterCMS: { id: "", createdAt: "", updatedAt: "", isDeleted: false, title: "", subTitle: "", placeholderText: "", buttonText: "", hintText: "" },
    headerFooterCmsData: { id: "", createdAt: "", updatedAt: "", isDeleted: false, headerLogo: "", footerLogo: "", footerImage: "", contactNumber: "", footerText: "", copyrightText: "" },
    socialLinkData: [],
    heroSection: [],
    latestBlogData: [],
    latestProductData: [],
    retailerData: [],
    homePageCMS: {
        id: "", createdAt: "", updatedAt: "", isDeleted: false, categorySectionTitle: "", categorySectionSubTitle: "", newArrivalSectionTitle: "",
        newArrivalSectionSubTitle: "", ourStrainSectionTitle: "", ourStrainSectionSubTitle: "", locationSectionTitle: "", locationSectionSubTitle: "",
        newsSectionTitle: "", newsSectionSubTitle: ""
    },
    strainData: [],
    coupons: [],
    salesTaxCmsData: {},



    setQuickView: ({ show, data }: { show: boolean; data: data }) =>
        set({ quickView: { show, data } }),
    setProduct: ({ data }: { data: data }) => set({ product: { data } }),
    setCallView: (callView: boolean) => set({ callView }),
    setHeroSectionCmsData: (data: HeroSectionCMSDatum) => set(() => ({ heroSectionCmsData: data })),
    setNewsLetterCmsData: (data: any) => set(() => ({ newsletterCMS: data })),
    setHomePageCmsData: (data: HomePageCMS) => set(() => ({ homePageCMS: data })),
    setHeaderFooterCmsData: (data: HeaderFooterCMSDatum) => set(() => ({ headerFooterCmsData: data })),
    setSocialLinkData: (data: any) => set(() => ({ socialLinkData: data })),
    setLatestBlogData: (data: any) => set(() => ({ latestBlogData: data })),
    setStrainData: (data: any) => set(() => ({ strainData: data })),
    setRetailerData: (data: any) => set(() => ({ retailerData: data })),
    setHeroSectionData: (data: any) => set(() => ({ heroSection: data })),
    setLatestProductData: (data: any) => set(() => ({ latestProductData: data })),
    setCoupons: (data: any) => set(() => ({ coupons: data })),
    setSalesTaxCmsData: (data: any) => set(() => ({ salesTaxCmsData: data })),

    setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export interface gloablStoreProps {
    quickView: { show: boolean; data: data };
    socialLinkData: any[];
    latestBlogData: any[];
    latestProductData: any[];
    retailerData: any[];
    heroSection: any[];
    strainData: any[];
    product: { data: data };
    callView: boolean;
    isLoading: boolean;
    coupons: any;
    salesTaxCmsData: any;

    heroSectionCmsData: HeroSectionCMSDatum;
    newsletterCMS: FooterBannerCMSDatum;
    headerFooterCmsData: HeaderFooterCMSDatum;
    homePageCMS: HomePageCMS;
    //setLatestBlogData: (data: any) => void;
    setQuickView: ({ show, data }: { show: boolean; data: data }) => void;
    setProduct: ({ data }: { data: data }) => void;
    setCallView: (callView: boolean) => void;
}

type data = null | any;
