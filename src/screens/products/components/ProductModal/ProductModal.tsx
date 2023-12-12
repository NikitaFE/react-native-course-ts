import { FC } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ListRenderItem,
  Modal,
  Share,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomTouchable from '../../../../components/CustomTouchable/CustomTouchable';
import { styles } from './ProductModal.styles';
import { mockedSlides } from '../../../../data';
import Swiper from '../../../../components/Swiper/Swiper';
import { IAdvSlide } from '../../../../types/IAdvSlide';

type ProductModalProps = {
  isOpened: boolean;
  onToggleModal: (isOpened: boolean) => void;
};

const ProductModal: FC<ProductModalProps> = ({ isOpened, onToggleModal }) => {
  const { width, height } = Dimensions.get('window');
  const onCloseModal = () => onToggleModal(false);

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
        outerStyles={{ width: width - 72 }}
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
    <Modal animationType="slide" transparent={true} visible={isOpened}>
      <CustomTouchable outerStyles={styles.touchable} onPress={onCloseModal}>
        <TouchableWithoutFeedback>
          <View
            style={[styles.modal, { width: width - 32, height: height * 0.85 }]}
          >
            <Text style={styles.title}>Sale</Text>
            <Swiper
              data={mockedSlides}
              renderItem={renderSlide}
              keyExtractor={slidesKeyExtractor}
            />
            <CustomTouchable onPress={onCloseModal}>
              <Text>Ok</Text>
            </CustomTouchable>
          </View>
        </TouchableWithoutFeedback>
      </CustomTouchable>
    </Modal>
  );
};

export default ProductModal;
