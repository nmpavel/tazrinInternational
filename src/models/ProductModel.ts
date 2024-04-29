export interface Product {
	id: string;
	createdAt: string;
	updatedAt: string;
	isDeleted: boolean;
	name: string;
	urlSlug: string;
	projectId: string;
	projectName: string;
	featuredImage: string;
	strainId: string;
	strainName: string;
	strainType: string;
	aroma: string;
	experience: string;
	flavour: string;
	availableIn: string;
}