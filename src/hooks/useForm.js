// write your custom hook here to control your checkout form


import { useState } from 'react';

const useLocalStorage = (initialValue) => {
    const [values, setValues] = useState(() => {
        return (initialValue)
    });
    return [values, setValues]
}
const useForm = (initialValue) => {
    const [values, setValues] = useLocalStorage(initialValue);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const clearForm = e => {
        e.preventDefault();
        setValues(initialValue);
    };
    return ([values, handleChanges, clearForm]);
}

export default useForm