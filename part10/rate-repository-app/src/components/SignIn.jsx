import React from "react";
import { View, StyleSheet, Button, Pressable } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { Link } from "expo-router";
import StyledText from "./StyledText";
import theme from "../theme";
import * as yup from 'yup'

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username needed 5 caracters or more')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'password needed 5 caracters or more')
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View>
      <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}
         >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry // Esto asegura que la contraseña esté oculta
            />
            <Button onPress={handleSubmit} title="Sign In" />
          </View>
        )}
      </Formik>
      <Link href="/">
        <Pressable>
          <StyledText fontWeight="bold" style={styles.text}>
            Sign in
          </StyledText>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 16,
  },
  text: {
    color: theme.colors.black,
    paddingHorizontal: 10,
    textAlignVertical: "center",
  },
});

export default SignIn;
