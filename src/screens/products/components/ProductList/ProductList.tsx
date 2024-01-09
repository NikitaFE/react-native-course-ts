import { FC } from 'react';
import {
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './ProductList.styles';
import Product from '../Product/Product';
import { IProduct } from '../../../../types/IProduct';

type ProductListProps = {
  products: IProduct[] | null;
  onEndReached: () => void;
  onToggleIsFavorite: (productId: string) => void;
  onNavigateToProduct: (product: IProduct) => void;
  onScrollChange: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const ProductList: FC<ProductListProps> = ({
  products,
  onEndReached,
  onToggleIsFavorite,
  onNavigateToProduct,
  onScrollChange,
}) => {
  const renderItem: ListRenderItem<IProduct> = (item) => (
    <Product
      product={item.item}
      onNavigateToProduct={onNavigateToProduct}
      onToggleIsFavorite={onToggleIsFavorite}
    />
  );

  return products?.length ? (
    <View style={styles.productsWrapper}>
      <Animated.FlatList
        style={styles.productList}
        data={products}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onScroll={onScrollChange}
      />
    </View>
  ) : (
    <Text style={styles.empty}>No products 🥲</Text>
  );
};

export default ProductList;
