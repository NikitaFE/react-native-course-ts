import { IProduct } from './IProduct';
import { NavigationNames } from './NavigationNames.enum';
import { ProductsDrawerParamList } from './ProductsDrawerParamList.type';

export type ProductsStackParamList = {
  [NavigationNames.PRODUCTS]: undefined;
  [NavigationNames.PRODUCT]: { product: IProduct };
  [NavigationNames.FAVORITES]: undefined;
} & ProductsDrawerParamList;
