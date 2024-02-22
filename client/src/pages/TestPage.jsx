import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  let dataset = {
    id: 0,
    title: "",
    imageUrl: null,
    imageAdded: false,
    isTextBox: false,
    isRadioButtons: false
  }; 
  const [finalOptions, setFinalOptions] = useState({
    option1: "",
    option2: "",
    option3: "",
  })
  const [formdata, setFormData] = useState([]);
  const [datasets, setDataset] = useState(dataset);
  const [options, setOptions] = useState({
    option1: "",
    option2: "",
    option3: ""
  })
  const navigateTo = useNavigate();

  const onSubmissionHandler = function (event) {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    setDataset((prevState) => {
      return {...prevState, title: [event.target.name] = event.target.value}
    })
  };

 
  const radioButtonHandler = (e) => {
    if (e.target.checked) {
    setDataset((prev) => {
      return {...prev, isRadioButtons: true, isTextBox: false};
    })
  }
  }
  const optiononeNameHandler = (e) => {
    setOptions({
      ...options,
      option1: [e.target.name] = e.target.value
      
    })
  }
  const optiontwoNameHandler = (e) => {
    setOptions({
      ...options,
      option2: [e.target.name] = e.target.value
      
    })
  }
 
  const optionthreeNameHandler = (e) => {
    setOptions({
      ...options,
      option3: [e.target.name] = e.target.value
      
    })
  }
  const setOptionsHandler = () => {
    setFinalOptions({
      option1: options.option1,
      option2: options.option2,
      option3: options.option3
    })
    console.log(finalOptions);
  }
  const textboxAdder = (e) => {
      setDataset((prev) => {
        return {...prev, isTextBox: true, isRadioButtons: false};
    })
 }
  const imageAdder = (e) => {
  setDataset((prev) => {
      return {...prev, imageAdded: true, }
  })
  const file = e.target.files[0];
  setDataset((prev) => {
    if (file) {
      return {...prev, imageUrl: URL.createObjectURL(file)};
    }
    else {
      return {...prev, imageUrl: null};
    }
    
  })
  

  }


  return (
    <>
      <form onSubmit={onSubmissionHandler}>
        <label htmlFor="title">Add Question</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Your Question"
          onChange={onChangeHandler}
        />
        <br />
        <label htmlFor="radio">Add Radio</label>
        <input type="radio" name="options" value="radio" onChange={radioButtonHandler}/>
        {datasets.isRadioButtons && <div>
          <input type="text" name="option1" placeholder="option1" onChange={optiononeNameHandler}/>
          <br />
          <input type="text" name="option2" placeholder="option2" onChange={optiontwoNameHandler} />
          <br />
          <input type="text" name="option3" placeholder="option3" onChange={optionthreeNameHandler}/>
          <br />
          <button onClick={setOptionsHandler}>Set Options</button>
         </div>}
         <br />
        <label htmlFor="textbox" onChange={textboxAdder}>Add Textbox</label>
        <input type="radio" name="options" value="textbox" onChange={textboxAdder}/>
        <br />
        <label htmlFor="image">Add an Image: </label>
        <br />
        {/* Take image as an input */}
        <input type="file" name="image" accept="image/*" onChange={imageAdder} />
        <br />
        <button type="submit">Add</button>
      </form>
      <h1>Preview Form</h1>
      <ul>
        <li key={datasets.id}>
          <label>{datasets.title}</label>
          <input type="text" placeholder="Your Answer"/>
          <br />
          {datasets.imageAdded && 
          <div style={{
            padding: "2px",
            marginTop: "5%"
          }}>
            <img src={datasets.imageUrl} alt="Selected Image Template"  width="450" height="250" /> 
          </div>}
          {datasets.isRadioButtons && <>
            <label htmlFor="option">{finalOptions.option1}</label>
            <input type="radio" name="option1" value="option" />
            <br />
            <label htmlFor="option">{finalOptions.option2}</label>
            <input type="radio" name="option2" value="option" />
            <br />
            <label htmlFor="option">{finalOptions.option3}</label>
            <input type="radio" name="option3" value="option" />
            <br />
          </>}
        </li>
      </ul>   
    </>
  );
};

export default Test;
