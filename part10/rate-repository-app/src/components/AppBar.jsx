import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback  } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // ...
  },
  colorTab: {
    backgroundColor: theme.backgroundColor.appBar,
  },
  textTab: {
    color: theme.colors.secundary,
    fontSize: theme.fontSizes.subheading
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={[styles.container, styles.colorTab]}>
      <TouchableOpacity onPress={() => console.log("Pressed!")}>
        <Text style={styles.textTab}>Repositories</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;
