import { useRef, useState } from 'react';
import { Colors, Locations, regex } from '../../constants/constants';
import { ContactDataTypes } from '../../types/components';
import PhoneInput from 'react-native-phone-number-input';

const useContactUs = () => {

  const [focus, setFocus] = useState({
    fullName: false,
    phoneNumber: false,
    emailAddress: false,
    message: false,
  })

  const [contactData, setContactData] = useState({
    fullName: '',
    //  phoneNumber: '',
    emailAddress: '',
    message: '',
  })


  const [error, setError] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    message: '',
  })

  const [startFormValidation, setStartFormValidation] = useState(false);
  const phoneInputRef = useRef<PhoneInput>(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);

  const onChangeFormattedText = (
    text: string,
    phoneInputRef: React.RefObject<PhoneInput>,
  ) => {
    setFormattedValue(text);
    setCountryCode(phoneInputRef.current?.getCountryCode() || '');
  };


  const onChangePhoneNumber = (text: string) => setPhoneNumber(text);

  const showFullNameError =
    !!error.fullName && startFormValidation ? true : false;

  const showPhoneNumberError =
    !!error.phoneNumber && startFormValidation ? true : false;

  const showEmailError =
    !!error.emailAddress && startFormValidation ? true : false;


  const showMessageError =
    !!error.message && startFormValidation ? true : false;

  const handleFormValidation = () => {
    let isValid = true;
    const { fullName, emailAddress, message } = contactData;
    const cloneError = Object.assign({}, error);

    if (!fullName) {
      isValid = false;
      cloneError.fullName = 'Please provide your name';
    } else if (!regex.fullName.test(fullName)) {
      isValid = false;
      cloneError.fullName = 'Please enter a valid name';
    } else if (fullName.length > 25) {
      isValid = false;
      cloneError.fullName = 'Name can only contaie maximum 25 characters';
    } else {
      cloneError.fullName = '';
    }

    if (!phoneNumber) {
      isValid = false;
      cloneError.phoneNumber = 'Please provide phone name';
    } else if (!phoneInputRef.current?.isValidNumber(phoneNumber)) {
      isValid = false;
      cloneError.phoneNumber = 'Please enter a valid phone number';
    }
    //  else if (!regex.mobileNumber.test(phoneNumber)) {
    //   isValid = false;
    //   cloneError.phoneNumber = 'Please enter a valid phone number';
    // }
    else {
      cloneError.phoneNumber = '';
    }


    if (!emailAddress) {
      isValid = false;
      cloneError.emailAddress = 'Please provide email address';
    } else if (!regex.emailAddress.test(emailAddress)) {
      isValid = false;
      cloneError.emailAddress = 'Please enter a valid email address';
    } else {
      cloneError.emailAddress = '';
    }


    if (!message) {
      isValid = false;
      cloneError.message = 'Please provide message';
    } else if (message.length <= 5) {
      isValid = false;
      cloneError.message = 'Message should have atleat 5 words';
    } else {
      cloneError.message = '';
    }

    setStartFormValidation(true);
    setError(cloneError);

    return isValid;

  }

  const onSubmit = () => {
    const canMakeNetworkRequest = handleFormValidation();
    if (!canMakeNetworkRequest) return;

  }

  const onChangeText = (inputKey: string, text: string) => {
    setContactData((prevState: ContactDataTypes) => ({
      ...prevState,
      [inputKey]: text,
    }));
  };

  const handleFocus = (field: keyof typeof focus) => {
    setFocus(prevState => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleBlur = (field: keyof typeof focus) => {
    setFocus(prevState => ({
      ...prevState,
      [field]: false,
    }));
  };

  const getWrapperStyle = (field: keyof typeof focus) => ({
    borderColor: focus[field] ? Colors.primary : Colors.tintGrey,
    ...(focus[field] && { shadowColor: Colors.primary }), // conditionally add shadowColor
  });

  const markers = Object.keys(Locations.results).map(key => {
    const location = Locations.results[key];
    return {
      key, // Unique key for the marker
      name: location.name,
      coordinates: {
        latitude: parseFloat(location.lat),
        longitude: parseFloat(location.lng),
      },
    };
  });

  return {
    markers,
    getWrapperStyle,
    handleBlur,
    handleFocus,
    onChangeText,
    contactData,
    onSubmit,
    showFullNameError,
    showPhoneNumberError,
    showEmailError,
    showMessageError,
    error,
    phoneInputRef,
    onChangeFormattedText,
    onChangePhoneNumber,
    formattedValue,
    countryCode,
    phoneNumber,
  };
};



export { useContactUs };
