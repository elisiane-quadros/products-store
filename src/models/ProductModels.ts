export interface ProductModel{
  id: number | null;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductArrayModel{
  count: number | null;
  products: ProductModel[];
}
