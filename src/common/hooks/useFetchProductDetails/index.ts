import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import { IProductDetailService } from "../../interfaces/productDetailsService.interface";

type FetchProductDetailResult = {
  productDetail: Product | null;
  isLoading: boolean;
  error: string | null;
};

export const useFetchProductDetail = (
  id: string,
  productDetailService: IProductDetailService
): FetchProductDetailResult => {
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setIsLoading(true);
        const product = await productDetailService.fetchProductDetail(id);
        setProductDetail(product);
        setIsLoading(false);
      } catch (err) {
        setError((err as Error).message || "Erro ao carregar o produto.");
        setIsLoading(false);
      }
    };

    fetchDetail();
  }, [id, productDetailService]);

  return { productDetail, isLoading, error };
};
