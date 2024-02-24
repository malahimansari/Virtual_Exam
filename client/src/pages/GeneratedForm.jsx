import React from 'react'
import {useAuth} from "../store/auth";
import { useNavigate } from 'react-router-dom';
const GeneratedForm = ({exporteddata}) => {
  const {user, isLoggedIN} = useAuth();
  const navigator = useNavigate();
  if (user && isLoggedIN) {
  return (
    <>
      {exporteddata.slice(0)
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
    </>
  )
  }
  else {
    navigator('/');
  }
}

export default GeneratedForm;