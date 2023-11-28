export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  picture: string;
  isInFavorite: boolean;
  oldPrice?: number;
  isNew?: boolean;
}
