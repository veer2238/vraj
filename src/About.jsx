import axios from 'axios'
import { useEffect, useState } from 'react'
import Data from './Json'


const About = () => {

  // const[a,setA]=useState([])


//   const fetchdata = async()=>{
//   const {data} =await axios.get('https://jsonplaceholder.typicode.com/posts')
//   setA(data)
//   }

// useEffect(() => {

//   fetchdata()

// }, [])

  return (
    <div>
      {
        Data.map((item)=>{
          return(
            <>
            <h1>{item.title}</h1>

            {
item.state.map((i)=>{
  return(
<p>{i.name}</p>
  )
})
            }

            </>
          )
        })
      }
    </div>
  )
}

export default About
