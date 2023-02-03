import React, { useState } from "react";

// redux
import { useAppSelector } from "../../hooks/redux-hooks";

// Icons
import { ShoppingCart } from "phosphor-react";

// Styles
import { HeaderContainer } from "./styles";

// Local components
import Cart from "../Cart";

const Header = () => {
  const cart = useAppSelector((state) => state.cartStore.cart);
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  return (
    <>
      <HeaderContainer>
        <div className="title">
          <h1>MKS</h1>
          <span>Sistemas</span>
        </div>
        <div className="cartCount" onClick={handleOpenCart}>
          <ShoppingCart size={20} color="#030303" weight="bold" />
          <span>{cart?.length}</span>
        </div>
      </HeaderContainer>
      <Cart openCart={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
};

export default Header;
