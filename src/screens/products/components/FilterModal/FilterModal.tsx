import { FC, useState } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import CustomTouchable from '../../../../components/CustomTouchable/CustomTouchable';
import { styles } from './FilterModal.styles';
import { COLORS } from '../../../../theme/colors';

type FilterModalProps = {
  isOpened: boolean;
  onToggleModal: (isOpened: boolean) => void;
  onApplyFilter: (isNew: boolean) => void;
};

const FilterModal: FC<FilterModalProps> = ({
  isOpened,
  onToggleModal,
  onApplyFilter,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const onCloseModal = () => onToggleModal(false);
  const onApply = () => {
    onApplyFilter(isChecked);
    onToggleModal(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isOpened}>
      <CustomTouchable outerStyles={styles.touchable} onPress={onCloseModal}>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <Text style={styles.title}>Filters</Text>
            <View style={styles.checkboxWrapper}>
              <Checkbox
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? COLORS.green : undefined}
              />
              <Text>New</Text>
            </View>
            <CustomTouchable onPress={onApply}>
              <Text style={styles.button}>Apply</Text>
            </CustomTouchable>
          </View>
        </TouchableWithoutFeedback>
      </CustomTouchable>
    </Modal>
  );
};

export default FilterModal;
