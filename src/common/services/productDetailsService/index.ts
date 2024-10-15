import { PRODUCTS_BASE_URL } from "../../constants/endpoints";
import { IHttp } from "../../interfaces/http.interface";
import { IProductDetailService } from "../../interfaces/productDetailsService.interface";
import Http from "../../lib/httpClient";
import { Product } from "../../types/product";

export const ProductDetailService = (): IProductDetailService => {
  const http: IHttp = Http();

  return {
    fetchProductDetail: async (id: string) => {
      try {
        const response = await http.get<{ products: Product[] }>(
          PRODUCTS_BASE_URL
        );
        const product = response.products.find(
          (product) => product.id.toString() === id
        );

        if (!product) {
          throw new Error("Produto não encontrado");
        }

        return product;
      } catch (error) {
        throw new Error("Erro ao buscar detalhes do produto");
      }
    },
  };
};
