import { FC } from 'react';
import { Alert, Dimensions, Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationNames } from '../../../../types/NavigationNames.enum';
import { ProductsStackParamList } from '../../../../types/ProductsStackParamList.type';
import productImagePlaceholder from '../../../../assets/product-placeholder.jpeg';
import CustomTouchable from '../../../../components/CustomTouchable/CustomTouchable';
import cartSvg from '../../../../assets/cart.svg';

import { styles } from './ProductScreen.styles';

type ProductScreenNavigationProp = NativeStackScreenProps<
  ProductsStackParamList,
  NavigationNames.PRODUCT
>;

const ProductScreen: FC<ProductScreenNavigationProp> = ({ route }) => {
  const { width } = Dimensions.get('window');
  const imageSize = width - 32;
  const { product } = route.params;
  const { picture, title, description, price } = product;

  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.image,
          {
            width: imageSize,
            height: imageSize,
          },
        ]}
        source={picture ? { uri: picture } : productImagePlaceholder}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        {product.isNew && (
          <View style={styles.newLabel}>
            <Text style={styles.newLabelText}>New</Text>
          </View>
        )}
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.productsBottom}>
        <View style={styles.prices}>
          <Text style={styles.price}>${price}</Text>
          {product.oldPrice && (
            <Text style={styles.oldPrice}>${product.oldPrice}</Text>
          )}
        </View>
        <CustomTouchable
          onPress={() => Alert.alert(`${title} successfully added to cart!`)}
        >
          <View style={styles.buyButton}>
            <Text style={styles.buyText}>Buy</Text>
            <SvgXml xml={cartSvg} width={24} height={24} />
          </View>
        </CustomTouchable>
      </View>
    </View>
  );
};

export default ProductScreen;
