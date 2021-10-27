import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {
  title: string;
}

interface Props {
  title: string;
}

type State = {
  count: number; // like this
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Header extends React.Component<Props, State> {
  state: State = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}

export default Header;
