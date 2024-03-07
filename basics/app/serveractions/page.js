import React from 'react'
import {handleform} from '@/actions/form'
const serveractions = () => {
  return (
    <div>
      <form action={handleform}>
        <input type="text" name="name" id="hi" className='bg-red-400'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default serveractions
