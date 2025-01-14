import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, ScrollView  } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "expo-router";
import StyledText from "./StyledText";
import { CircleInfoIcon } from "./Icons";

const AppBar = () => {
  return (
    <View style={[styles.container]}>
      <ScrollView horizontal={true}>
      <TouchableOpacity onPress={() => console.log("Pressed!")}>
        <StyledText fontWeight='bold' style={styles.text}>Repositories</StyledText>
      </TouchableOpacity>
        <Link href="/signIn">
        <Pressable>
          <StyledText fontWeight='bold' style={styles.text}>Sign in</StyledText>
        </Pressable>
      </Link>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight ,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.appBar.primary
  },
  text: {
    color: theme.colors.white,
    paddingHorizontal: 10, 
    textAlignVertical: "center",
  },
});

export default AppBar;
