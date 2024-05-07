import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"


describe('Pruebas en el custom hook useFetchGifs', () => {
  

    test('debe de regresar el estado inicial', () => {
      

        const { result } = renderHook( ()=> useFetchGifs( 'Goku' ) )

        const {images,isLoading} = result.current;
        
        expect ( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        
        console.log(result)


    })
    

    test('debe de retonar un arreglo de imagenes i isLoading en false', async() => {
        const { result } = renderHook( ()=> useFetchGifs( 'Goku' ) )
        

        // espera que la condicion se cumpla
        await waitFor(

            ()=> expect( result.current.images.length ).toBeGreaterThan(0),
            

        );

        const {images,isLoading} = result.current;

        expect ( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    })
    



})
