import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback } from 'react';

import Header from '../../components/header/header';
import {hdp, wdp} from '../../utils/utility';
import NexusTextInput from '../../components/nexus-textinput/nexus-textinput';
import {Colors,Contacts,
  Spacing, Fonts, Size} from '../../constants/constants';
import NexusPhoneInput from '../../components/nexus-phone-input/nexus-phone-input';
import { useContactUs } from './contact-us.hooks';

interface CustomMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title: string;
}

const ContactUs = () => {
  const{
    getWrapperStyle,
    handleBlur,
    handleFocus,
    markers,
    contactData,
    onChangeText,
    onSubmit,
    error,
    showEmailError,
    showFullNameError,
    showMessageError,
    showPhoneNumberError,
    countryCode,
    formattedValue,
    onChangeFormattedText,
    onChangePhoneNumber,
    phoneInputRef,
    phoneNumber,
  } =useContactUs();

  const renderItem = useCallback(()=>{
   
   
    return(


      <View style={{flexGrow: 1, marginHorizontal: 20}}>
   <View style={styles.formContainer}>
          <View style={styles.contactUsHeader}>
            <Text style={styles.contactUsText}>{'Contact Us'}</Text>
            <Text style={styles.dropUs}>{'Drop us a line'}</Text>
            <View style={styles.headerBefore} />
          </View>
          <NexusTextInput
            inputKey="fullName"
            value={contactData.fullName}
            onChangeText={onChangeText}
            // maxLength={30}
            onFocus={() => handleFocus('fullName')}
            onBlur={() => handleBlur('fullName')}
            keyboardType="default"
            placeholder="Full Name*"
            textInputWrapperStyle={getWrapperStyle('fullName')}
            errorStyle={showFullNameError ? styles.errorMessageStyle : {}}
            showErrorField={showFullNameError}
            errorMessage={error.fullName}
          />
          {/* <NexusTextInput
            inputKey="phoneNumber"
            value={contactData.phoneNumber}
            maxLength={15}
            onChangeText={onChangeText}
            onFocus={() => handleFocus('phoneNumber')}
            onBlur={() => handleBlur('phoneNumber')}
            keyboardType="phone-pad"
            placeholder="Phone Number*"
            textInputWrapperStyle={getWrapperStyle('phoneNumber')}
            errorStyle={showPhoneNumberError ? styles.errorMessageStyle : {}}
            showErrorField={showPhoneNumberError}
            errorMessage={error.phoneNumber}
            /> */}
          <NexusPhoneInput
            value={phoneNumber}
            formattedValue={formattedValue}
            onChangeFormattedText={onChangeFormattedText}
            onChangeText={onChangePhoneNumber}
            phoneInputRef={phoneInputRef}
            onFocus={() => handleFocus('phoneNumber')}
            onBlur={() => handleBlur('phoneNumber')}
            // onEndEditing={onEndEditing}
            PhoneInputWrapperStyle={getWrapperStyle('phoneNumber')}
            errorStyle={showPhoneNumberError ? styles.phoneErroStyle : {}}
            showErrorField={showPhoneNumberError}
            errorMessage={error.phoneNumber}
            maxLength={20}
          />
          <NexusTextInput
            inputKey="emailAddress"
            value={contactData.emailAddress}
            onChangeText={onChangeText}
            onFocus={() => handleFocus('emailAddress')}
            onBlur={() => handleBlur('emailAddress')}
            keyboardType="email-address"
            placeholder="Email Address*"
            textInputWrapperStyle={getWrapperStyle('emailAddress')}
            errorStyle={showEmailError ? styles.errorMessageStyle : {}}
            showErrorField={showEmailError}
            errorMessage={error.emailAddress}
          />
          <NexusTextInput
            inputKey="message"
            value={contactData.message}
            onChangeText={onChangeText}
            onFocus={() => handleFocus('message')}
            onBlur={() => handleBlur('message')}
            keyboardType="default"
            placeholder="Write A Message..."
            multiline
            textInputStyle={styles.multiLineTextInput}
            textInputWrapperStyle={{
              ...styles.multiLineInputWrapper,
              ...getWrapperStyle('message'), // Spread the style object
            }}
            errorStyle={showMessageError ? styles.errorMessageStyle : {}}
            showErrorField={showMessageError}
            errorMessage={error.message}
          />

          <TouchableOpacity onPress={onSubmit} style={styles.submitBtn}>
            <Text style={styles.submitText}>{'Submit'}</Text>
          </TouchableOpacity>
        </View>



      </View>

    );
  },[markers]);

  const headerContact = () => {
    return (
      <ImageBackground
        source={require('../../assets/images/contact-us.jpg')}
        resizeMode="cover"
        style={styles.headerImageBackground}>
        <Text style={styles.text}>{'Contact'}</Text>
      </ImageBackground>
    );
  };

return (
  <View style={styles.root}>
    <FlatList 
    data={[1]}
    keyExtractor={item=>String(item)}
   renderItem={renderItem}
   ListHeaderComponent={headerContact}
   contentContainerStyle={styles.flatListContent}
   initialNumToRender={1} 
   maxToRenderPerBatch={1} 
   removeClippedSubviews={true}

   />
  </View>
)

}

export default ContactUs;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    color: Colors.white,
    ...Fonts.poppinsTextBold38,
    textAlign: 'center',
  },
  flatListContent: {
    flexGrow: 1,
  },
  headerImageBackground: {
    justifyContent: 'center',
    paddingTop: Math.round(hdp(14.6)),
    paddingBottom: Math.round(hdp(14.6)),
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: Colors.black,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  contactUsHeader: {
    marginTop: Math.round(hdp(8)),
    alignItems: 'center',
    marginBottom: Math.round(hdp(4)),
    // paddingBottom: hdp(4),
  },
  contactUsText: {
    color: Colors.primary,
    ...Fonts.poppinsTextMedium18,
  },
  dropUs: {
    ...Fonts.poppinsTextSemibold26,
    color: Colors.primary,
  },
  headerBefore: {
    borderTopColor: Colors.primary,
    borderTopWidth: 4,
    width: Math.round(wdp(12.8)),
    marginTop: Math.round(hdp(2)),
    borderBottomLeftRadius: Math.round(hdp(13.3)),
    borderBottomRightRadius: Math.round(hdp(13.3)),
  },
  contactContainer: {
    marginVertical: Math.round(hdp(2)),
  },
  countryText: {
    ...Fonts.poppinsTextBold20,
    marginBottom: Spacing.appVertical,
    color: Colors.primary,
  },
  city: {
    ...Fonts.poppinsTextBold16,
    lineHeight: Math.round(hdp(2.4)),
    color: Colors.black,
    marginBottom: Spacing.appVertical,
  },
  phoneText: {
    ...Fonts.poppinsTextRegular14,
    color: Colors.black,
    marginBottom: hdp(0.7),
  },
  faxText: {
    ...Fonts.poppinsTextRegular14,
    color: Colors.black,
    // marginBottom: hdp(1),
  },
  submitBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 10,
    width: '60%',
    height: Size.nexus_button_height,
    marginVertical: hdp(5),
    marginBottom: hdp(5),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  submitText: {
    color: Colors.white,
    ...Fonts.poppinsTextBold14,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  mapWrapper: {
    width: '100%',
    height: 400,
    marginVertical: 30,
    alignSelf: 'center',
  },
  multiLineTextInput: {
    textAlignVertical: 'top',
  },
  multiLineInputWrapper: {
    minHeight: 110,
  },
  errorMessageStyle: {
    borderWidth: 0.9,
    borderColor: Colors.red,
    textAlign: 'left',
    // paddingBottom:10
  },
  contactMain: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 25,
  },
  contactWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 25,
  },
  phoneErroStyle: {
    borderColor: Colors.red,
    textAlign: 'left',
    marginBottom: 10,
  },
});
