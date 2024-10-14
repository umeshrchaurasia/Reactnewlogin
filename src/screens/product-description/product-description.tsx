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
import {Colors, Fonts} from '../../constants/constants';
import {hdp, wdp} from '../../utils/utility';

const data = [
  {title: 'Features', description: 'High movement capacity Min 50%\nUL - 2079'},
  {
    title: 'Use-Umesh',
    description:
      'Fire Barrier for horizontal expansion joint gaps with minimum movement capacity 50% of the joint width',
  },
  {
    title: 'Material',
    description:
      'Protective lamination made of 0.05mm stainless steel AISI 304 with melting point 1400C',
  },
  {title: 'Core', description: 'Fire blanket 128kg/M3 density.'},
  {
    title: 'Product Length',
    description:
      'Standard production length will be 3 meter, and any other length is possible upon request.',
  },
  {
    title: 'Applications',
    description:
      'Designed for Floor to floor & Floor to Wall Gaps For 2 hours Fire rated requirement Suitable for gap sizes from 35 - 350 mm',
  },
];

const ProductDescription = () => {
  const renderColumn = ({item}) => (
    <View style={styles.row}>
      {/* Column for title */}
      <View style={styles.column}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {/* Column for description */}
      <View style={styles.column1}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const ProductListCard = () => {
    return (
      <View style={styles.productWrapper}>
        <TouchableWithoutFeedback
          onPress={() => {
            // navigate('Products');
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
    return (
      <>
        <ProductListCard />
        <View style={styles.tableContainer}>
          <FlatList
            data={data}
            renderItem={renderColumn}
            keyExtractor={item => item.title}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </>
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={Array(1)}
        renderItem={renderItem}
        ListHeaderComponent={() => {
          return (
            <ImageBackground
              source={require('../../assets/images/expansion-joint-header.jpg')}
              resizeMode="cover"
              style={styles.headerImageBackground}>
              <Text style={styles.text}>{'NRGM-13'}</Text>
            </ImageBackground>
          );
        }}
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
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
  // New container for the entire table
  tableContainer: {
    marginHorizontal: 20,
    marginVertical: 30,
    borderWidth: 1, // Border for the table
    borderColor: Colors.tintGrey, // Table border color
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.tintGrey,
  },
  column: {
    flex: .7,
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: Colors.tintGrey,
    justifyContent:"center"
  },
  column1: {
    flex: 1,
    paddingHorizontal: 10,
  
  },
  title: {
    ...Fonts.poppinsTextBold14,
    textAlign:"left",
    textAlignVertical:"center",
    color:Colors.black
  },
  description: {
    ...Fonts.poppinsTextMedium14,
    color:Colors.black,
    flexShrink: 1,
    padding:10
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
    width: Math.round(wdp(60)),
    borderRadius: 6,
    marginTop:20,
    alignSelf:"center"

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
});
