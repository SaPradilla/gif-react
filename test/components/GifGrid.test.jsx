import { render, screen }  from "@testing-library/react";
import { GifGrid }  from "../../src/components/GifGrid";
import useFetchGifs from '../../src/hooks/useFetchGifs';
// hacer un mock completo de esta ruta
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de <GifGrid/>', () => {
  
    const category = 'Goku';

    test('debe de mostrar el loading inicialmente', () => {
      

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true,
        })

        render( <GifGrid category={category} />)

        screen.debug();

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));

    })
    

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        

        const gifs = [
            {
                id:'ABC',
                title:'Goku',
                url:'https://imagen.com',
            },
            {
                id:'ABD',
                title:'Saitama',
                url:'https://imagenreal.com',
            },
        ]
    
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false,
        })

        render( <GifGrid category={category} />)

        screen.debug();

        expect( screen.getAllByRole('img').length).toBe(gifs.length);

    })
    
})
