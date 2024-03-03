import React , {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/forms.css';
// import { response } from "express";


const Test = () => {
  
  const [loading, setLoading] = useState({
    load: false,
    OnloadingScreen: ""
  });
  // const generateForm = async () => {
  //   const updatedData = {...datasets, ...options};
  //   const [data, setData] = useState({
  //     text: "",
  //     options: ["", "", ""],
  //     correctAnswer: ""
  //   })
  //   try {
  //     const response = await fetch("http://localhost:8080/api/v1/questions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     setLoading({
  //       load: true,
  //       OnloadingScreen: "Exporting form......"
  //     })

  //     const formdata = await response.json()
  //     if (response.ok) {
  //       setLoading({
  //         load: false,
  //         OnloadingScreen: "Exported!"
  //       })
  //       setData({
  //         text: updatedData.title,
  //         options: [updatedData.option1, updatedData.option2, updatedData.option3],
  //         correctAnswer: updatedData.isCorrect
  //       })
  //     }
  //     else if (formdata.errors) {
  //       alert(formdata.errors[0].msg)
  //     }
  //     else {
  //       alert(formdata.msg)
  //     }
  //   } catch (error) {
  //     console.log(error, "Error while submitting");
  //   }
    
   
  // }
 
  
  // Preparing datasets for form by several states
  let dataset = {
    id: 0,
    title: "",
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
    option3: "",
    isCorrect: "",
  })

  
 


  // Preview the Form after Submission and clear the text fields
 
  function onSubmissionHandler(event) {
    event.preventDefault();
    setDataset((p) => {
      return {...p, id: Math.floor(Math.random() * 100)}
    });
    const finaldata = {...datasets,  ...finalOptions };
    setFormData((prev) => {
      const updatedData = [...prev, finaldata];
      return updatedData;
    });
    setDataset(dataset);
    setOptions(
      {
        option1: "",
        option2: "",
        option3: "",
        isCorrect: ""
      }
    )
  }
// Set the title of the question

  function onChangeHandler(event) {
    setDataset((prevState) => {
      return { ...prevState, title: event.target.value};
    });
  }



// Setting options here

  function optiononeNameHandler(e) {
    setOptions({
      ...options,
      option1: e.target.value
    });
  }
  function optiontwoNameHandler(e) {
    setOptions({
      ...options,
      option2: e.target.value
    });
  }
 
  function optionthreeNameHandler(e) {
    setOptions({
      ...options,
      option3: e.target.value
    });
  }
  function correctOptionHandler(e) {
    setOptions((prev) => {
      if (e.target.value == options.option1) {
        return { ...prev, isCorrect: options.option1 };
      }
      else if (e.target.value == options.option2) {
        return { ...prev, isCorrect: options.option2 };
      }
      else {
        return { ...prev, isCorrect: options.option3 };
      }

    });

  }

//  Final Options are saved heres and hence are immutable

  function setOptionsHandler() {
    setDataset((prev) => {
      return { ...prev, isRadioButtons: true};
    });
    setFinalOptions({
      option1: options.option1,
      option2: options.option2,
      option3: options.option3,
      isCorrect: options.isCorrect
    });
  }


// The components start here

  return (
    <div className="container">
      <h1>Create Test</h1>
      <form onSubmit={onSubmissionHandler}>
        <input
          type="text"
          name="title"
          placeholder="Your Question"
          onChange={onChangeHandler}
          value={datasets.title}
        />
        <h3>Choose Options</h3>
        <div className="container-radio">
          <input type="text" name="option1" placeholder="option1" onChange={optiononeNameHandler} value={options.option1}/>
          <input type="text" name="option2" placeholder="option2" onChange={optiontwoNameHandler} value={options.option2} />
          <input type="text" name="option3" placeholder="option3" onChange={optionthreeNameHandler} value={options.option3} />
          <input type="text" placeholder="Please confirm correct option" onChange={correctOptionHandler}/>
          <button type="button" onClick={setOptionsHandler}>Set Options</button>
         </div>
        <button type="submit" onSubmit={onSubmissionHandler}>Add</button>
      </form>
      <h1>Preview Form</h1>
      {formdata
      .sort((a, b) => a.id - b.id)
      .map((data) => {
        return (
          <ul>
          <li key={data.id}>
            <label>{data.title}</label>
            <br />
           
            {data.isRadioButtons &&  <>
              <input type="radio" name={data.isCorrect} value="option1" />
              <label htmlFor="option">{data.option1}</label>
              <br />
              <input type="radio" name={data.isCorrect} value="option2" />
              <label htmlFor="option">{data.option2}</label>
              <br />
              <input type="radio" name={data.isCorrect} value="option3" />
              <label htmlFor="option">{data.option3}</label>
              <br />
              
            </>}
          
          </li>
        </ul>
        )
      })}
      {/* Generate the quiz by translocating to another component when button is clicked */}
      
     
      <button type="button">Generate Form</button>
      <div>{loading.OnloadingScreen}</div>

      
     
    

    </div>
  );
};

export default Test;

