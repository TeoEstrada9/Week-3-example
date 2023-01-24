import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../Data/education.json'
import { useState } from 'react'
import Card from '../Components/Card'
import Link from 'next/link'

export default function About() {
    console.log(data);
  const [information, setInformation] = useState([...data])

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


