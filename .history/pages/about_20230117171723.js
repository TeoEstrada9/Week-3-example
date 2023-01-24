export default function About() {
    return (
        <>About Page</>
    )
}

<div className={styles.grid}>
<div>Business Degrees</div>
{information && information.map((info, index) => {
  if(info.department === "Business")
  return(
    <Card key={index} degree={info.degree} colour="red" font="10px"/>
  )

})}

<div>Computing Degrees</div>
{information && information.map((info, index) => {
  if(info.department === "Computing")
  return(
    <Card key={index} degree={info.degree} colour="blue" font="12px"/>
  )

})}



</div>
