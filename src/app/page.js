"use client"
import Image from 'next/image'
import videos from 'public/videos.json'
import Head from 'next/head'
import { useState } from 'react'
/*
 ___ ___ ___
|   |   |   |
|   |   |   |
|___|___|___|
TEXT HERE
*/

export default function Home() {
  const [num, setNum] = useState(0)
  return (
    <>
    <Head>
      <title>🧀cheeese</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet"></link>
    </Head>
    <div className='w-10/12 mx-auto mt-24'>
    <div className='text-6xl bg-gradient-to-t from-black/70 to-black font-bold text-transparent bg-clip-text'>LOREM IPSUM</div>
    <div className='flex overflow-x-scroll'>
    {videos.map((video, id)=>{
      return <video className={`h-96 w-auto rounded-md m-1 ${num == id ? '' : 'blur-md'}`} src={"v1/" + video.id} controls={num == id} autoplay={num == id}></video>
    })}
    </div>
    <p>Lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  </p>
  </div>
  </>
  )
}
