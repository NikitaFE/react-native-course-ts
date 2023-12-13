import { FC } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ListRenderItem,
  Share,
  Text,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationNames } from '../../../../types/NavigationNames.enum';
import { ProductsStackParamList } from '../../../../types/ProductsStackParamList.type';
import CustomTouchable from '../../../../components/CustomTouchable/CustomTouchable';
import Swiper from '../../../../components/Swiper/Swiper';
import { mockedSlides } from '../../../../data';
import { IAdvSlide } from '../../../../types/IAdvSlide';
import { styles } from './FavoritesModalScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type FavoritesModalScreenProps = NativeStackScreenProps<
  ProductsStackParamList,
  NavigationNames.FAVORITES
>;

const FavoritesModalScreen: FC<FavoritesModalScreenProps> = ({
  navigation,
}) => {
  const { width } = Dimensions.get('window');

  const onShare = async (message: string) => {
    try {
      const result = await Share.share({
        message,
      });
      console.warn(result);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const renderSlide: ListRenderItem<IAdvSlide> = ({ item }) => {
    return (
      <CustomTouchable
        outerStyles={{ width: width - 32 }}
        onPress={() => onShare(item.link)}
      >
        <Image
          resizeMode="contain"
          style={styles.slide}
          source={{ uri: item.image }}
        />
      </CustomTouchable>
    );
  };

  const slidesKeyExtractor = (item: IAdvSlide) => item.id;
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.slidesWrapper}>
        <Swiper
          data={mockedSlides}
          renderItem={renderSlide}
          keyExtractor={slidesKeyExtractor}
        />
        <CustomTouchable onPress={navigation.goBack}>
          <Text>Ok</Text>
        </CustomTouchable>
      </SafeAreaView>
    </View>
  );
};

export default FavoritesModalScreen;
