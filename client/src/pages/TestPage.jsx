import React , {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/forms.css';

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
  const [formdata, setFormData] = useState([{}]);
  const [datasets, setDataset] = useState(dataset);
  const [options, setOptions] = useState({
    option1: "",
    option2: "",
    option3: ""
  })
  const navigateTo = useNavigate();
  const generateButton = function () {
    
  }
  const onSubmissionHandler = function (event) {
    event.preventDefault();
    setDataset((prev) => {
      return {...prev, id: Math.round(Math.random() * 100)}
    })
    
    const finaldata = {...datasets, ...finalOptions}
    setFormData((prev) => {
      return [...prev, finaldata];
    });
    setDataset(dataset);
    setOptions({
      option1: "",
      option2: "",
      option3: ""
    });
  
    
    
  };

  const onChangeHandler = (event) => {
    setDataset((prevState) => {
      return {...prevState, title : event.target.value,};
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
  const textboxAdder = (e) => {
      setDataset((prev) => {
        return {...prev, isTextBox: true, isRadioButtons: false};
    })
 }
  const setOptionsHandler = () => {
    setFinalOptions({
      option1: options.option1,
      option2: options.option2,
      option3: options.option3
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
    <div className="container">
      <form key={formdata.map((d) => d.id)}onSubmit={onSubmissionHandler}>
        <label htmlFor="title">Add Question</label>
        
        <input
          type="text"
          name="title"
          placeholder="Your Question"
          onChange={onChangeHandler}
        />
       
        <label htmlFor="radio">Add Radio</label>
        <input type="radio" name="options" value="radio" onChange={radioButtonHandler}/>
        
        
        {datasets.isRadioButtons && <div className="container-radio">
          <input type="text" name="option1" placeholder="option1" onChange={optiononeNameHandler}/>
         
          <input type="text" name="option2" placeholder="option2" onChange={optiontwoNameHandler} />
          
          <input type="text" name="option3" placeholder="option3" onChange={optionthreeNameHandler}/>
          <button type="button" onClick={setOptionsHandler}>Set Options</button>
         
         </div>}
        

        
        <label htmlFor="textbox" >Add Textbox</label>
        <input type="radio" name="options" value="textbox" onChange={textboxAdder}/>
        
       
        <label htmlFor="image">Add an Image: </label>
       
        {/* Take image as an input */}
        <input type="file" name="image" accept="image/*" onChange={imageAdder} />
        
        <button type="submit" onSubmit={onSubmissionHandler}>Add</button>
      </form>
      <h1>Preview Form</h1>
      {formdata.slice(0)
      .sort((a, b) => a.id - b.id)
      .map((data) => {
        return (
          <ul key={data.id}>
          <li key={data.id}>
            <label>{data.title}</label>
            <br />
            {data.imageAdded && 
            <div style={{
              padding: "2px",
              marginTop: "5%"
            }}>
              <img src={data.imageUrl} alt="Selected Image Template"  width="480" height="270" /> 
            </div>}
            {data.isRadioButtons &&  <>
              <input type="radio" name="option" value="option1" />
              <label htmlFor="option">{data.option1}</label>
              <br />
              <input type="radio" name="option" value="option2" />
              <label htmlFor="option">{data.option2}</label>
              <br />
              <input type="radio" name="option" value="option3" />
              <label htmlFor="option">{data.option3}</label>
              <br />
            </>}
            {data.isTextBox && <div className="container">
              <textarea></textarea>
            </div>}
            
          </li>
        </ul>
        )
      })}
    <button type="button" onClick={generateButton}>Generate</button>
    </div>
  );
};

export default Test;
