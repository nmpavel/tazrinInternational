export interface Retailers {
    message: string;
    status: string;
    statusCode: number;
    data: Retailer[];
}

export interface Retailer {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    retailerName: string;
    address: string;
    latitude: string;
    longitude: string;
    retailerLink: string;
    isActive: number;
    services: string;
}
