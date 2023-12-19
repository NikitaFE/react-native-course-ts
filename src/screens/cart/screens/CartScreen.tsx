import { Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { SvgXml } from 'react-native-svg';
import cartIcon from '../../../assets/cart.svg';
import CartList from '../components/CartList/CartList';
import { COLORS } from '../../../theme/colors';
import cartStore from '../store/cartStore';
import { styles } from './CartScreen.styles';
import CustomTouchable from '../../../components/CustomTouchable/CustomTouchable';

const CartScreen = () => {
  const { orders, totalSum } = cartStore;

  const emptyCart = () => cartStore.emptyOrders();

  return orders.length ? (
    <View style={styles.container}>
      <CartList orders={orders} />
      <View style={styles.cartBottom}>
        <View style={styles.totalSum}>
          <Text style={styles.sumTitle}>Total Sum:</Text>
          <Text style={styles.sumCount}>${totalSum}</Text>
        </View>
        <CustomTouchable
          outerStyles={styles.checkoutButton}
          onPress={emptyCart}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </CustomTouchable>
      </View>
    </View>
  ) : (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Your cart is empty</Text>
      <SvgXml xml={cartIcon} width={80} height={80} stroke={COLORS.black} />
    </View>
  );
};

export default observer(CartScreen);
