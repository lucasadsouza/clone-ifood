import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import {
  SafeAreaView,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  ProfileIcon,
  ProfileButton,
  OptionsContainer,
  OptionsView,
  OptionsTitle,
  OptionsIcon,
  OptionsIconArrow,
} from './styles';

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <ProfileContainer>
          <ProfileImage><AntDesign name="user" color="#f4f4f4" size={80} /></ProfileImage>

          <View>
            <ProfileName>Lucas Souza</ProfileName>

            <ProfileButton>Editar perfil</ProfileButton>
          </View>

          <ProfileIcon><AntDesign name="right" color="#9d9d9d" size={18} /></ProfileIcon>
        </ProfileContainer>
      </SafeAreaView>

      <OptionsContainer showsVerticalScrollIndicator={false}>
          <OptionsView>
            <OptionsIcon><AntDesign name="question" color="#9d9d9d" size={36} /></OptionsIcon>

            <OptionsTitle>Ajuda</OptionsTitle>

            <OptionsIconArrow style={{ marginLeft: 188 }}><AntDesign name="right" color="#9d9d9d" size={18} /></OptionsIconArrow>
          </OptionsView>

          <OptionsView>
          <OptionsIcon><AntDesign name="setting" color="#9d9d9d" size={36} /></OptionsIcon>

            <OptionsTitle>Configurações</OptionsTitle>

            <OptionsIconArrow style={{ marginLeft: 92 }}><AntDesign name="right" color="#9d9d9d" size={18} /></OptionsIconArrow>
          </OptionsView>
        </OptionsContainer>
    </>
  );
}

