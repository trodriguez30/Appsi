import React, { useState } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import { Button } from 'react-native-paper';
import Constants from 'expo-constants';

import { Metrics, Shadow, Colors, FontStyle } from '../definitions/theme';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import InputField from '../components/InputField';
import ErrorText from '../components/ErrorText';
import Checkbox from '../components/Checkbox';
import { StatusBar } from 'expo-status-bar';

interface LoginValues {
  username: string;
  password: string;
}

const requiredText = 'Campo obligatorio!';
const LoginSchema = yup.object().shape({
  username: yup.string().required(requiredText),
  password: yup
    .string()
    .required(requiredText)
    .min(6, 'La contraseña debe ser mínimo de 6 caracteres!'),
});

const Login = (props: any) => {
  const initialValues: LoginValues = { username: '', password: '' };

  const [isChecked, setIsChecked] = useState(false);

  function _setChecked(status: boolean) {
    setIsChecked(status);
  }

  const ErrorComponent = (props: any) => (
    <ErrorMessage name={props.name}>
      {(msg) => <ErrorText error={msg} />}
    </ErrorMessage>
  );

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={{
          flex: 1,
        }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <KeyboardAvoidingView
              behavior="height"
              style={{
                paddingHorizontal: Metrics.Padding * 2,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: Metrics.ScreenHeight * 0.53,
                position: 'absolute',
                bottom: 0,
              }}
            >
              <InputField
                mode="outlined"
                label="Usuario"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                error={<ErrorComponent name="username" />}
                isError={errors.username ? true : false}
              />
              <InputField
                mode="outlined"
                label="Contraseña"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={<ErrorComponent name="password" />}
                isError={errors.password ? true : false}
              />
              <View style={styles.loginAction}>
                <Text style={[FontStyle.LabelButton, styles.loginButtonLabel]}>
                  Iniciar sesión
                </Text>
                <Button
                  icon="arrow-right"
                  onPress={handleSubmit}
                  labelStyle={[
                    FontStyle.LabelButton,
                    { color: Colors.GrayScale.White },
                  ]}
                  mode="contained"
                  compact
                  style={[Shadow, styles.loginButton]}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Checkbox handleChecked={_setChecked} label="Recordar" />
                <Button
                  mode="text"
                  style={[Shadow, { marginTop: 8 }]}
                  uppercase={false}
                  contentStyle={{
                    borderBottomColor: Colors.GrayScale.SuperDark,
                    borderBottomWidth: 1,
                  }}
                  labelStyle={{
                    ...FontStyle.Min,
                    color: Colors.GrayScale.SuperDark,
                  }}
                  onPress={() => props.navigation.navigate('Services')}
                >
                  Olvidé mi contraseña
                </Button>
              </View>
              <View style={styles.versionContainer}>
                <Text
                  style={styles.versionNumber}
                >{`V ${Constants.manifest.version}`}</Text>
                <Text style={styles.versionNumber}>TR - 2021 {'\u00A9'}</Text>
              </View>
            </KeyboardAvoidingView>
          )}
        </Formik>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Metrics.ScreenWidth,
    width: Metrics.ScreenWidth,
  },
  iconContainer: {
    height: Metrics.ScreenHeight * 0.25,
    width: Metrics.ScreenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconDimensions: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  formContainer: {
    flex: 1,
    height: Metrics.ScreenHeight,
    width: Metrics.ScreenWidth,
    justifyContent: 'flex-end',
  },
  versionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionNumber: {
    ...FontStyle.Min,
    textAlign: 'center',
    color: Colors.Primary,
    ...Shadow,
  },
  loginAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  loginButton: {
    height: 50,
    width: 50,
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  loginButtonLabel: {
    color: Colors.GrayScale.SuperDark,
  },
});

export default Login;
