import { CATEGORIES_BASE_URL } from "../../constants/endpoints";
import { ICategoryService } from "../../interfaces/categoryService.interface";
import { IHttp } from "../../interfaces/http.interface";
import Http from "../../lib/httpClient";
import { Category } from "../../types/category";

export const CategoryService = (): ICategoryService => {
  const http: IHttp = Http();

  return {
    fetchCategories: async () => {
      try {
        const response = await http.get<{ categories: Category[] }>(
          CATEGORIES_BASE_URL
        );
        return response.categories;
      } catch (error) {
        throw new Error("Erro ao buscar categorias");
      }
    },
  };
};
