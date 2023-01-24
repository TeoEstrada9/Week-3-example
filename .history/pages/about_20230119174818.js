import data from '../Data/employees.json'

export default function About() {
    console.log(data);
  const [information, setInformation] = useState([...data])

    return (
        <>About Page
          {
            
          }
        </>
    )

    
}









