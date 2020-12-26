import { useState } from 'react';

const useInput = (initialState = '') => {
    const [value, setValue] = useState(initialState);

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    const reset = () => {
        setValue(initialState)
    }
    
    return [value, bind, reset]
}

export default useInput