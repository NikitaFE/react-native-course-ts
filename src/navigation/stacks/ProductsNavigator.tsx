import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationNames } from '../../types/NavigationNames.enum';
import ProductScreen from '../../screens/products/screens/Product/ProductScreen';
import { ProductsStackParamList } from '../../types/ProductsStackParamList.type';
import FavoritesModalScreen from '../../screens/products/screens/FavoritesModal/FavoritesModalScreen';
import ProductsDrawerNavigator from './ProductsDrawerNavigator';

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsNavigator = () => {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name={NavigationNames.PRODUCTS}
        component={ProductsDrawerNavigator}
      />
      <ProductsStack.Screen
        name={NavigationNames.PRODUCT}
        component={ProductScreen}
        options={({ route }) => ({ title: route.params.product.title })}
      />
      <ProductsStack.Screen
        name={NavigationNames.FAVORITES}
        component={FavoritesModalScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </ProductsStack.Navigator>
  );
};

export default ProductsNavigator;
