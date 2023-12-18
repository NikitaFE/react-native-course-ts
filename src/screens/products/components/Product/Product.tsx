import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { observer } from 'mobx-react-lite';
import { styles } from './Product.styles';
import productImagePlaceholder from '../../../../assets/product-placeholder.jpeg';
import heartSvg from '../../../../assets/heart.svg';
import heartEmptySvg from '../../../../assets/heart-empty.svg';
import cartSvg from '../../../../assets/cart.svg';
import { IProduct } from '../../../../types/IProduct';
import CustomTouchable from '../../../../components/CustomTouchable/CustomTouchable';
import cartStore from '../../../cart/store/cartStore';

type ProductProps = {
  product: IProduct;
  onNavigateToProduct: (product: IProduct) => void;
  onToggleIsFavorite: (productId: string) => void;
};

const Product: FC<ProductProps> = ({
  product,
  onNavigateToProduct,
  onToggleIsFavorite,
}) => {
  const { id, picture, title, price, description, isInFavorite } = product;

  const onAddToCart = () => cartStore.addToCart(product);

  return (
    <CustomTouchable
      outerStyles={styles.product}
      onPress={() => onNavigateToProduct(product)}
    >
      <View>
        <Image
          style={styles.image}
          source={picture ? { uri: `${picture}` } : productImagePlaceholder}
        />
        {product.isNew && (
          <View style={styles.newLabel}>
            <Text style={styles.newLabelText}>New</Text>
          </View>
        )}
      </View>
      <View style={styles.productDetails}>
        <View style={styles.productTop}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <CustomTouchable onPress={() => onToggleIsFavorite(id)}>
            <SvgXml
              xml={isInFavorite ? heartSvg : heartEmptySvg}
              width={28}
              height={28}
            />
          </CustomTouchable>
        </View>
        <View style={styles.prices}>
          <Text style={styles.price}>${price}</Text>
          {product.oldPrice && (
            <Text style={styles.oldPrice}>${product.oldPrice}</Text>
          )}
        </View>
        <View style={styles.productBottom}>
          <Text style={styles.description} numberOfLines={1}>
            {description}
          </Text>
          <CustomTouchable onPress={onAddToCart}>
            <View style={styles.buyButton}>
              <Text style={styles.buyText}>Buy</Text>
              <SvgXml xml={cartSvg} width={20} height={20} />
            </View>
          </CustomTouchable>
        </View>
      </View>
    </CustomTouchable>
  );
};

export default observer(Product);
