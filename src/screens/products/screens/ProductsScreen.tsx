import { FC, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
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
  const scrollY = useSharedValue(0);
  const { title: categoryTitle, data } = route.params.category;

  const animatedSearchBarStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 60], [1, 0]),
    };
  });

  const animatedTitleStyles = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(
        scrollY.value,
        [0, 60],
        [0, -60],
        Extrapolation.CLAMP
      ),
    };
  });

  useEffect(() => {
    setIsProductsLoading(true);

    const timerId = setTimeout(() => {
      setProducts(data);
      setFilteredProducts(data);
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

  const onToggleIsFavorite = (productId: string) => {
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

  const updateScrollY = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <View style={styles.container}>
      <CustomTouchable outerStyles={styles.drawerButton} onPress={openDrawer}>
        <SvgXml xml={menuIcon} width={32} height={32} fill={COLORS.white} />
      </CustomTouchable>
      <Animated.View style={animatedSearchBarStyles}>
        <ProductSearch
          onSearchValueChange={onSearchValueChange}
          onModalOpen={openFavorites}
          onFilterModalOpen={onToggleIsFilterModalOpened}
        />
      </Animated.View>
      {isProductsLoading || !products ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
      ) : (
        <>
          <Animated.Text style={[styles.categoryTitle, animatedTitleStyles]}>
            {categoryTitle}
          </Animated.Text>
          <ProductList
            products={filteredProducts}
            onEndReached={onEndReached}
            onToggleIsFavorite={onToggleIsFavorite}
            onNavigateToProduct={navigateToProduct}
            onScrollChange={updateScrollY}
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
