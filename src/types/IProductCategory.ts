import { IProduct } from './IProduct';

export interface IProductCategory {
  id: number;
  title: string;
  data: IProduct[];
}
