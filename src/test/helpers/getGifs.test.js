import { getGifs } from '../../helpers/getGifs';


describe('Pruebas con getGifs fetch', () => {
    test('Debe traer 20 elementos ', async() => {
       const gifs = await getGifs('Hola');

       expect( gifs.length ).toBe( 20 )
    });

    test('Debe traer 0 elementos ', async() => {
        const gifs = await getGifs('');
 
        expect( gifs.length ).toBe( 0 )
     });
})