import { StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../../screens/home/home';
import ContactUs from '../../screens/contact-us/contact-us';
import Inquiries from '../../screens/inquiries/inquiries';
import Updates from '../../screens/updates/updates';
import {Colors, Fonts} from '../../constants/constants';
import HomeIcon from '../../assets/svg/home-icon';
import UpdateIcon from '../../assets/svg/update-icon';
import InquiriesIcon from '../../assets/svg/inquiries-icon';
import ContactUsIcon from '../../assets/svg/contact-us-icon';
import Inq  from '../../screens/inquiries/inq';
import InquiryForm  from '../../screens/inquiries/InquiryForm';
import InquiriesScreen  from '../../screens/inquiries/InquiriesScreen';

const Tab = createMaterialTopTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: Colors.phillipineGrey,
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBarStyle,
        tabBarAndroidRipple: {borderless: false},
        animationEnabled: true,
        tabBarIndicatorStyle: styles.tabBarIndicator,
      }}
      keyboardDismissMode='auto'
      backBehavior="history"
      tabBarPosition="bottom">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return <HomeIcon activeColor={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => {
            return <UpdateIcon activeColor={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Inquiries"
        component={Inquiries}
        options={{
          tabBarLabel: 'Inquiries',
          tabBarIcon: ({color}) => {
            return <InquiriesIcon width={20} height={20} activeColor={color} />;
          },
        }}
      />

      <Tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({color}) => {
            return <ContactUsIcon activeColor={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarLabel: {
    // ...Fonts.poppinsTextSemibold12,
    marginTop: 5,
    // height: 40,
    textTransform: 'none',
  },
  tabBarStyle: {
    // height: 50,
    height: 70,
    // backgroundColor: Colors.white,
    // borderWidth:.9,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    shadowColor: '#000',
    // borderTopLeftRadius:25
  },
  tabBarIndicator: {
    backgroundColor: Colors.primary,
    bottom: 70,
  },
});
