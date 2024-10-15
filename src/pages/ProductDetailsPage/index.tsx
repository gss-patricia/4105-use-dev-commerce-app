import { useParams } from "react-router-dom";
import useFetch from "../../common/hooks/useFetch";
import Styles from "./ProductDetailsPage.module.css";
import Typography from "../../components/Typography";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { PRODUCTS_BASE_URL } from "../../common/constants/endpoints";
import { Product } from "../../common/types/product";
import StatusHandler from "../../common/utils/statusHandler";
import SimpleBanner from "../../components/SimpleBanner";
import { useMemo } from "react";
import { ProductDetailService } from "../../common/services/productDetailsService";
import { useFetchProductDetail } from "../../common/hooks/useFetchProductDetails";

type ProductDetailsPageProps = {
  addToCart: (product: Product) => void;
};

function ProductDetailsPage({ addToCart }: ProductDetailsPageProps) {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL

  const productDetailService = useMemo(() => ProductDetailService(), []);
  const { productDetail, isLoading, error } = useFetchProductDetail(
    id || "",
    productDetailService
  );

  return (
    <>
      <SimpleBanner backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-secoes.png" />
      <main className="container">
        <section>
          <div className={Styles.productContainer}>
            <Typography variant="h4">Detalhes do Produto</Typography>

            <StatusHandler isLoading={isLoading} error={error}>
              {productDetail ? (
                <ProductDetail
                  id={productDetail.id}
                  title={productDetail.label}
                  description={productDetail.description}
                  price={productDetail.price}
                  imageUrl={productDetail.imageSrc}
                  colors={productDetail.colors}
                  addToCart={addToCart}
                />
              ) : (
                <p>Produto não encontrado.</p>
              )}
            </StatusHandler>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetailsPage;
