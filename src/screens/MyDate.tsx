import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Image from 'react-native-scalable-image';
import Footer from '../components/Footer';
import DatePicker from 'react-native-date-picker';
import {NavigationScreenProp} from 'react-navigation';

const text = {
  header: 'When is your baby due, Sam?',
  label: 'Your Name',
  continue: 'Continue',
};

interface Props {
  title?: string;
  navigation: NavigationScreenProp<any, any>;
}

type State = {
  open: boolean;
  activate: boolean;
  date: Date;
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default class MyDate extends React.Component<Props, State> {
  state: State = {
    open: false,
    date: new Date(2021, 7, 19, 12),
    activate: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageHeader}>
          <Image
            style={styles.image}
            width={Dimensions.get('window').width}
            source={require('../../assets/due-date-background-image.jpg')}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.headerText}>{text.header}</Text>

          <DatePicker
            modal
            open={this.state.open}
            date={this.state.date}
            onConfirm={date => {
              this.setState({open: false, date: date, activate: true});
            }}
            onCancel={() => {
              this.setState({open: false});
            }}
          />

          <View style={styles.inputView}>
            <TouchableOpacity
              style={styles.DateBtn}
              onPress={() => this.setState({open: true})}>
              <Text style={styles.DateText}>{`${
                monthNames[this.state.date.getMonth()]
              } ${this.state.date.getDate()}, ${this.state.date.getFullYear()}`}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewFooter}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.activate) {
                  this.props.navigation.navigate('Workout');
                }
              }}
              style={
                this.state.activate
                  ? styles.activatedButton
                  : styles.createAccountBtn
              }>
              <Text style={styles.createAccountText}>{text.continue}</Text>
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
    flex: 1.2,
  },
  image: {
    flex: 1,
  },

  form: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    alignSelf: 'stretch',
  },
  headerText: {
    fontSize: 22,
    color: 'rgba(74, 74, 74, 0.8)',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
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
  DateBtn: {
    alignSelf: 'center',
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    padding: 10,
    width: 150,
    borderRadius: 10,
  },
  DateText: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
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
