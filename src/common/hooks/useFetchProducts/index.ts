import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import { IProductService } from "../../interfaces/productService.interface";

export const useFetchProducts = (productService: IProductService) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const productData = await productService.fetchProducts();
        setProducts(productData);
        setIsLoading(false);
      } catch (err) {
        setError("Erro ao carregar os produtos.");
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [productService]);

  return { products, isLoading, error };
};
