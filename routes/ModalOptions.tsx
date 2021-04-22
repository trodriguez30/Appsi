import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FabIcon from '../components/FabIcon';

function ModalOptions() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('OptionsModal')}
      style={{
        padding: 35,
        marginTop: -5,
        alignItems: 'center',
      }}
    >
      <FabIcon />
    </TouchableOpacity>
  );
}

export default ModalOptions;
