import { FC, useState } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated';
import { styles } from './ProductSearch.styles';
import Input from '../../../../components/Input/Input';
import CustomTouchable from '../../../../components/CustomTouchable/CustomTouchable';

import searchSvg from '../../../../assets/search.svg';
import filterSvg from '../../../../assets/filter.svg';
import heartEmptySvg from '../../../../assets/heart-empty.svg';

type ProductSearchProps = {
  onSearchValueChange: (value: string) => void;
  onModalOpen: (isOpened: boolean) => void;
  onFilterModalOpen: (isOpened: boolean) => void;
};

const ProductSearch: FC<ProductSearchProps> = ({
  onSearchValueChange,
  onModalOpen,
  onFilterModalOpen,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchInputShown, setIsSearchInputShown] = useState(false);

  const onChange = (value: string) => {
    setSearchValue(value);
    onSearchValueChange(value);
  };

  const onOpenModal = () => onModalOpen(true);
  const onOpenFilterModal = () => onFilterModalOpen(true);

  const toggleSearchInput = () => {
    setIsSearchInputShown((isShown) => !isShown);
  };

  return (
    <View style={styles.wrapper}>
      {isSearchInputShown && (
        <Animated.View
          entering={BounceIn}
          exiting={BounceOut}
          style={styles.searchInput}
        >
          <Input
            value={searchValue}
            placeholder="Search"
            onChangeText={onChange}
          />
        </Animated.View>
      )}
      <View style={styles.buttons}>
        <CustomTouchable onPress={toggleSearchInput}>
          <SvgXml xml={searchSvg} width={24} height={24} />
        </CustomTouchable>
        <CustomTouchable onPress={onOpenFilterModal}>
          <SvgXml xml={filterSvg} width={24} height={24} />
        </CustomTouchable>
        <CustomTouchable onPress={onOpenModal}>
          <SvgXml xml={heartEmptySvg} width={24} height={24} />
        </CustomTouchable>
      </View>
    </View>
  );
};

export default ProductSearch;
