import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.textStyle}>Home</Text>
        <Text
          style={styles.textStyle}
          onPress={() => this.props.navigation.navigate('About')}>
          About
        </Text>
        <Text
          style={styles.textStyle}
          onPress={() => this.props.navigation.navigate('Contact')}>
          Contact
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
  },
});

export default Home;
