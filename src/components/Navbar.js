import React from 'react'

const Navbar = () => {
  return (
    <nav className = "navbar" fixed="top">
        <div className = "navbar_text">
            <div className = "logo">
                <img src = "/image/logo.png" alt = "logo"></img>
                <ul className = "list">
                    <li1 href = "">HOME</li1>
                    <li href = "">MENU</li>
                    <li href = "">SHOP</li>
                    <li href = "">NEWS</li>
                    <li href = "">CONTECT</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar