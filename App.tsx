import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import ProductsScreen from './src/screens/products/screens/ProductsScreen';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <ProductsScreen />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
