import { CategoriesNamesEnum } from './CategoriesNames.enum';
import { IProduct } from './IProduct';

export interface IProductCategory {
  id: number;
  title: CategoriesNamesEnum;
  data: IProduct[];
}
