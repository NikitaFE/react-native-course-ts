import 'react-native-gesture-handler';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { useAppState } from './src/hooks/useAppState';
import nonActiveImage from './src/assets/non-active-banner.jpeg';
import { COLORS } from './src/theme/colors';

export default function App() {
  const appState = useAppState();
  const { width, height } = Dimensions.get('window');

  return appState === 'active' ? (
    <AppNavigator />
  ) : (
    <View style={styles.container}>
      <Image
        style={{ width, height }}
        source={nonActiveImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.nonActiveBackground,
  },
});
