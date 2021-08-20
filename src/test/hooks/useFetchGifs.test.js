import { useFetchGif } from '../../hooks/useFetchGifs';
import '@testing-library/react-hooks';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGif', () => {
    test('Debe retornar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGif( 'spiderman' ) )
        
        const { data, loading } = result.current

        console.log(data, loading);

        expect( data ).toEqual([])
        expect( loading ).toBe( true )
    });
})


