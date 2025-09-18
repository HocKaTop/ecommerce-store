export interface Billboard{
    id:string;
    label:string;
    imageUrl:string

}

export interface Category{
    id:string;
    name:string;
    billboardID:string;
    storeID:string;
    createdAt:string;
    updatedAt:string;
}