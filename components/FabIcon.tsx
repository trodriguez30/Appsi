import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Colors, Metrics } from '../definitions/theme';

function FabIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.borderButton}>
        <View style={[styles.button, { backgroundColor: Colors.Primary }]}>
          <Image
            source={require('../assets/tabbar/fab.png')}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

export default FabIcon;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 17.5,
    left: Metrics.ScreenWidth / 2 - 40,
  },
  borderButton: {
    height: 80,
    width: 80,
    padding: 10,
    borderRadius: 40,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'rgba(241,241,241,1)',
    shadowOpacity: 1,
  },
});
