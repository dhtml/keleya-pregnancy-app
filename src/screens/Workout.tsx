import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import Footer from '../components/Footer';
import {SpinPicker} from 'react-native-spin-picker';
import {NavigationScreenProp} from 'react-navigation';

const text = {
  header: 'How many times a week do you want to be active?',
  continue: 'Continue',
};

interface Props {
  title?: string;
  navigation: NavigationScreenProp<any, any>;
}

type State = {
  selectedItem: string;
};

export default class Workout extends React.Component<Props, State> {
  state: State = {
    selectedItem: '3 times a week',
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/workout-goal-background-image.jpg')}
          resizeMode="cover"
          style={styles.imageCover}>
          <Text style={styles.headerText}>{text.header}</Text>
        </ImageBackground>
        <View style={styles.form}>
          <SpinPicker
            style={styles.spinner}
            data={[
              'once a week',
              '2 times a week',
              '3 times a week',
              '4 times a week',
              '5 times a week',
              '6 times a week',
              '7 times a week',
            ]}
            value={this.state.selectedItem}
            onValueChange={(selectedItem: any) => this.setState({selectedItem})}
            onInputValueChanged={this.onValueChanged}
            keyExtractor={(number: {toString: () => any}) => number.toString()}
            renderItem={(item: {toString: () => React.ReactNode}) => (
              <View style={styles.spinnerTextView}>
                <Text style={styles.spinnerText}>{item.toString()}</Text>
              </View>
            )}
          />

          <View style={styles.viewFooter}>
            <TouchableOpacity
              style={styles.createAccountBtn}
              onPress={() => {
                this.props.navigation.navigate('Success');
              }}>
              <Text style={styles.createAccountText}>{text.continue}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </View>
    );
  }

  private onValueChanged = (value: string, previousValue: string): string => {
    this.setState({selectedItem: value});
    return previousValue;
  };
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
    flex: 2,
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
  viewFooter: {
    position: 'absolute',
    width: '100%',
    bottom: 35,
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
  spinnerContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    flexDirection: 'row',
  },
  spinner: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    alignSelf: 'stretch',
  },
  spinnerText: {
    color: '#000000',
  },
  spinnerTextView: {
    backgroundColor: '#EEEEEF',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
