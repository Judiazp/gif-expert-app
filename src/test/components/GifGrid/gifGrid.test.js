import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../../components/gifGrid/'
import { useFetchGif } from '../../../hooks/useFetchGifs';
jest.mock('../../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

    const category = 'Una categoria'
    
    test('Debe mostrar el componente <GifGrid />', () => {
        
        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category={ category } />)
        expect( wrapper ).toMatchSnapshot()
    }); 

    test('debe mostrar items cuando se cargan imagenes con useFetch', () => {

        const imgs = [{
            id: 'ABC',
            url: 'https://directionImages/cualquiera/algo.jpg',
            title: 'Un title'
        }]

        useFetchGif.mockReturnValue({
            data: imgs,
            loading: false
        })

        const wrapper = shallow( <GifGrid category={ category } />)

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('p').exists() ).toBe(false)
        expect( wrapper.find('GifCard').length ).toBe( imgs.length )
    });
})