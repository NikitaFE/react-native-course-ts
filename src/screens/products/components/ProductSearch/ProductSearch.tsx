import { FC, useState } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
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

  const onChange = (value: string) => {
    setSearchValue(value);
    onSearchValueChange(value);
  };

  const onOpenModal = () => onModalOpen(true);
  const onOpenFilterModal = () => onFilterModalOpen(true);

  return (
    <View style={styles.wrapper}>
      <Input
        outerStyles={styles.searchInput}
        value={searchValue}
        placeholder="Search"
        icon={<SvgXml xml={searchSvg} width={24} height={24} />}
        onChangeText={onChange}
      />
      <View style={styles.buttons}>
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
