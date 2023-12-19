import { FlatList, StyleSheet, View } from 'react-native';
import CartItem from '../CartItem/CartItem';
import { ICartItem } from '../../../../types/ICartItem';
import { FC } from 'react';

type CartListProps = {
  orders: ICartItem[];
};

const CartList: FC<CartListProps> = ({ orders }) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={orders}
        renderItem={({ item }) => <CartItem cartItem={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    gap: 16,
  },
});

export default CartList;
