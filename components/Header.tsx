import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { Colors, FontStyle, Metrics, Shadow } from '../definitions/theme';

interface HeaderProps {
  leftIcon?: string;
  leftAction?: any;
  rightIcon: string;
  rightAction: any;
  title: string;
  subtitle: string;
  color: string;
}

const Header = (props: HeaderProps) => {
  const infoHeader = (color: string, type: string) => {
    const textStyle = type === 'title' ? FontStyle.Header : FontStyle.Normal;
    return {
      ...textStyle,
      color: color,
    };
  };
  return (
    <View style={styles.headerContainer}>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: Metrics.Margin,
          },
          !props.hasOwnProperty('leftIcon')
            ? { justifyContent: 'flex-end' }
            : null,
        ]}
      >
        {props.hasOwnProperty('leftIcon') && (
          <Button
            icon={props.leftIcon}
            onPress={props.leftAction}
            labelStyle={[
              FontStyle.LabelButton,
              { color: Colors.GrayScale.SuperDark },
            ]}
            mode="contained"
            compact
            style={[Shadow, styles.ActionButton]}
          />
        )}
        <Button
          icon={props.rightIcon || 'arrow-right'}
          onPress={props.rightAction}
          labelStyle={[
            FontStyle.LabelButton,
            { color: Colors.GrayScale.SuperDark },
          ]}
          mode="contained"
          compact
          style={[Shadow, styles.ActionButton]}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={infoHeader(props.color, 'title')}>{props.title}</Text>
        <Divider style={[styles.divider, {backgroundColor: props.color}]}/>
        <Text style={infoHeader(props.color, 'subtitle')}>{props.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    padding: Metrics.Padding,
    justifyContent: 'space-between',
    marginBottom: Metrics.Margin * 4,
  },
  checkboxLabel: {
    ...FontStyle.Min,
    letterSpacing: 1,
    color: Colors.GrayScale.SuperDark,
  },
  borderIos: {
    borderColor: Colors.Primary,
    borderWidth: 1,
    borderRadius: 8,
    position: 'absolute',
    zIndex: 1,
    width: 25,
    height: 25,
  },
  ActionButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.GrayScale.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    ...Shadow,
  },
  titleContainer: {
    marginTop: Metrics.Margin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    width: '40%',
    height: 0.5,
  }
});

export default Header;
