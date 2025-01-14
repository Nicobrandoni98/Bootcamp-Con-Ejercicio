import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: '#ccc', // Color del borde normal
      borderRadius: 4,
      padding: 10,
    },
    inputError: {
      borderColor: '#d73a4a', // Rojo para los errores
    },
  });
  

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style];
  if (error) {
    textInputStyle.push(styles.inputError)
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;