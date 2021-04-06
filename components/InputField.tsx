import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Shadow, Colors, FontStyle, Metrics } from '../definitions/theme';

interface InputFieldProps {
    mode: any,
    label: string,
    onChangeText: any;
    onBlur: any;
    value: string,
    error?: ReactNode,
    isError?: boolean,
}

const InputField = (props: InputFieldProps) => {
  return (
    <>
      <TextInput
        mode={props.mode}
        label={props.label}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
        style={{ ...FontStyle.Normal, backgroundColor: Colors.GrayScale.White, height: 50 }}
      />
      {props.error}
      {!props.isError && <View style={{ height: Metrics.Margin, width: '100%'}}/>}
    </>
  );
};

export default InputField;
