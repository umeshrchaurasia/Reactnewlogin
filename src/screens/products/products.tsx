import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {hdp, wdp} from '../../utils/utility';
import {Colors, Fonts} from '../../constants/constants';
import {useNavigation} from '@react-navigation/native';

const Products = () => {
  const {navigate} = useNavigation();
  // const Header = () => {
  //   return (
  //     <ImageBackground
  //       source={require('../../assets/images/expansion-joint-header.jpg')}
  //       resizeMode="cover"
  //       style={styles.headerImageBackground}>
  //       <Text style={styles.text}>{'New Expansion Joint'}</Text>
  //     </ImageBackground>
  //   );
  // };

  const ProductListCard = () => {
    return (
      <View style={styles.productWrapper}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigate('ProductDescription');
          }}>
          <View style={styles.flexView}>
            <Image
              defaultSource={require('../../assets/images/Nf.jpg')}
              source={require('../../assets/images/Nf.jpg')}
              style={styles.productImage}
              resizeMode={'cover'}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.productTitleContainer}>
          <Text style={styles.productTitle}>{'NRGM-13'}</Text>
        </View>
      </View>
    );
  };

  const renderItem = () => {
    return <ProductListCard />;
  };

  return (
    <View style={styles.root}>
      {/* <Header /> */}
      <FlatList
        data={Array(10)}
        renderItem={renderItem}
        ListHeaderComponent={() => {
          return (
            <ImageBackground
              source={require('../../assets/images/expansion-joint-header.jpg')}
              resizeMode="cover"
              style={styles.headerImageBackground}>
              <Text style={styles.text}>{'New Expansion Joint'}</Text>
            </ImageBackground>
          );
        }}
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        onEndReachedThreshold={0.5}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  main: {
    flexGrow: 1,
    paddingTop: Math.round(hdp(2.5)),

    paddingBottom: Math.round(hdp(8)),
  },
  text: {
    color: Colors.white,
    ...Fonts.poppinsTextBold27,
    textAlign: 'center',
  },
  headerImageBackground: {
    alignItems: 'center',
    justifyContent:"center",
    maxWidth:"100%",
    minHeight:100,
    paddingVertical:60
    // paddingTop: Math.round(hdp(14.6)),
    // paddingBottom: Math.round(hdp(14.6)),
    // maxHeight:
  },
  productsWrapper: {
    paddingHorizontal: wdp(4),
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:"center"
  },
  productsContainer: {
    // width: '40%',
    // height: '70%',
    width: '45%',
    height: 120,
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: Math.round(wdp(4)),
    marginTop: 20,
  },
  itemSeparator: {
    paddingVertical: Math.round(hdp(1.5)),
  },
  productWrapper: {
    width: Math.round(wdp(43.3)),
    borderRadius: 6,

    // marginBottom:20
  },
  flexView: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  productDetailConatiner: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hdp(1),
    flexWrap: 'wrap',
  },
  productTitleContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    height: 30,
    borderEndEndRadius: 10,
    borderBottomLeftRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  productTitle: {
    // ...Fonts.poppinsTextBold12,
    // color: Colors.black,
    // marginTop: hdp(2),
    // marginBottom: wdp(1),
    color: Colors.black,
    ...Fonts.poppinsTextBold12,
    includeFontPadding: false,
    padding: 0,
    margin: 0,
    // lineHeight: 12,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  subProductTitle: {
    color: Colors.white,
    ...Fonts.poppinsTextBold12,
    includeFontPadding: false,
    padding: 0,
    margin: 0,
    // lineHeight: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textContainer: {
    justifyContent: 'center',
  },
});
