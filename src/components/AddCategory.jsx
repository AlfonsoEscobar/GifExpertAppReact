import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };
    
    const onSubmit = ( event ) => {
        event.preventDefault();

        const value = inputValue.trim().toLowerCase();

        if (value.length <= 1) return;
        onNewCategory(value);
        setInputValue('')
    };

  return (
    <form onSubmit={ onSubmit }> 
        <input 
            type="text"
            placeholder="Buscar GIFS"
            // con el atributo value guarda el valor en la variable inputValue
            value={ inputValue }
            // con este atributo se ejecuta la funcion cuando hay un cambio
            // y como estamos en un formulario es cuando se pulsa el Enter
            onChange={onInputChange}
        />
    </form>
  )
}