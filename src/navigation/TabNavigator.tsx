import { JSX } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { NavigationNames } from '../types/NavigationNames.enum';
import ProductsNavigator from './stacks/ProductsNavigator';
import SettingsScreen from '../screens/settings/screens/SettingsScreen';
import dishIcon from '../assets/dish.svg';
import gearIcon from '../assets/gear.svg';
import { COLORS } from '../theme/colors';

type RenderIconType = (iconSettings: {
  size: number;
  focused: boolean;
  xml: string;
  fillMode?: 'fill' | 'stroke';
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

export default TabNavigator;
