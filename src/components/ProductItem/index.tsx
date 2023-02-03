import { ProductItemArea, InCartButton, BuyButton } from "./styles";
import { ShoppingBagOpen } from "phosphor-react";
import Image from "next/image";

// Models
import { ProductModel } from "@/models/ProductModels";

// redux
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setCart } from "@/store/cartSlice";

interface ProductItemProps {
  product: ProductModel;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartStore.cart);

  const isInCart = cart.some((ct) => ct?.id === product?.id);
  const price =
    product?.price &&
    parseInt(product?.price).toLocaleString("pt-BR", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "BRL",
    });

  const addToCart = (id: number) => {
    dispatch(setCart([...cart, { id, qtd: 1, price: product?.price }]));
  };

  const handleBuyProduct = () => {
    if (product?.id) {
      addToCart(product?.id);
    }
  };

  return (
    <ProductItemArea>
      <div className="productContainer">
        <div className="imageContainer">
          <Image
            src={product?.photo}
            width={130}
            height={130}
            alt={product?.name}
          />
        </div>
        <div className="nameAndPriceContainer">
          <p className="productName">{product?.name}</p>
          <div className="productPrice">{price}</div>
        </div>
        <div className="productDescription">
          <p>{product?.description}</p>
        </div>
      </div>
      {isInCart ? (
        <InCartButton disabled>ADICIONADO</InCartButton>
      ) : (
        <BuyButton onClick={handleBuyProduct}>
          <ShoppingBagOpen size={16} color="#fafafa" weight="bold" />
          <span>COMPRAR</span>
        </BuyButton>
      )}
    </ProductItemArea>
  );
};

export default ProductItem;
