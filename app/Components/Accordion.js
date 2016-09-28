import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Accordion from 'react-native-accordion';

export default class AccordionItem extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(this.props.data)
    }
  }
  _renderRow(rowData, i, o) {
    console.log(rowData, o);
    const header = (
      <View style={styles.rowHeader}>
        <Text style={{alignSelf: 'flex-start'}}>{o}</Text>
        <Text style={{alignSelf: 'flex-end'}}>&times;</Text>
      </View>
    );
    const content = (<View>{rowData.map((item) => {return (<Text>{item.name}, {item.cut}</Text>)})}</View>);
    return (<Accordion underlayColor='#4cbbff' activeOpacity={.4} style={{backgroundColor: '#4cbbff'}} header={header} content={content} easing="easeInOutSine" />);
  }
  render() {

    return (
      <ListView dataSource={this.state.dataSource} renderRow={(rowData, i, o) => this._renderRow(rowData, i, o)} />
    );
  }
}

const styles = StyleSheet.create({
  rowHeader: {
    justifyContent: 'space-between',
    alignItems:'flex-start',
    flexDirection: 'row',
    padding: 15,
  },
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

