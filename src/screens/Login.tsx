import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Image from 'react-native-scalable-image';
import Footer from '../components/Footer';
import Password from '../components/Password';

const text = {
  header: 'Welcome back!',
  password: 'Enter a password',
  forgotten: 'Have you forgotten your password?',
  create: 'Log in',
};

interface Props {
  title?: string;
}

type State = {
  password: boolean;
};

export default class Login extends React.Component<Props, State> {
  state: State = {
    password: true,
  };
  render() {
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
              placeholder="example@gmail.com"
              placeholderTextColor="#4a4a4a"
            />
          </View>

          <View style={styles.inputView}>
            <Password
              value={''}
              label={text.password}
              //onChange={(password: any) => this.setState({password: password})}
              height={40}
            />
          </View>

          <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>{text.forgotten}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccountBtn}>
              <Text style={styles.createAccountText}>{text.create}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}

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
  viewFooter: {
    position: 'absolute',
    width: '100%',
    bottom: 35,
  },
  createAccountBtn: {
    width: '100%',
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#9b9b9b',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  createAccountText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotBtn: {
    width: '100%',
    fontSize: 16,
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  forgotText: {
    color: '#9b9b9b',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
