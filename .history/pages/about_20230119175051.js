import data from '../Data/employees.json'
import { useState } from 'react';
import Card from '../Components/Card'


export default function About() {
    console.log(data);
  const [information, setInformation] = useState([...data])

    return (
        <>About Page
          {information && information.map((info, index) => {
            if(info.employeeName === "Mark")
            return(
              <Card key={index} name={info.employeeName} colour="purple" font="12px"/>
            )
          
          })}
        </>
    )

    
}









