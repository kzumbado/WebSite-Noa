import { useState } from "react";


export const useForm = (inicialForm={}) => {
    
    

    const [formState, setFormState] = useState(inicialForm);

    

    const onChangeForm=({target})=>{
        const {name,value}=target;

        setFormState({
            ...formState,
            [name]:value
        });

    }

    const onResetForm=()=>{
        
    
       setFormState(inicialForm);

    }




    return{
        ...formState,// va a desestructurar las propiedades que estan en el objeto
        formState,
         onChangeForm,
         onResetForm
    }


}
