import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Setting extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.email}</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const {email} = state.reducers;
  return {email};
};
export default connect(mapStateToProps)(Setting);
