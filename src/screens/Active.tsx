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

const text = {
  header: 'When is your baby due, Sam?',
  label: 'Your Name',
  continue: 'Continue',
};

interface Props {
  title?: string;
}

type State = {
  open: any;
  date: Date;
};

export default class Active extends React.Component<Props, State> {
  state: State = {
    open: false,
    date: new Date(2021, 7, 19, 12),
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageHeader}>
          <Image
            style={styles.image}
            width={Dimensions.get('window').width}
            source={require('../../assets/workout-goal-background-image.jpg')}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.headerText}>{text.header}</Text>
          <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.createAccountBtn}>
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
  createAccountText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
