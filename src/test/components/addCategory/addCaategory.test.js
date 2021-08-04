import React from "react";
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import AddCategory from "../../../components/addCategory";

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    })

    test('debe mostrar el componente AddCategory', () => {
        expect( wrapper ).toMatchSnapshot()
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Un string'
        input.simulate('change', { target: { value }});
    });

    test('No debe postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){}})
        expect( setCategories ).not.toHaveBeenCalled()
    });

    test('debe llamar setCategories y limpiar la caja de texto ', () => {
       
        const value = 'Un string'
        wrapper.find('input').simulate('change', { target: { value }})
        wrapper.find('form').simulate('submit', { preventDefault(){}})

        expect( setCategories ).toHaveBeenCalled()
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function))
        expect( wrapper.find('input').prop('value')).toBe('')

    });
})