import React from 'react'
import porto1 from '../Asset/porto1.png'
import porto2 from '../Asset/porto2.png'
import porto3 from '../Asset/porto3.png'

function Portofolio() {
  return (
    <div>
        <div>
            <div class="portofolio">
                <h2>PORTOFOLIO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem illo ipsum natus quo quas dolor libero porro a quaerat consectetur quam maiores distinctio sunt possimus corrupti repellat, ratione voluptatibus?</p>
            </div>
        </div>
        <div className='card-container'>
            <div className='card'>
                <img src={porto1} alt="porto mahmud"/>
                <div className='card-content'>
                    <h3>WebSite 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <a href="https://www.bannerbear.com/" className='btn'>View More</a>
                </div>
            </div>
            <div className='card'>
                <img src={porto2} alt="porto mahmud"/>
                <div className='card-content'>
                    <h3>WebSite 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <a href="https://clay.global/" className='btn'>View More</a>
                </div>
            </div>
            <div className='card'>
                <img src={porto3} alt="porto mahmud"/>
                <div className='card-content'>
                    <h3>WebSite 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <a href="https://heev.me/" className='btn'>View More</a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Portofolio