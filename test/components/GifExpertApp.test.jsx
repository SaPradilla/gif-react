const { render, screen, waitFor } = require("@testing-library/react")
const { GifExpertApp } = require("../../src/GifExpertApp")

describe('Pruebas en <GifExpertApp/>', () => {
  

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <GifExpertApp/> );
        expect( container ).toMatchSnapshot();

        screen.debug();
    })

    test('debe de mostrar el titulo ', () => {
        render( <GifExpertApp/> )
        expect(  screen.getByRole('heading',{level:1}) ).toBeTruthy()

    })
    
    test('debe de exitir al menos dos categoria listadas', async() => {

        render( <GifExpertApp/> )
        await waitFor(
            ()=> expect( screen.getAllByTestId('card-container').length).toBe(2)
        );

    })

})
