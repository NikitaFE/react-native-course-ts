import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { observer } from 'mobx-react-lite';
import { ICartItem } from '../../../../types/ICartItem';
import CustomTouchable from '../../../../components/CustomTouchable/CustomTouchable';
import productImagePlaceholder from '../../../../assets/product-placeholder.jpeg';
import closeIcon from '../../../../assets/close.svg';
import { styles } from './CartItem.styles';
import cartStore from '../../store/cartStore';

type CartItemProps = {
  cartItem: ICartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { title, count, picture, price, id } = cartItem;
  const isDecreaseDisabled = count === 1;

  const addItemToCart = () => cartStore.addToCart(cartItem);

  const decreaseCartItemCount = () => {
    if (count > 1) {
      cartStore.decrementCartItem(cartItem);
    }
  };

  const deleteCartItem = () => cartStore.deleteItemFromCart(id);

  return (
    <View style={styles.cartItem}>
      <Image
        style={styles.image}
        source={picture ? { uri: `${picture}` } : productImagePlaceholder}
      />
      <View style={styles.info}>
        <View style={styles.infoTop}>
          <Text style={styles.title}>{title}</Text>
          <CustomTouchable onPress={deleteCartItem}>
            <SvgXml xml={closeIcon} width={20} height={20} />
          </CustomTouchable>
        </View>
        <View style={styles.infoBottom}>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.countWrapper}>
            <CustomTouchable
              outerStyles={[
                styles.countButton,
                isDecreaseDisabled ? styles.countButtonDisabled : {},
              ]}
              onPress={decreaseCartItemCount}
            >
              <Text
                style={[
                  styles.countButtonText,
                  isDecreaseDisabled ? styles.countButtonTextDisabled : {},
                ]}
              >
                -
              </Text>
            </CustomTouchable>
            <Text style={styles.count}>{count}</Text>
            <CustomTouchable
              outerStyles={[styles.countButton, styles.countButtonIncrease]}
              onPress={addItemToCart}
            >
              <Text
                style={[styles.countButtonText, styles.countButtonTextIncrease]}
              >
                +
              </Text>
            </CustomTouchable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default observer(CartItem);
