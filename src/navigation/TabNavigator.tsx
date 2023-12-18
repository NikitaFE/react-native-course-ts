import { JSX } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { observer } from 'mobx-react-lite';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationNames } from '../types/NavigationNames.enum';
import ProductsNavigator from './stacks/ProductsNavigator';
import SettingsScreen from '../screens/settings/screens/SettingsScreen';
import dishIcon from '../assets/dish.svg';
import gearIcon from '../assets/gear.svg';
import cartIcon from '../assets/cart.svg';
import { COLORS } from '../theme/colors';
import CartScreen from '../screens/cart/screens/CartScreen';
import cartStore from '../screens/cart/store/cartStore';

type RenderIconType = (iconSettings: {
  size: number;
  focused: boolean;
  xml: string;
  fillMode?: 'fill' | 'stroke';
}) => JSX.Element;

type CartIconType = (iconSettings: {
  size: number;
  focused: boolean;
}) => JSX.Element;

const AppTab = createBottomTabNavigator();

const TabNavigator = () => {
  const renderIcon: RenderIconType = ({
    size,
    focused,
    xml,
    fillMode = 'fill',
  }) => {
    const fillProp: {
      fill?: string;
      stroke?: string;
    } = {};

    fillProp[fillMode] = focused ? COLORS.black : COLORS.blueberrySoda;

    return <SvgXml xml={xml} width={size} height={size} {...fillProp} />;
  };

  const CartIcon: CartIconType = observer(({ size, focused }) => (
    <View>
      {!!cartStore.ordersCount && (
        <View style={styles.quantityWrapper}>
          <Text style={styles.quantity}>{cartStore.ordersCount}</Text>
        </View>
      )}
      {renderIcon({
        size,
        focused,
        xml: cartIcon,
        fillMode: 'stroke',
      })}
    </View>
  ));

  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.blueberrySoda,
      }}
    >
      <AppTab.Screen
        name={NavigationNames.PRODUCTS_TAB}
        component={ProductsNavigator}
        options={{
          headerShown: false,
          title: NavigationNames.PRODUCTS,
          tabBarIcon: ({ size, focused }) =>
            renderIcon({ size, focused, xml: dishIcon }),
        }}
      />
      <AppTab.Screen
        name={NavigationNames.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <CartIcon size={size} focused={focused} />
          ),
        }}
      />
      <AppTab.Screen
        name={NavigationNames.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, focused }) =>
            renderIcon({ size, focused, xml: gearIcon, fillMode: 'stroke' }),
        }}
      />
    </AppTab.Navigator>
  );
};

const styles = StyleSheet.create({
  quantityWrapper: {
    position: 'absolute',
    top: -4,
    left: 18,
    paddingVertical: 1,
    paddingHorizontal: 5,
    fontSize: 12,
    backgroundColor: COLORS.red,
    borderRadius: 16,
    zIndex: 1,
  },
  quantity: {
    color: COLORS.white,
  },
});

export default TabNavigator;
