import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../Data/emplo.json'
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





