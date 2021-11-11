import React, {useState, useEffect} from 'react';
const validator = require('validator');

import {
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Image from 'react-native-scalable-image';
import Footer from '../components/Footer';
import Password from '../components/Password';
import {NavigationScreenProp} from 'react-navigation';

const text = {
  header: 'Add your details below to set up an account',
  password: 'Enter a password',
  privacy: "I've read the privacy policy",
  terms: "I accept the terms & conditions and Keleya's advice",
  create: 'Create account',
};

interface Props {
  title?: string;
  navigation: NavigationScreenProp<any, any>;
}

const Signup: React.FC<Props> = props => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  const [activate, setActivate] = useState<boolean>(false);

  useEffect(() => {
    //validation
    setActivate(false);
    if (!validator.isEmail(email)) {
      return;
    }
    if (password.length < 1) {
      return;
    }
    if (!privacy || !terms) {
      return;
    }
    setActivate(true);
  }, [email, password, privacy, terms]);

  return (
    <View style={styles.container}>
      <View style={styles.imageHeader}>
        <Image
          style={styles.image}
          width={Dimensions.get('window').width}
          source={require('../../assets/authentication-background-image.jpg')}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.headerText}>{text.header}</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            value={email}
            placeholder="example@gmail.com"
            placeholderTextColor="#4a4a4a"
            onChangeText={email => {
              setEmail(email);
            }}
          />
        </View>

        <View style={styles.inputView}>
          <Password
            value={password}
            label={text.password}
            onValueChange={password => {
              setPassword(password);
            }}
            height={40}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={privacy}
            onValueChange={newValue => setPrivacy(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{text.privacy}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={terms}
            onValueChange={newValue => setTerms(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{text.terms}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            if (activate) {
              props.navigation.navigate('Name');
            }
          }}
          style={activate ? styles.activatedButton : styles.createAccountBtn}>
          <Text style={styles.createAccountText}>{text.create}</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageHeader: {
    flex: 1,
  },
  image: {
    flex: 1,
  },

  form: {
    flex: 2,
    marginLeft: 15,
    marginRight: 15,
    alignSelf: 'stretch',
  },
  headerText: {
    fontSize: 24,
    color: 'rgba(74, 74, 74, 0.8)',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  inputView: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 0,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  TextInput: {
    height: 40,
    borderBottomColor: 'rgba(74, 74, 74, 0.8)',
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 15,
    alignSelf: 'stretch',
  },
  createAccountBtn: {
    position: 'absolute',
    width: '100%',
    bottom: 35,
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#9b9b9b',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  activatedButton: {
    position: 'absolute',
    width: '100%',
    bottom: 35,
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#69C0BA',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  createAccountText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Signup;
