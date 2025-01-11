import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { repositories } from "./data/repositories";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
       <RepositoryItem {...repo}/>
      )}
    ></FlatList>
  );
};

export default RepositoryList;
