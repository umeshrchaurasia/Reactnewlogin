import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {Colors, Fonts} from '../../constants/constants';

const Updates = () => {
  const NotificationCard = () => {
    return (
      <TouchableOpacity style={styles.notifyWrapper}>
        <View style={styles.notificationContainer}>
          {/* <View style={{flex: 1}}> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text numberOfLines={3} style={styles.notifyTopText}>
              {'header'}
            </Text>
            <Text
              style={{
                ...Fonts.poppinsTextMedium12,
                color: Colors.erieBlack,
                padding: 0,
                includeFontPadding: false,
                top: -10,
              }}>
              {'22-09-2024'}
            </Text>
          </View>

          <View style={styles.textWrapper}>
            <Image
              source={require('../../assets/images/contact-us.jpg')}
              style={{
                width:"100%",
                height:80
              }}
              resizeMode="cover"
            />
          </View>

          {/* </View> */}
          <View style={styles.textWrapper}>
            <Text style={styles.notifyText}>{'notificationText um'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3,5,6,7,8,9]}
        contentContainerStyle={{flexGrow: 1}}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.5}
        renderItem={() => <NotificationCard />}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyRoot}>
              <Text style={styles.text1}>{'No Notification'}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.lighter,
  },

  notifyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius:6
  },
  notificationDataContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: Colors.green,
  },
  notificationContainer: {
    flex: 1,
    padding: 10,
  },
  notifyTopText: {
    color: Colors.black,
    ...Fonts.poppinsTextRegular14,
    flex: 1,
  },
  notifyText: {
    ...Fonts.poppinsTextMedium12,
    color: Colors.spanishGray,
    flex: 1,
    padding: 0,
    includeFontPadding: false,
  },
  textWrapper: {
    // flex: 1,

    paddingTop: 10,
    // alignItems: 'center',

    // flexDirection: 'row',
    // alignItems: 'flex-end',
  },
  emptyRoot: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.antiFlashWhite,
    // paddingHorizontal: 20,
  },
  text1: {
    ...Fonts.poppinsTextRegular16,
    color: Colors.black,
    textAlign: 'center',
  },
});

export default Updates;
