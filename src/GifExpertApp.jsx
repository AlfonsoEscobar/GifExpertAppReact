import { useState } from "react"
import { AddCategory, GridGift } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = (value) => {
        if(categories.includes(value)) return;
        setCategories([value, ...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        {/* onNewCategory es un atributo que pedimos en 
            AddCategory.jsx que a su vez se le inyecta el valor desde
            AddCategory.jsx y ejecuta la funcion onAddCategory
        */}
        <AddCategory onNewCategory={ (value) => onAddCategory(value)} />

        {
            categories.map( (category) => ( 
                <GridGift key={category} category={category}/>
            ))
        }

    </>
  )
}
