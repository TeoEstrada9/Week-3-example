import data from '../Data/employees.json'
import { useState } from 'react';
import Card from '../Components/Employees'

export default function About() {
    console.log(data);
  const [information, setInformation] = useState([...data])

    return (
        <>About Page
          {information && information.map((info, index) => {
            if(info.employeeName === "Mark")
            if(info.employeeName ==)
            return(
              <Card key={index} name={info.employeeName} colour="purple" font="12px"/>
            )
          
          })}
          {information && information.map((info, index) => {
            
            return(
              <Card key={index} name={info.wage} colour="purple" font='12px'/>
            )

          })}

          {information && information.map((info, index) => {
              return (
                <Card key={index} name={info.jobTitle} colour="purple" font='12px'/>
              )
          })}
        </>
    )

    
}









