import { shallow } from 'enzyme';
import React from 'react'
import GifExpertApp from '../../GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
   
    test('Debe mostrar <GifExpertApp />', () => {
        const wrapper = shallow( <GifExpertApp />)
        expect( wrapper ).toMatchSnapshot()
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories =['spiderman', 'hello']
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />)
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    });
})