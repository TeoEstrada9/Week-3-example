import data from '../Data/employees.json'
import { useState } from 'react';
import Card from '../Components/Employees/employees'
import styles from '@/styles/About.module.css'

export default function About() {
    console.log(data);
  const [information, setInformation] = useState([...data])

    return (
        <>
        <div>
          <h3 className={styles.about}>About</h3>
        </div>

        <div className={styles.meet__team}>Meet the team</div>

        <div>
         
        </div>
          
          
          
          {information && information.map((info, index) => {
            if(info.employeeName === "Mark")
            
            return(
              <Card key={index} name={info.employeeName} colour="blue" font="12px"/>
              
            )
          
          })}

          {information && information.map((info, index) => {
            if(info.employeeName === "James")
            
            
            return(
              <Card key={index} name={info.wage} colour="blue" font='12px'/>
            )

          })}

          {information && information.map((info, index) => {
            if(info.employeeName === "Maya")
              return (
                <Card key={index} name={info.jobTitle} colour="blue" font='12px'/>
              )
          })}
        </>
    )

    
}









