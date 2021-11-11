import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Image from 'react-native-scalable-image';
import Footer from '../components/Footer';
import {NavigationScreenProp} from 'react-navigation';

const data = [
  {
    text: 'For a fit and relaxed pregnancy 1',
    bgImage: require('../../assets/slides/first-intro-image.png'),
  },
  {
    text: 'To get the best results for your pregnancy',
    bgImage: require('../../assets/slides/second-intro-image.png'),
  },
  {
    text: 'For a smooth and safe delivery',
    bgImage: require('../../assets/slides/third-intro-image.png'),
  },
];

type Item = typeof data[0];

export interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export default class Welcome extends React.Component<Props> {
  _renderItem = ({item}: {item: Item}) => {
    return (
      <View style={styles.slide}>
        <ImageBackground
          source={item.bgImage}
          resizeMode="cover"
          style={styles.slideBg}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              width={Dimensions.get('window').width / 6}
              source={require('../../assets/logo.png')}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </ImageBackground>
        <View style={styles.bottom}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginTextWrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={styles.loginText}>Or Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.text;

  render() {
    return (
      <View style={{flex: 1}}>
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          activeDotStyle={{backgroundColor: 'rgba(105, 192, 186, 1)'}}
          dotStyle={{backgroundColor: 'rgba(210, 236, 234, 1)'}}
          data={data}
        />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  slideBg: {
    flex: 1,
  },
  logoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  logo: {
    resizeMode: 'contain',
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 70,
  },
  text: {
    flex: 0.4,
    fontSize: 14,
    color: 'rgba(74, 74, 74, 0.8)',
    textAlign: 'center',
  },
  bottom: {
    backgroundColor: '#ffffff',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  button: {
    flex: 0.8,
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#69C0BA',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    color: '#ffffff',
  },

  loginTextWrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 70,
  },
  loginText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
