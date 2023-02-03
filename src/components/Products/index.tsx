import React, { useEffect, useState } from "react";

// Local components
import ProductItem from "../ProductItem";
import { ProductsContainer } from "./styles";

// redux
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getProducts } from "../../store/productsActions";

// Models
import { ProductModel } from "../../models/ProductModels";
import Skeleton from "@mui/material/Skeleton";

const Products = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.productsStore?.products);

  const [loading, setLoading] = useState(false);

  /* NOTE: Adicionado o 'setTimeout' no 'useEffect' abaixo apenas
    para poder perceber os efeitos do Skeleton durante a requisição. */
  useEffect(() => {
    setLoading(true);
    dispatch(getProducts());
    setLoading(false);
    setTimeout(() => setLoading(false), 2000);
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        allProducts.length > 1 || allProducts[0]?.id ? (
          <div className="productsListContainer">
            {allProducts.map((prod: ProductModel) => {
              return <ProductItem key={prod?.id} product={prod} />;
            })}
          </div>
        ) : (
          <div className="notFoundProducts">
            <p>Nenhum produto encontrado no momento,</p>
            <p>Por favor, tente novamente mais tarde.</p>
          </div>
        )
      ) : (
        <div className="productsListContainer">
          <Skeleton variant="rounded" width={218} height={285} />
          <Skeleton variant="rounded" width={218} height={285} />
          <Skeleton variant="rounded" width={218} height={285} />
          <Skeleton variant="rounded" width={218} height={285} />
          <Skeleton variant="rounded" width={218} height={285} />
          <Skeleton variant="rounded" width={218} height={285} />
          <Skeleton variant="rounded" width={218} height={285} />
          <Skeleton variant="rounded" width={218} height={285} />
        </div>
      )}
    </ProductsContainer>
  );
};

export default Products;
