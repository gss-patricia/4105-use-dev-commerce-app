import { Product } from "../types/product";

export interface IProductDetailService {
  fetchProductDetail: (id: string) => Promise<Product>;
}
