import { FC } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { styles } from './ProductList.styles';
import Product from '../Product/Product';
import { IProduct } from '../../../../types/IProduct';

type ProductListProps = {
  products: IProduct[] | null;
  onEndReached: () => void;
  onToggleIsFavorite: (productId: string) => void;
  onNavigateToProduct: (product: IProduct) => void;
};

const ProductList: FC<ProductListProps> = ({
  products,
  onEndReached,
  onToggleIsFavorite,
  onNavigateToProduct,
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
      <FlatList
        style={styles.productList}
        data={products}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        onEndReached={onEndReached}
      />
    </View>
  ) : (
    <Text style={styles.empty}>No products 🥲</Text>
  );
};

export default ProductList;
