import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import {
  SafeAreaView,
  Image,
  View,
  ButtonContainer,
} from './styles';

import Button from '../../components/Button';

import Banner from '../../assets/img/banner.png';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tão fácil</Text>
          <Image source={Banner} />
          <Text>Permitir localização</Text>
          <Text>Para descobrir restaurantes que entregam em sua região</Text>
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={() => navigation.navigate('Main')} />
          <Button text="ENTRAR" theme="primary" />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}

