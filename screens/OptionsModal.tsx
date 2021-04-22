import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Modal, List } from 'react-native-paper';
import { Colors, Metrics } from '../definitions/theme';

function OptionsModal({ navigation }: any) {

  const [loaded, setLoaded] = useState(true);

  const clearUpDataOnUnMount = useCallback(() => {
    navigation.goBack();
  }, [loaded]);

  useEffect(() => {
    const blur = navigation.addListener('didFocus', () => {
      setLoaded(val => !val);
      console.log('focussed');
    });
    return () => clearUpDataOnUnMount();
  }, [loaded, navigation]);

  return (
    <>
      <Modal
        dismissable={false}
        visible
        contentContainerStyle={styles.container}>
        <View style={{ width: '100%' }}>
        </View>
      </Modal>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.ScreenWidth,
    backgroundColor: 'transparent',
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    paddingVertical: 20,
    bottom: 0,
    position: 'absolute',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  contentView: {
    width: '100%',
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    bottom: 0,
    position: 'absolute',
    margin: 0,

    padding: 20,
  },
  closeModal: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
  modalText: {
    marginBottom: 15,
  },
});

export default React.memo(OptionsModal);
