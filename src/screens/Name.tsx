import React, {useState, useEffect} from 'react';
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
import {NavigationScreenProp} from 'react-navigation';

const text = {
  header:
    "It's great that you're here! First things first, what should we call you?",
  label: 'Your Name',
  continue: 'Continue',
};

interface Props {
  title?: string;
  navigation: NavigationScreenProp<any, any>;
}

const Name: React.FC<Props> = props => {
  const [name, setName] = useState<string>('');
  const [activate, setActivate] = useState<boolean>(false);

  useEffect(() => {
    //validation
    setActivate(name.length > 1);
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={styles.imageHeader}>
        <Image
          style={styles.image}
          width={Dimensions.get('window').width}
          source={require('../../assets/couch_smile.jpg')}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.headerText}>{text.header}</Text>

        <View style={styles.inputView}>
          <TextInput
            value={name}
            style={styles.TextInput}
            placeholder={text.label}
            placeholderTextColor="#4a4a4a"
            onChangeText={name => {
              setName(name);
            }}
          />
        </View>

        <View style={styles.viewFooter}>
          <TouchableOpacity
            onPress={() => {
              if (activate) {
                props.navigation.navigate('MyDate');
              }
            }}
            style={activate ? styles.activatedButton : styles.createAccountBtn}>
            <Text style={styles.createAccountText}>{text.continue}</Text>
          </TouchableOpacity>
        </View>
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
export default Name;
