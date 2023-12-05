import { FC } from 'react';
import { IProductCategory } from '../../../../types/IProductCategory';
import {
  ListRenderItem,
  RefreshControl,
  SectionList,
  SectionListData,
  SectionListRenderItem,
  Text,
  View,
} from 'react-native';
import { styles } from './ProductList.styles';
import Product from '../Product/Product';
import { IProduct } from '../../../../types/IProduct';

type ProductListProps = {
  products: IProductCategory[] | null;
  refreshing: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
  onToggleIsFavorite: (categoryId: number, productId: number) => void;
};

const ProductList: FC<ProductListProps> = ({
  products,
  refreshing,
  onRefresh,
  onEndReached,
  onToggleIsFavorite,
}) => {
  const renderItem: SectionListRenderItem<IProduct, IProductCategory> = (
    item
  ) => (
    <Product
      product={item.item}
      categoryId={item.section.id}
      onToggleIsFavorite={onToggleIsFavorite}
    />
  );

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: SectionListData<IProduct, IProductCategory>;
  }) => <Text style={styles.categoryTitle}>{title}</Text>;

  return products?.length ? (
    <View style={styles.productsWrapper}>
      <SectionList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.productList}
        sections={products}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        onEndReached={onEndReached}
      />
    </View>
  ) : (
    <Text style={styles.empty}>No products 🥲</Text>
  );
};

export default ProductList;
