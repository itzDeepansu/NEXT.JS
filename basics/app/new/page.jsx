"use client"
import React , { useState } from 'react'
import Link from 'next/link'

const newd = () => {
    const [count, setcount] = useState(0)
  return (
    <div>
      nothing new - {count}
      <br />
      <button onClick={()=>{setcount(count+1)}}>Increase</button>   
      <br />


      {/* routing using link component */}
      <Link href="./routess">route</Link>
    </div>
  )
}

export default newd
