import { useState } from "react";
import { AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories,setCategories] = useState(['Saitama','Goku']);


    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory) ) return;

        setCategories( [newCategory,...categories] )

    }
  
    return (
        <>
            {/* Titulo */}
            <h1>GifExpert App</h1>

            {/* Input */}
            <AddCategory 
                onNewValue={onAddCategory}
            />
            
            {/* Listado de Gif */}

            { categories.map(category =>(
                
                    <GifGrid key={category} category={ category }/>                    
                )
            )}

        </>
    );
};
