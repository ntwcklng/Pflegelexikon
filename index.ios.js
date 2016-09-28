/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Accordion from './app/Components/Accordion';

import PoliturenData from './app/Data/Polituren';

class AutopflegeLexikon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView><Accordion data={PoliturenData}/></ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AutopflegeLexikon', () => AutopflegeLexikon);
