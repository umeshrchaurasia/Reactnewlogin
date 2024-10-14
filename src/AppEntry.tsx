import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStackNavigator from './routes/root-stack-navigator';
import { Colors } from './constants/constants';

const AppEntry = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.root}>
        <StatusBar  barStyle={"dark-content"} backgroundColor={Colors.white}/>
        <RootStackNavigator />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppEntry;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
});
