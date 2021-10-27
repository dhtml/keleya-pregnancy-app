import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 15,
    width: '100%',
  },
  linearGradient: {
    flex: 0.35,
    height: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
});

interface Props {
  style?: any;
}
export default class Footer extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.footer, {...this.props.style}]}>
        <LinearGradient
          colors={['#797979', '#aeaeae']}
          style={styles.linearGradient}
          start={{x: 0.8, y: 0.5}}
          end={{x: 1, y: 0.5}}
        />
      </View>
    );
  }
}
