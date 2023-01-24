import data from '../Data/employees.json'

export default function About() {
    console.log(data);
  const [information, setInformation] = useState([...data])

    return (
        <>About Page
          {information && information.map((info, index) => {
            if(info.employeeName === "Mark")
            return(
              <Card key={index} degree={info.employeeName} colour="purple" font="12px"/>
            )
          
          })}
        </>
    )

    
}









