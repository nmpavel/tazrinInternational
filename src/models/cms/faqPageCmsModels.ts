export interface FAQDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    question: string;
    answer: string;
}

export interface PageCMSDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    title: string;
    heading: string;
    subTitle: string;
}
