import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas de GitItems', () => {
  
  const title = 'Saitama';
  const url = 'http://imagen.com/image.jpg'

  test('debe de hacer match con el snapshot', () => {
    
    const { container } = render( <GifItem title={title} url={url} />)    
    
    expect( container ).toMatchSnapshot();


  })
  
  test('debe de mostrar la imagen con el url y el alt indicado ', () => {
    
    render( <GifItem title={title} url={url} /> );
    // imprimir el componente
    // screen.debug();
    const {src,alt} = screen.getByRole('img')
    
    expect ( src ).toBe( url );
    expect ( alt ).toBe( title );

  })
  
  test('debe de mostrar el titulo en el componente', () => {
    
    render( <GifItem title={title} url={url}/> );

    expect( screen.getByText( title ) ).toBeTruthy();

  })
  


})
