import Image from "next/image";

// redux
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setCart } from "@/store/cartSlice";

// MaterialUI
import { CartItemModel } from "@/models/cartModels";
import Grid from "@mui/material/Grid";

// Styles
import { CartItemContainer, CountBox } from "./styles";

interface CartItemProps {
  cartProduct: CartItemModel;
}

const CartItem = ({ cartProduct }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.productsStore?.products);
  const cart = useAppSelector((state) => state.cartStore.cart);

  const product = allProducts.find((prod) => prod?.id === cartProduct?.id);
  const price =
    product?.price &&
    cartProduct?.qtd &&
    (parseInt(product?.price) * cartProduct?.qtd).toLocaleString("pt-BR", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "BRL",
    });

  const removeProduct = () => {
    const newCart = cart.filter((ct) => ct?.id !== cartProduct?.id);
    console.log(newCart);
    dispatch(setCart(newCart));
  };

  const decreaseQtd = () => {
    if (cartProduct?.qtd) {
      if (cartProduct?.qtd > 1) {
        const newQtd = cartProduct?.qtd - 1;
        const newCart = cart.map((ct) => {
          if (ct?.id === cartProduct?.id) {
            return { ...cartProduct, qtd: newQtd };
          } else {
            return ct;
          }
        });
        dispatch(setCart(newCart));
      }
      if (cartProduct?.qtd === 1) {
        removeProduct();
      }
    }
  };

  const increaseQtd = () => {
    if (cartProduct?.qtd) {
      const newQtd = cartProduct?.qtd + 1;
      const newCart = cart.map((ct) => {
        if (ct?.id === cartProduct?.id) {
          return { ...cartProduct, qtd: newQtd };
        } else {
          return ct;
        }
      });
      dispatch(setCart(newCart));
    }
  };

  return (
    <CartItemContainer>
      <button onClick={removeProduct}>x</button>
      <Grid container spacing={2} className="gridContainer">
        <Grid item md={3} sm={3} xs={12} className="imageContainer">
          <Image
            src={product?.photo ? product?.photo : ""}
            width={50}
            height={50}
            alt={product?.name ? product?.name : ""}
            className="imageProduct"
          />
        </Grid>
        <Grid item md={3} sm={3} xs={12} className="nameContainer">
          {product?.name}
        </Grid>
        <Grid item md={3} sm={3} xs={6} className="qtdContainer">
          <p className="qtdText">Qtd:</p>
          <CountBox>
            <div className="lessBox" onClick={decreaseQtd}>
              -
            </div>
            <div className="divider " />
            <div className="qtdBox">{cartProduct?.qtd}</div>
            <div className="divider " />
            <div className="plusBox" onClick={increaseQtd}>
              +
            </div>
          </CountBox>
        </Grid>
        <Grid item md={3} sm={3} xs={6} className="priceContainer">
          <div className="productPrice">{price}</div>
        </Grid>
      </Grid>
    </CartItemContainer>
  );
};

export default CartItem;
