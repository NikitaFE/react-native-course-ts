import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './ProductsScreen.styles';
import {
  additionalMockedProducts,
  mockedPizza,
  mockedProducts,
} from '../../../data';
import { IProductCategory } from '../../../types/IProductCategory';
import { COLORS } from '../../../theme/colors';
import ProductList from '../components/ProductList/ProductList';
import ProductSearch from '../components/ProductSearch/ProductSearch';
import ProductModal from '../components/ProductModal/ProductModal';
import FilterModal from '../components/FilterModal/FilterModal';
import { IProductFilters } from '../../../types/IProductFilters';

const ProductsScreen = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isFilterModalOpened, setIsFilterModalOpened] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [isAdditionalProductsLoading, setIsAdditionalProductsLoading] =
    useState(false);
  const [products, setProducts] = useState<IProductCategory[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<
    IProductCategory[] | null
  >(null);
  const [filters, setFilters] = useState<IProductFilters>({});
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setIsProductsLoading(true);

    const timerId = setTimeout(() => {
      setProducts(mockedProducts);
      setFilteredProducts(mockedProducts);
      setIsProductsLoading(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  const onSearchValueChange = (value: string) => {
    if (!value) {
      const { title, ...restFilters } = filters;
      filterProducts(restFilters);
      return setFilters(restFilters);
    }

    setFilters((filters) => {
      const newFilters = { ...filters, title: value };

      filterProducts(newFilters);
      return newFilters;
    });
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

  const filterProducts = (filters: IProductFilters) => {
    const newFilteredProducts = products
      ? products
          .map((category) => ({
            ...category,
            data: category.data.filter((product) => {
              const titleMatch = product.title
                .toLowerCase()
                .includes((filters.title ?? '').toLowerCase());

              if (filters.isNew) {
                return titleMatch && product.isNew;
              }

              return titleMatch;
            }),
          }))
          .filter((category) => category.data.length)
      : null;

    setFilteredProducts(newFilteredProducts);
  };

  const onToggleIsModalOpened = (isOpened: boolean) =>
    setIsModalOpened(isOpened);

  const onToggleIsFilterModalOpened = (isOpened: boolean) =>
    setIsFilterModalOpened(isOpened);

  const onApplyFilters = (isNew: boolean) => {
    setFilters((filters) => {
      const newFilters = { ...filters, isNew };

      filterProducts(newFilters);
      return newFilters;
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const timeoutId = setTimeout(() => {
      if (products) {
        const newProducts = products.map((category) => {
          return category.id === 1
            ? category.data.find((product) => product.id === 1)
              ? category
              : { ...category, data: [mockedPizza, ...category.data] }
            : category;
        });

        setProducts(newProducts);
        setFilteredProducts(newProducts);
        setFilters({});
      }
      setRefreshing(false);
      clearTimeout(timeoutId);
    }, 2000);
  }, [products]);

  const onEndReached = () => {
    setIsAdditionalProductsLoading(true);

    const timeoutId = setTimeout(() => {
      if ((products?.length ?? 0) < 4) {
        const newProducts = [...(products ?? []), ...additionalMockedProducts];
        setProducts(newProducts);
        setFilteredProducts(newProducts);
        setFilters({});
      }

      setIsAdditionalProductsLoading(false);
      clearTimeout(timeoutId);
    }, 2000);
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
          refreshing={refreshing}
          products={filteredProducts}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
          onToggleIsFavorite={onToggleIsFavorite}
        />
      )}
      {isAdditionalProductsLoading && (
        <View style={styles.bottomLoader}>
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
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
