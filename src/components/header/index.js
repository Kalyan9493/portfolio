import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <h1>Portfolio</h1>
      <nav>
        <ul>
          <li><a href="/"><b>Home</b></a></li>
          <li><a href="/skills"><b>Skills</b></a></li>
          <li><a href="/experience"><b>Experience</b></a></li>
          <li><a href="/contact"><b>Contact</b></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
