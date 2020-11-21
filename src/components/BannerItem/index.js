import React from 'react';

import { Dimensions } from 'react-native';

import { BannerView, BannerFoto } from './styles';

const BannerItem = ({ foto, id }) => {
    return (
        <BannerView key={id}>
            <BannerFoto source={{
                uri: foto.trim(),
                width: (Dimensions.get('window').width) - 30,
                height: 150,
                resizeMode: 'contain',
            }} />
        </BannerView>
    );
}

export default BannerItem;