import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import Footer from '../components/Footer';
import {Icon} from 'react-native-elements';
const text = {
  header: 'Get notifications to boost your motivation',
  skip: 'Skip',
  continue: 'Allow notifications',
};

interface Props {
  title?: string;
}

type State = {
  title?: string;
};

export default class Success extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/notifications-background-image.jpg')}
          resizeMode="cover"
          style={styles.imageCover}>
          <Icon
            style={{marginTop: 20}}
            tvParallaxProperties=""
            type="font-awesome"
            size={40}
            name="bell-o"
          />
          <Text style={styles.headerText}>{text.header}</Text>
          <View style={styles.skipContainer}>
            <Text style={styles.skipText}>{text.skip}</Text>
          </View>
        </ImageBackground>
        <View style={styles.viewFooter}>
          <TouchableOpacity style={styles.createAccountBtn}>
            <Text style={styles.createAccountText}>{text.continue}</Text>
          </TouchableOpacity>
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
  form: {
    flex: 1,
    marginTop: 50,
    marginLeft: 25,
    marginRight: 25,
    alignSelf: 'stretch',
  },
  imageCover: {
    flex: 1,
    alignSelf: 'stretch',
  },
  headerText: {
    alignSelf: 'stretch',
    fontSize: 22,
    color: 'rgba(74, 74, 74, 0.8)',
    textAlign: 'center',
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  inputView: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  skipText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  skipContainer: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
  },
  viewFooter: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 35,
  },
  createAccountBtn: {
    width: '100%',
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
