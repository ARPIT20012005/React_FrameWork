import React, { useEffect } from 'react'
import { useState} from 'react'




const BasicEffect = () => {

    useEffect(() => {
        console.log('BasicEffect Component mounted')
    }, [])



  return <div>
    <h1>Chech the Console to</h1>
  </div>
  
}

export default BasicEffect