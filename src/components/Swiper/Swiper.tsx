import {
  FlatList,
  LayoutChangeEvent,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import { styles } from './Swiper.styles';
import { useEffect, useRef, useState } from 'react';

type SwiperProps<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T) => string;
};

const Swiper = <T extends unknown>({
  data,
  renderItem,
  keyExtractor,
}: SwiperProps<T>) => {
  const slidesRef = useRef<FlatList | null>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  let intervalId: NodeJS.Timeout;

  useEffect(() => {
    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        let offset = 0;

        if (activeDotIndex < data.length - 1) {
          offset = (activeDotIndex + 1) * slideWidth;
        }

        slidesRef.current?.scrollToOffset({ offset, animated: true });
      }, 5000);
    };

    startAutoScroll();

    return () => {
      clearInterval(intervalId);
    };
  }, [activeDotIndex, slideWidth]);

  const onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) =>
    setActiveDotIndex(
      Math.round(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      )
    );

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setSlideWidth(nativeEvent.layout.width);
  };

  const onScrollBeginDrag = () => {
    clearInterval(intervalId);
  };

  const renderDots: ListRenderItem<number> = ({ item }) => (
    <View
      style={[styles.dot, item === activeDotIndex ? styles.activeDot : {}]}
    />
  );

  const getDotsData = Array.from({ length: data.length }, (_, index) => index);

  return (
    <View style={styles.swiper}>
      <FlatList
        ref={slidesRef}
        contentContainerStyle={styles.slider}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        onScrollBeginDrag={onScrollBeginDrag}
        onLayout={onLayout}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <FlatList
        contentContainerStyle={styles.dots}
        data={getDotsData}
        horizontal
        renderItem={renderDots}
      />
    </View>
  );
};

export default Swiper;
