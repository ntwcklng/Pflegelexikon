import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import RenderListItem from './RenderListItem';

export default class RenderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      pressed: '',
      rowHeader: [],
    };

  }
  _onRowPress(key) {
    let changeState;
    if (key === this.state.pressed) {
      changeState = '';
    } else if (this.state.data[key]) {
      changeState = key;
    }
    this.setState({pressed: changeState});
  }
  buildData() {
    let data = [];
    Object.keys(this.state.data).forEach((dataItem) => {
      const renderData = this.state.data[dataItem];
      data.push(
        <RenderListItem renderData={renderData} dataItem={dataItem} pressed={this.state.pressed === dataItem} onPress={() => this._onRowPress(dataItem)} />
      );
    });
    return data;
  }
  render() {
    let data = this.buildData();
    return (
      <View style={styles.container}>
        <View style={{flex:1, flexDirection: 'column'}}>{data}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  showData: {
    opacity: 1,
    height:1,
  },
  hideData: {
    opacity: 0,
    height: 0
  },
  container: {
    flex: 1,
  },

});

