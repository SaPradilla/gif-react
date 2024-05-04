import { useState } from "react"


export const AddCategory = ({onNewValue})=>{

    const [inputValue,setInputValue] = useState()
    
    const onInputChange = (e)=>{
        setInputValue( e.target.value )    
    }

    const onSubmit = (e)=>{
        e.preventDefault();

        if ( inputValue.trim().length <= 1) return;
        onNewValue( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>

            <input 
                type="text"
                placeholder="Buscar Gifs"

                onChange={ onInputChange }
            />
            <button type="submit">Agregar</button>


        </form>        
    )

}