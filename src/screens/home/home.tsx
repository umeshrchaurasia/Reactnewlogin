import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, Size} from '../../constants/constants';
import {hdp, wdp} from '../../utils/utility';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();
  const Header = () => {
    return (
      <View style={styles.rootHeader}>
        <Image
          source={require('../../assets/images/nexus-logo-white.png')}
          style={styles.logoImg}
          resizeMode="contain"
        />
      </View>
    );
  };

  const ProductListCard = () => {
    return (
      <View style={styles.productWrapper}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigate('Products');
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
        <View
          style={{
            backgroundColor: Colors.primary,
            width: '100%',
            height: 30,
            borderEndEndRadius: 10,
            borderBottomLeftRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.white,
              ...Fonts.poppinsTextBold10,
              includeFontPadding: false,
              padding: 0,
              margin: 0,
              lineHeight: 13,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            {'Expansion Joint'}
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = () => {
    return <ProductListCard />;
  };

  return (
    <View style={styles.root}>
      {/* <StatusBar backgroundColor={Colors.primary} barStyle={"dark-content"}/> */}
      <Header />
      <FlatList
        data={Array(10)}
        renderItem={renderItem}
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        onEndReachedThreshold={0.5}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleText: {
    color: Colors.white,
    padding: 0,
    margin: 0,
    includeFontPadding: false,
    lineHeight: 18,
    ...Fonts.poppinsTextBold14,
    textAlignVertical: 'center',
  },
  rootHeader: {
    width: '100%',
    height: Size.header_height,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  logoImg: {
    maxHeight: 45,
  },
  main: {
    flexGrow: 1,
    paddingTop: Math.round(hdp(2.5)),
    paddingHorizontal: Math.round(wdp(4)),
    paddingBottom: Math.round(hdp(8)),
  },
  mainContainer: {
    paddingTop: hdp(3),
  },
  titleHeader: {
    backgroundColor: Colors.primary,
    padding: 10,
    justifyContent: 'center',
    height: 40,
    width: '70%',
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
  },
  itemSeparator: {
    paddingVertical: Math.round(hdp(1.5)),
  },
  productWrapper: {
    width: Math.round(wdp(28)),
    borderRadius: 10,
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
  productTitle: {
    ...Fonts.poppinsTextBold12,
    color: Colors.black,
    marginTop: hdp(2),
    marginBottom: wdp(1),
  },
  textContainer: {
    justifyContent: 'center',
  },
  textWrapper: {},

  dashedPriceWrapper: {
    flexDirection: 'row',
  },
  dashWrapper: {
    transform: [{translateY: 3}],
  },
  priceConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hdp(1),
  },
  percentageTextWrapper: {
    flexDirection: 'row',
  },

  alignCenter: {
    textAlign: 'center',
  },
});
