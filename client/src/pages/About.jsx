import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/common/Navbar/main';


const Box = styled.div `
  padding: 2% 2%;
  background-color: darkcyan;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: left;
`
function About() {
  return (
    <>
    <Navbar />
      <Box>
        <h1>Who are we?</h1>
          <div className='container'>
            <p>Actually we provide a best solution to teachers and students to take their examination or any kind of assessment online without having a physical classroom seperate for the students</p>
          </div>
      </Box>
      
    </>
  )
}

export default About