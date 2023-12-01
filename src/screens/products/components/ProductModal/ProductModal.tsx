import { FC } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import CustomTouchable from '../../../../components/CustomTouchable/CustomTouchable';
import { styles } from './ProductModal.styles';

type ProductModalProps = {
  isOpened: boolean;
  onToggleModal: (isOpened: boolean) => void;
};

const ProductModal: FC<ProductModalProps> = ({ isOpened, onToggleModal }) => {
  const onCloseModal = () => onToggleModal(false);

  return (
    <Modal animationType="slide" transparent={true} visible={isOpened}>
      <CustomTouchable outerStyles={styles.touchable} onPress={onCloseModal}>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <Text style={styles.title}>Hello World!</Text>
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
