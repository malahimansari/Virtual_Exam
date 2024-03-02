import React, {useState} from 'react'
import FormContext from '../context/FormContext';

const GeneratedForm = ({children}, data) => {
  

  return (
    <FormContext.Provider value={{exportData, exportedData}}>
       {children}
    </FormContext.Provider>
  )
}
  
  


export default GeneratedForm;