export interface ProjectListDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    title: string;
    description: string;
    buttonText: string;
    heading: string;
    image: string;
    urlSlug?: string;
    videoThumbnail?: string;
}

export interface ProjectPageCMSDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    image: null;
    title: string;
    subTitle: null;
}
