import { useFetchGif } from '../../hooks/useFetchGifs';
import '@testing-library/react-hooks';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGif', () => {

    test('Debe retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGif( 'spiderman' ) )
        const { data, loading } = result.current

        await waitForNextUpdate();

        expect( data ).toEqual([])
        expect( loading ).toBe( true )
    });

    test('Debe retornar un arreglo de imagenes y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGif( 'spiderman' ) )
        
        await waitForNextUpdate();

        const { data, loading } = result.current

        expect( data.length ).toBe(20)
        expect( loading ).toBe( false )
    });
})


