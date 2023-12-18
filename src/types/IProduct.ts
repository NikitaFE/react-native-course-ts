export interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  picture: string;
  isInFavorite: boolean;
  oldPrice?: number;
  isNew?: boolean;
}
