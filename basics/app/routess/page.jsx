import React from 'react'
import Link from 'next/link'
import Script from 'next/script'

const routess = () => {
  return (
    <div>
      <Script>
        alert("hi")
      </Script>
      i am a route
      <br />


      {/* //routing using link component */}
      <Link href="./new">back</Link>
    </div>
  )
}

export default routess
