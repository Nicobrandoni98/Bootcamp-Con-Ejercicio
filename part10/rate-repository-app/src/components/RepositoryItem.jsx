import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

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
      <Text style={[styles.text, styles.fontWeightBold]}>{fullName}</Text>
      <Text style={[styles.text, styles.colorPrimary]}>{description}</Text>
      <Text>{language}</Text>
      <View>
        <Text style={[styles.colorTextSecondary]}>Stars: {stargazersCount}</Text>
        <Text>Forks: {forksCount}</Text>
        <Text>Rating: {ratingAverage}</Text>
        <Text>Reviews: {reviewCount}</Text>
      </View>
    </View>
  );
};

export default RepositoryItem;
