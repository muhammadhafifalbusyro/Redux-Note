# REDUX NOTE

## Installing Package

- react-navigation
- react-redux
- redux
- redux-thunk

## Create Folder

- redux
  - action
  - reducers

## Make Action

### Create `type.js`

```javascript
export const EMAIL_CHANGE = "EMAIL_CHANGE";
```

### Create `index.js`

```javascript
import { EMAIL_CHANGE } from "./type";

const emailChange = (text) => {
  return {
    type: EMAIL_CHANGE,
    payload: text,
  };
};

export { emailChange };
```

## Make Reducers

### Create `index.js`

```javascript
import { EMAIL_CHANGE } from "../action/type";
import { combineReducers } from "redux";

const initialState = {
  email: "",
};

const reducers = (state = { initialState }, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const appState = combineReducers({
  reducers,
});

export default appState;
```

## Make Store

### Create in `App.js`

```javascript
import React from "react";
import NavigationScreen from "./src/routes/routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/redux/reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationScreen />
      </Provider>
    );
  }
}
export default App;
```

## Use Redux

preparing file `Home.js` and `Setting.js`

- in `Home.js`

```javascript
import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { emailChange } from "../redux/action";

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
          onPress={() => this.props.navigation.navigate("Setting")}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { email } = state.reducers;
  return { email };
};

export default connect(mapStateToProps, { emailChange })(Home);

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#841584",
    borderRadius: 1,
    borderWidth: 1,
    width: 300,
    height: 50,
    margin: 10,
    padding: 5,
  },
});
```

- in `Setting.js`

```javascript
import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

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
  const { email } = state.reducers;
  return { email };
};
export default connect(mapStateToProps)(Setting);
```
