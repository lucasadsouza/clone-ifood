import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SafeAreaView = styled.SafeAreaView`
    align-items: flex-start;
    margin-top: 40px;
    margin-left: 10px;
`;

export const ProfileContainer = styled.View`
    flex-direction: row;
`;

export const ProfileImage = styled.View`
    border-radius: 150px;
    background-color: #4d4d4d;
    margin-right: 10px;
`;

export const ProfileName = styled.Text`
    margin-top: 10px;
    font-weight: bold;
    font-size: 24px;
    color: #3d3d3d;
`;

export const ProfileIcon = styled.View`
    margin-top: 40px;
    margin-left: 80px;
`

export const ProfileButton = styled.Text`
    font-size: 16px;
    color: #8d8d8d;
`;

export const OptionsContainer = styled.ScrollView`
    width: ${(Dimensions.get('window').width)}px;
    margin-top: 20px;
    background-color: #f8f8f8;
`;

export const OptionsView = styled.View`
    flex-direction: row;
    margin-top: 20px;
    margin-left: 20px;
`;

export const OptionsTitle = styled.Text`
    margin-top: 10px;
    font-size: 24px;
    color: #8d8d8d;
`;

export const OptionsIcon = styled.View`
    margin-top: 10px;
    margin-right: 10px;
`;

export const OptionsIconArrow = styled.View`
    margin-top: 20px;
    margin-right: 10px;
`;