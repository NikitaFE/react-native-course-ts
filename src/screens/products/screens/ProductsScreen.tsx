import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './ProductsScreen.styles';
import { mockedProducts } from '../../../data';
import { IProductCategory } from '../../../types/IProductCategory';
import { COLORS } from '../../../theme/colors';
import ProductList from '../components/ProductList/ProductList';
import ProductSearch from '../components/ProductSearch/ProductSearch';
import ProductModal from '../components/ProductModal/ProductModal';
import FilterModal from '../components/FilterModal/FilterModal';
import { IProductFilters } from '../../../types/IProductFilters';
import { FilterNamesEnum } from '../../../types/FilterNames.enum';

const ProductsScreen = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isFilterModalOpened, setIsFilterModalOpened] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [products, setProducts] = useState<IProductCategory[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<
    IProductCategory[] | null
  >(null);
  const [filters, setFilters] = useState<IProductFilters>({});

  useEffect(() => {
    setIsProductsLoading(true);

    const timerId = setTimeout(() => {
      setProducts(mockedProducts);
      setFilteredProducts(mockedProducts);
      setIsProductsLoading(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    let newFilteredProducts = products;

    if (Object.keys(filters).length) {
      for (let filter in filters) {
        switch (filter) {
          case FilterNamesEnum.TITLE:
            newFilteredProducts = filterProductsByTitleSubstring(
              newFilteredProducts,
              filters[filter] ?? ''
            );
            break;
          case FilterNamesEnum.IS_NEW:
            newFilteredProducts = filterProductsByIsNewField(
              newFilteredProducts,
              filters[filter] ?? false
            );
            break;
        }
      }
    }

    setFilteredProducts(newFilteredProducts);
  }, [filters]);

  const onSearchValueChange = (value: string) => {
    if (!value) {
      const { title, ...restFilters } = filters;
      return setFilters(restFilters);
    }

    setFilters((filters) => ({ ...filters, title: value }));
  };

  const onToggleIsFavorite = (categoryId: number, productId: number) => {
    const newFilteredProducts = filteredProducts
      ? filteredProducts.map((category) => {
          if (category.id === categoryId) {
            return {
              ...category,
              data: category.data.map((product) => {
                if (product.id === productId) {
                  return { ...product, isInFavorite: !product.isInFavorite };
                }

                return product;
              }),
            };
          }

          return category;
        })
      : null;

    setFilteredProducts(newFilteredProducts);
  };

  const filterProductsByTitleSubstring = (
    products: IProductCategory[] | null,
    value: string
  ) => {
    const newFilteredProducts = products
      ? products
          .map((category) => {
            return {
              ...category,
              data: category.data.filter((product) =>
                product.title.toLowerCase().includes(value.toLowerCase())
              ),
            };
          })
          .filter((category) => category.data.length)
      : null;

    return newFilteredProducts;
  };

  const filterProductsByIsNewField = (
    products: IProductCategory[] | null,
    isNew: boolean
  ) => {
    const newFilteredProducts = products
      ? products
          .map((category) => {
            return {
              ...category,
              data: category.data.filter((product) =>
                isNew ? product.isNew : product
              ),
            };
          })
          .filter((category) => category.data.length)
      : null;

    return newFilteredProducts;
  };

  const onToggleIsModalOpened = (isOpened: boolean) =>
    setIsModalOpened(isOpened);

  const onToggleIsFilterModalOpened = (isOpened: boolean) =>
    setIsFilterModalOpened(isOpened);

  const onApplyFilters = (isNew: boolean) => {
    setFilters((filters) => ({ ...filters, isNew }));
  };

  return (
    <View style={styles.container}>
      <ProductSearch
        onSearchValueChange={onSearchValueChange}
        onModalOpen={onToggleIsModalOpened}
        onFilterModalOpen={onToggleIsFilterModalOpened}
      />
      {isProductsLoading || !products ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
      ) : (
        <ProductList
          products={filteredProducts}
          onToggleIsFavorite={onToggleIsFavorite}
        />
      )}
      <ProductModal
        isOpened={isModalOpened}
        onToggleModal={onToggleIsModalOpened}
      />
      <FilterModal
        isOpened={isFilterModalOpened}
        onApplyFilter={onApplyFilters}
        onToggleModal={onToggleIsFilterModalOpened}
      />
    </View>
  );
};

export default ProductsScreen;
