import { useState } from "react"
import PropTypes from "prop-types";


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
        <form onSubmit={ onSubmit } aria-label="form">

            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
            <button type="submit">Agregar</button>


        </form>        
    )

}

AddCategory.propTypes = {

    onNewValue : PropTypes.func.isRequired,

}