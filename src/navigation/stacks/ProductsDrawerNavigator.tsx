import { createDrawerNavigator } from '@react-navigation/drawer';
import { mockedProducts } from '../../data';
import ProductsScreen from '../../screens/products/screens/ProductsScreen';
import { ProductsDrawerParamList } from '../../types/ProductsDrawerParamList.type';

const ProductsDrawer = createDrawerNavigator<ProductsDrawerParamList>();

const ProductsDrawerNavigator = () => {
  const renderScreens = () =>
    mockedProducts.map((category) => (
      <ProductsDrawer.Screen
        key={category.title}
        name={category.title}
        component={ProductsScreen}
        initialParams={{ category }}
        options={{ headerShown: false }}
      />
    ));

  return <ProductsDrawer.Navigator>{renderScreens()}</ProductsDrawer.Navigator>;
};

export default ProductsDrawerNavigator;
