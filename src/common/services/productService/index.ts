// services/productService.ts
import { IHttp } from "../../interfaces/http.interface";
import { PRODUCTS_BASE_URL } from "../../constants/endpoints";
import { Product } from "../../types/product";
import Http from "../../lib/httpClient";
import { IProductService } from "../../interfaces/productService.interface";

export const ProductService = (): IProductService => {
  const http: IHttp = Http(); // Usa o serviço HTTP abstrato

  return {
    fetchProducts: async () => {
      try {
        const response = await http.get<{ products: Product[] }>(
          PRODUCTS_BASE_URL
        );
        return response.products;
      } catch (error) {
        throw new Error("Erro ao buscar produtos");
      }
    },
  };
};
