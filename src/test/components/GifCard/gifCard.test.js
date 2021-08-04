import React from 'react';
import '@testing-library/dom';
import { shallow } from 'enzyme';
import GifCard from '../../../components/gifCard/index'

describe('Pruebas en el componente GifCard', () => {

    const title = 'title'
    const url = 'https://urlGif.com'
    const wrapper = shallow( <GifCard title={ title } url={ url } /> )

    test('Debe mostrar el componente GifCard', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe tener un h4 con el title', () => {
        const h4 = wrapper.find('h4');
        expect( h4.text().trim() ).toBe( title );
    })

    test('la imagen debe tener el atributo src igual a la url y alt igual al titulo', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener la clase animate__fadeInDown', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')
        expect(className.includes('animate__fadeInDown')).toBe( true )
    });
})