import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en <AddCategory/>', () => {
  

    test('debe cambiar el valor de la caja de texto ', () => {
      
        render( <AddCategory onNewValue={()=>{}}/> )

        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target:{value:'Goku'}});

        expect( input.value ).toBe('Goku');
        // screen.debug();

    })
    

    test('debe de llamar  onNewValue si el input tiene un valor', () => {
      

        const inputValue = 'Goku';

        // TODO:

        const onNewValue = jest.fn();

        render( <AddCategory onNewValue={onNewValue}/> )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target:{value: inputValue }} )
        
        fireEvent.submit( form )

        expect( input.value ).toBe('');

        // validar que la funcion simulada fue llamada
        expect( onNewValue ).toHaveBeenCalled();
        // fue llamada con el valor de inputvalue
        expect( onNewValue ).toHaveBeenCalledWith( inputValue  );
    })

    test('no debe de llamar el onNewValue si el input esta vacio', () => {
      

        const onNewValue = jest.fn();
        // Sujecto
        render( <AddCategory onNewValue={onNewValue} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Actuar
        fireEvent.input( input, {target:{value: ' ' }} )
        fireEvent.submit( form )
        
        // Evaluar
        expect( input.value ).toBe(' ');
        expect( onNewValue ).toHaveBeenCalledTimes(0);
    })
    
    

})
