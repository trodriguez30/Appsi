import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Shadow, Colors, FontStyle } from '../definitions/theme';

interface InputFieldProps {
    mode: any,
    label: string,
    onChangeText: any;
    onBlur: any;
    value: string,
    error?: ReactNode,
}

const InputField = (props: InputFieldProps) => {
  return (
    <View>
      <TextInput
        mode={props.mode}
        label={props.label}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
        style={{ ...FontStyle.Normal, backgroundColor: Colors.GrayScale.White, ...Shadow }}
      />
      {props.error}
    </View>
  );
};

export default InputField;
