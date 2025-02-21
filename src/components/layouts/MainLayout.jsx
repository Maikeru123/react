import React from 'react'
import Nav from '@/components/Nav'
import { Outlet } from 'react-router-dom'

const mainlayout = () => {
  return (
    <div>    
      <Nav />
      <Outlet />
    </div>

  )
}

export default mainlayout