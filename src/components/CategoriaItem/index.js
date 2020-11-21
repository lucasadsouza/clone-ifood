import React from 'react';

import {
    CategoriaView,
    CategoriaFoto,
    CategoriaTexto,
} from './styles';

const CategoriaItem = ({ foto, texto, id }) => {
    return (
        <CategoriaView key={id}>
            <CategoriaFoto source={{
                uri: foto.trim(),
                width: 98,
                height: 58,
            }}
            />
            <CategoriaTexto>{texto}</CategoriaTexto>
        </CategoriaView>
    );
}

export default CategoriaItem;