import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a'
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;