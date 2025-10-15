import React from 'react'
import { useLocation } from 'react-router-dom'


const Header = () => {
  const location = useLocation()

  const list =['/about','/service']

  if(list.includes(location.pathname)){
    return null
  }


  return (
    <div>
      header
    </div>
  )
}

export default Header
