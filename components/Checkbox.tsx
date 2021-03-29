import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Checkbox as CheckboxPaper } from 'react-native-paper';
import { Colors, FontStyle, Metrics } from '../definitions/theme';

interface CheckboxProps {
  handleChecked: (status: boolean) => void;
  label: string;
}

const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    props.handleChecked(checked);
  }, [checked]);

  return (
    <View style={styles.checkboxContainer}>
      <View
        style={
          Platform.OS === 'ios'
            ? styles.borderIos
            : null
        }
      />
			<View style={{ zIndex: 2, ...styles.checkboxContainer }}>
        <CheckboxPaper
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          uncheckedColor={Colors.GrayScale.Medium}
          color={Colors.Primary}
        />
      <Text style={styles.checkboxLabel}>{props.label}</Text>
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
		position: 'relative',
  },
  checkboxLabel: {
    ...FontStyle.Normal,
		letterSpacing: 1,
    color: Colors.GrayScale.SuperDark,
		marginLeft: 4,
  },
	borderIos: {
		borderColor: Colors.Primary,
		borderWidth: 2,
		borderRadius: 8,
		position: 'absolute',
		zIndex: 1,
		width: 30,
		height: 30,
		marginLeft: 3,
	}
});

export default Checkbox;
