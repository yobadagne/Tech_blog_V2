 import React from 'react'
import "./Landing2.css";
import image from '../assets/download (3).jpeg';
const Landing = () => {
  return (
    <div className="container">
    <div className="image">
      <img src = {image} alt = "Blog" />
    </div>
    <div className="text">
      <h1>Hello, World!</h1>
      <h1>What is on your mind ?</h1>
      <p>share everything you have here!</p>
    </div>
  </div>
  )
}

export default Landing