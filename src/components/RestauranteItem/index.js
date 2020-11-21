import React from 'react';
import { Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import {
    RestaurantesView,
    RestauranteFoto,
    RestauranteInfo,
} from './styles';

const RestauranteItem = ({ foto, nome, id, nota, categoria, distancia, valorFrete, tempoEntrega }) => {
    return (
        <RestaurantesView key={id}>
            <RestauranteFoto
                source={{
                    uri: foto.trim(),
                    width: 50,
                    height: 50,
                    resizeMore: 'cover',
                }}
            />

            <RestauranteInfo>
                <Text>{nome}</Text>
                <Text><AntDesign name="star" size={12} color="#f9ab25" />{nota} - {categoria} - {distancia}</Text>
                <Text>{tempoEntrega} • R${valorFrete}</Text>
            </RestauranteInfo>
        </RestaurantesView>
    )
}

export default RestauranteItem;