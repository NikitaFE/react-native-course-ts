import { useEffect, useState } from 'react';
import { ActivityIndicator, SectionList, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { styles } from './ProductsScreen.styles';
import { mockedProducts } from '../../../data';
import Product from '../components/Product/Product';
import Input from '../../../components/Input/Input';
import searchSvg from '../../../assets/search.svg';
import { IProductCategory } from '../../../types/IProductCategory';

const ProductsScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [products, setProducts] = useState<IProductCategory[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<
    IProductCategory[] | null
  >(null);

  useEffect(() => {
    setIsProductsLoading(true);

    const timerId = setTimeout(() => {
      setProducts(mockedProducts);
      setFilteredProducts(mockedProducts);
      setIsProductsLoading(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  const onSearchValueChange = (value: string) => {
    const newFilteredProducts = products
      ? products
          .map((category) => {
            return {
              ...category,
              data: category.data.filter((product) =>
                product.title.toLowerCase().includes(value.toLowerCase())
              ),
            };
          })
          .filter((category) => category.data.length)
      : null;

    setFilteredProducts(newFilteredProducts);
    setSearchValue(value);
  };

  const onToggleIsFavorite = (categoryId: number, productId: number) => {
    const newFilteredProducts = filteredProducts
      ? filteredProducts.map((category) => {
          if (category.id === categoryId) {
            return {
              ...category,
              data: category.data.map((product) => {
                if (product.id === productId) {
                  return { ...product, isInFavorite: !product.isInFavorite };
                }

                return product;
              }),
            };
          }

          return category;
        })
      : null;

    setFilteredProducts(newFilteredProducts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Input
          value={searchValue}
          placeholder="Search"
          onChangeText={onSearchValueChange}
          icon={<SvgXml xml={searchSvg} width={20} height={20} />}
        />
      </View>
      {isProductsLoading || !products ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#00a8ff" />
        </View>
      ) : filteredProducts?.length ? (
        <View style={styles.productsWrapper}>
          <SectionList
            style={styles.productList}
            sections={filteredProducts}
            keyExtractor={(item) => `${item.id}`}
            renderItem={(item) => (
              <Product
                product={item.item}
                categoryId={item.section.id}
                onToggleIsFavorite={onToggleIsFavorite}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.categoryTitle}>{title}</Text>
            )}
            stickySectionHeadersEnabled={false}
          />
        </View>
      ) : (
        <Text style={styles.empty}>No products 🥲</Text>
      )}
    </View>
  );
};

export default ProductsScreen;
