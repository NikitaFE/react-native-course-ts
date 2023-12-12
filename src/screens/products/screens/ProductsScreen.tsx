import { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from './ProductsScreen.styles';
import { COLORS } from '../../../theme/colors';
import ProductList from '../components/ProductList/ProductList';
import ProductSearch from '../components/ProductSearch/ProductSearch';
import ProductModal from '../components/ProductModal/ProductModal';
import FilterModal from '../components/FilterModal/FilterModal';
import { IProductFilters } from '../../../types/IProductFilters';
import { IProduct } from '../../../types/IProduct';
import { NavigationNames } from '../../../types/NavigationNames.enum';
import { CategoriesNamesEnum } from '../../../types/CategoriesNames.enum';
import { ProductsStackParamList } from '../../../types/ProductsStackParamList.type';
import CustomTouchable from '../../../components/CustomTouchable/CustomTouchable';
import menuIcon from '../../../assets/menu.svg';

type ProductsScreenProps = DrawerScreenProps<
  ProductsStackParamList,
  CategoriesNamesEnum
>;

const ProductsScreen: FC<ProductsScreenProps> = ({ navigation, route }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isFilterModalOpened, setIsFilterModalOpened] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [isAdditionalProductsLoading, setIsAdditionalProductsLoading] =
    useState(false);
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(
    null
  );
  const [filters, setFilters] = useState<IProductFilters>({});
  const { title: categoryTitle, data } = route.params.category;

  useEffect(() => {
    setIsProductsLoading(true);

    const initialProducts = data.slice(0, 4);

    const timerId = setTimeout(() => {
      setProducts(initialProducts);
      setFilteredProducts(initialProducts);
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

  const onToggleIsFavorite = (productId: number) => {
    const newFilteredProducts = filteredProducts
      ? filteredProducts.map((product) => {
          if (product.id === productId) {
            return { ...product, isInFavorite: !product.isInFavorite };
          }

          return product;
        })
      : null;

    setFilteredProducts(newFilteredProducts);
  };

  const filterProducts = (filters: IProductFilters) => {
    const newFilteredProducts = products
      ? products.filter((product) => {
          const titleMatch = product.title
            .toLowerCase()
            .includes((filters.title ?? '').toLowerCase());

          if (filters.isNew) {
            return titleMatch && product.isNew;
          }

          return titleMatch;
        })
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

  const onEndReached = () => {
    if (products?.length === data.length) return;

    setIsAdditionalProductsLoading(true);

    const timeoutId = setTimeout(() => {
      setProducts(data);
      setFilteredProducts(data);
      setFilters({});

      setIsAdditionalProductsLoading(false);
      clearTimeout(timeoutId);
    }, 2000);
  };

  const navigateToProduct = (product: IProduct) =>
    navigation.navigate(NavigationNames.PRODUCT, { product });

  const openFavorites = () => navigation.navigate(NavigationNames.FAVORITES);

  const openDrawer = () => navigation.openDrawer();

  return (
    <View style={styles.container}>
      <CustomTouchable outerStyles={styles.drawerButton} onPress={openDrawer}>
        <SvgXml xml={menuIcon} width={32} height={32} fill={COLORS.white} />
      </CustomTouchable>
      <ProductSearch
        onSearchValueChange={onSearchValueChange}
        onModalOpen={openFavorites}
        onFilterModalOpen={onToggleIsFilterModalOpened}
      />
      {isProductsLoading || !products ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
      ) : (
        <>
          <Text style={styles.categoryTitle}>{categoryTitle}</Text>
          <ProductList
            products={filteredProducts}
            onEndReached={onEndReached}
            onToggleIsFavorite={onToggleIsFavorite}
            onNavigateToProduct={navigateToProduct}
          />
        </>
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
