import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import RenderListItem from './RenderListItem';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RenderList extends Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }
  _onPress() {
    this.props.onPress();
  }
  render() {
    const {dataItem, onPress, pressed, renderData} = this.props;
    const renderItems = renderData.map((item) => {
      return (<Text><Icon name='circle' size={5}/>{item.name}</Text>)
    });
    return (
      <View>
        <TouchableOpacity key={dataItem} onPress={this._onPress} style={styles.rowMain}>
          <View style={styles.rowText}>
            <Text style={{alignSelf: 'flex-start'}}>{dataItem}</Text>
            <Text style={{alignSelf: 'flex-end'}}>{pressed ? <Icon name='toggle-up' size={10} /> : <Icon name='toggle-down' size={10} />}</Text>
          </View>
          <View style={pressed ? styles.showData : styles.hideData}>
          {renderItems}
          </View>
        </TouchableOpacity>
        <View style={{height:5, backgroundColor: 'red'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowMain: {
    flexDirection: 'column',
    backgroundColor: '#44bcff',
    padding: 20,
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  showData: {
    opacity: 1,
  },
  hideData: {
    opacity: 0,
    height: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },

});

