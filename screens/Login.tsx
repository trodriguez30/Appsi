import React, { useState } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import Constants from 'expo-constants';

import { Metrics, Shadow, Colors, FontStyle } from '../definitions/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import InputField from '../components/InputField';
import ErrorText from '../components/ErrorText';
import Checkbox from '../components/Checkbox';

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

const Login = () => {
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
    <View style={{ flex: 1, position: 'relative', zIndex: 1 }}>
      <LinearGradient
        colors={[Colors.Primary, Colors.Second]}
        style={styles.container}
      />
      <View
        style={{
          flex: 1,
          height: Metrics.ScreenHeight,
          width: Metrics.ScreenWidth,
          position: 'absolute',
          zIndex: 2,
        }}
      >
        <View style={styles.iconContainer}>
          <View style={[Shadow, styles.iconDimensions]}>
            <Image
              source={require('../assets/icon.png')}
              resizeMode="contain"
              style={styles.iconDimensions}
            />
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={[styles.formContent, Shadow]}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => console.log(values)}
              validationSchema={LoginSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <KeyboardAvoidingView
                  behavior="height"
                  style={{
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      padding: Metrics.Padding * 2,
                      flex: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={[FontStyle.Subtitle, { flex: 1, textAlign: 'center' }]}>
                      SIGN IN
                    </Text>
                    <InputField
                      mode="outlined"
                      label="Usuario"
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                      error={<ErrorComponent name="username" />}
                    />
                    <InputField
                      mode="outlined"
                      label="Contraseña"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      error={<ErrorComponent name="password" />}
                    />
                    <Button
                      uppercase={false}
                      labelStyle={FontStyle.Button}
                      mode="contained"
                      onPress={handleSubmit}
                      style={{ ...Shadow, marginVertical: Metrics.Margin * 2}}
                    >
                      Iniciar sesión
                    </Button>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <Checkbox handleChecked={_setChecked} label="Recordar" />
                      <Button
                        mode="text"
                        style={Shadow}
                        uppercase={false}
                        contentStyle={{ borderBottomColor: Colors.GrayScale.SuperDark, borderBottomWidth: 1 }}
                        labelStyle={{...FontStyle.Normal, color: Colors.GrayScale.SuperDark}}
                        onPress={() => null}
                      >
                        Olvidé mi contraseña
                      </Button>
                    </View>
                    <View style={styles.versionContainer}>
                    <Text style={styles.versionNumber}>{`V ${Constants.manifest.version}`}</Text>
                    <Text style={styles.versionNumber}>TR - 2021 {'\u00A9'}</Text>
                    </View>
                  </View>
                </KeyboardAvoidingView>
              )}
            </Formik>
          </View>
        </View>
      </View>
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
    height: Metrics.ScreenHeight * 0.75,
    width: Metrics.ScreenWidth,
    paddingVertical: Metrics.Padding * 4,
    paddingHorizontal: Metrics.Padding * 2,
  },
  formContent: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.GrayScale.White,
    borderRadius: Metrics.BorderRadius,
  },
  versionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionNumber: {
    ...FontStyle.Min,
    textAlign: 'center',
    color: Colors.GrayScale.Dark,
  }
});

export default Login;
