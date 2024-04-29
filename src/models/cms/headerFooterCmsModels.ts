export interface HeaderFooterCMSDatum {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    heading?: string;
    logo?: string;
    footerDescription?: string;
    copyrightText?: string;
    buttonText?: string;
    buttonLink?: string;
    headerLogo?: string;
    footerLogo?: string;
    footerImage?: string;
    contactNumber?: string;
    footerText?: string;
}

export interface FooterBannerCMSDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    title: string;
    placeholderText: string;
    heading?: string;
}
export interface SocialLinkCMSDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    icon: string;
    link: string;
}

export interface HomePageCMS {
    id: string; createdAt: string; updatedAt: string; isDeleted: boolean, categorySectionTitle: string; categorySectionSubTitle: string; newArrivalSectionTitle: string;
    newArrivalSectionSubTitle: string; ourStrainSectionTitle: string; ourStrainSectionSubTitle: string; locationSectionTitle: string; locationSectionSubTitle: string;
    newsSectionTitle: string; newsSectionSubTitle: string;
}