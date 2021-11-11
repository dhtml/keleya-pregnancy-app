import React from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  value: string;
  label: string;
  height: number;
  onValueChange: (value: string) => void;
  style?: ViewStyle | ViewStyle[];
}

type State = {
  value: string;
  visible: boolean;
};

export default class Password extends React.Component<Props, State> {
  static defaultProps = {
    label: '',
    height: 40,
  };

  state: State = {
    value: this.props.value,
    visible: false,
  };
  render() {
    return (
      <View
        style={{
          display: 'flex',
          marginVertical: 5,
        }}>
        <View style={styles.container}>
          <TextInput
            style={{
              height: this.props.height,
              flex: 1,
              alignSelf: 'stretch',
              paddingHorizontal: 10,
            }}
            onChangeText={text => {
              this.setState({value: text});
              this.props.onValueChange(text);
            }}
            onBlur={() => {}}
            value={this.state.value}
            placeholder={this.props.label}
            secureTextEntry={!this.state.visible}
          />
          <Icon
            name={!this.state.visible ? 'eye-slash' : 'eye'}
            color={'#000000'}
            onPress={() => this.setState({visible: !this.state.visible})}
            style={[
              styles.icons,
              {height: this.props.height, width: this.props.height},
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomColor: 'rgba(74, 74, 74, 0.8)',
    borderBottomWidth: 1,
  },
  icons: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
