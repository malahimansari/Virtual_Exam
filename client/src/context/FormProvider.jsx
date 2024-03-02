import FormContext from "./Formcontext";
import React, { useContext, useState } from "react";

const FormProvider = ({children}) => {
   
    // const getData = (data) => {
    //     setData(() => {
    //         return data;
    //     })
    //     setFinal(data);
    // }
    


    return (
        <FormContext.Provider> 
            {children}
        </FormContext.Provider>
    )
}

const useFormContext = () => {
    return useContext(FormContext);
}

export {FormProvider, useFormContext};