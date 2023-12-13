import { CategoriesNamesEnum } from './CategoriesNames.enum';
import { IProductCategory } from './IProductCategory';

export type ProductsDrawerParamList = {
  [K in CategoriesNamesEnum]: { category: IProductCategory };
};
