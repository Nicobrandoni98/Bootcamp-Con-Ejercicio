import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View>
      <Text>{fullName}</Text>
      <Text>{description}</Text>
      <Text>{language}</Text>
      <View>
        <Text>Stars: {stargazersCount}</Text>
        <Text>Forks: {forksCount}</Text>
        <Text>Rating: {ratingAverage}</Text>
        <Text>Reviews: {reviewCount}</Text>
      </View>
    </View>
  );
};

export default RepositoryItem;
