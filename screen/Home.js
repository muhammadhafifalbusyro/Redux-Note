import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {emailChange} from '../redux/action';

class Home extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          value={this.props.email}
          placeholder="Email"
          onChangeText={(text) => this.props.emailChange(text)}
        />
        <Button
          title="TO SETTING"
          onPress={() => this.props.navigation.navigate('Setting')}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const {email} = state.reducers;
  return {email};
};

export default connect(mapStateToProps, {emailChange})(Home);

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#841584',
    borderRadius: 1,
    borderWidth: 1,
    width: 300,
    height: 50,
    margin: 10,
    padding: 5,
  },
});
