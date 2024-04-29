export interface HeroSectionCMSDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    title: string;
    buttonText?: string;
    buttonLink?: string;
}

export interface HeroSectionCRUDDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    image: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}