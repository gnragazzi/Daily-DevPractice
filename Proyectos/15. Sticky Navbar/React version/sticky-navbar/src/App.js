import React, { useEffect, useState } from 'react'
import Header from './Header'
import './index.css'
import Content from './Content'

function App() {
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navPos = document.querySelector('.navbar').offsetTop
      if (window.pageYOffset > navPos) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    })
  }, [])
  return (
    <>
      <Header isSticky={isSticky} />
      <Content isSticky={isSticky} />
    </>
  )
}

export default App
