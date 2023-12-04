import { FilterNamesEnum } from './FilterNames.enum';

export interface IProductFilters {
  [FilterNamesEnum.IS_NEW]?: boolean;
  [FilterNamesEnum.TITLE]?: string;
}
