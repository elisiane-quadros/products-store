export interface CartItemModel {
  id: number | null;
  qtd: number;
  price: string;
}

export interface CartModel {
  cart: CartItemModel[]
}