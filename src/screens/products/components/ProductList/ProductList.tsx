import { FC } from 'react';
import { IProductCategory } from '../../../../types/IProductCategory';
import { SectionList, Text, View } from 'react-native';
import { styles } from './ProductList.styles';
import Product from '../Product/Product';

type ProductListProps = {
  products: IProductCategory[] | null;
  onToggleIsFavorite: (categoryId: number, productId: number) => void;
};

const ProductList: FC<ProductListProps> = ({
  products,
  onToggleIsFavorite,
}) => {
  return products?.length ? (
    <View style={styles.productsWrapper}>
      <SectionList
        style={styles.productList}
        sections={products}
        keyExtractor={(item) => `${item.id}`}
        renderItem={(item) => (
          <Product
            product={item.item}
            categoryId={item.section.id}
            onToggleIsFavorite={onToggleIsFavorite}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.categoryTitle}>{title}</Text>
        )}
        stickySectionHeadersEnabled={false}
      />
    </View>
  ) : (
    <Text style={styles.empty}>No products 🥲</Text>
  );
};

export default ProductList;
