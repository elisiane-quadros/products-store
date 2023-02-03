import React, { useEffect, useState } from "react";

// redux
import { useAppSelector } from "../../hooks/redux-hooks";

// MaterialUI
import { Drawer } from "@mui/material";

// Local components
import CartItem from "../CartItem";

// Styles
import { CartContainer, ButtonFinished } from "./styles";

// Models
import { CartItemModel } from "@/models/cartModels";

interface CartProps {
  openCart: boolean;
  onClose: () => void;
}

const Cart = ({ openCart, onClose }: CartProps) => {
  const cart = useAppSelector((state) => state.cartStore.cart);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let amount = 0;
    cart.map((ct) => {
      const priceNumber = parseInt(ct?.price);
      amount = amount + priceNumber * ct?.qtd;
    });
    setTotalPrice(amount);
  }, [cart]);

  return (
    <Drawer
      anchor={"right"}
      open={openCart}
      onClose={onClose}
      variant="temporary"
    >
      <div>
        <CartContainer>
          <div className="headerContainer">
            <h1>
              <p>Carrinho</p>
              <p>de compras</p>
            </h1>
            <button onClick={onClose}>X</button>
          </div>
          <div className="cartItemContainer">
            {cart.map((ct: CartItemModel) => {
              if (ct?.qtd) {
                return <CartItem key={ct?.id} cartProduct={ct} />;
              }
              return <></>;
            })}
          </div>
          <div className="totalContainer">
            <p>Total</p>
            <p>
              {totalPrice.toLocaleString("pt-BR", {
                maximumFractionDigits: 0,
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </CartContainer>
        <ButtonFinished>Finalizar Compra</ButtonFinished>
      </div>
    </Drawer>
  );
};

export default Cart;
