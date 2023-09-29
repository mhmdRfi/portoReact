import React from 'react'
import profil from '../Asset/profil.png'

function Header() {
  return (
    <div className='header'>
        <div class="tulisan">
            <i class="fa fa-circle"></i>
            <h1>Hi, I'm <br/>Mahmud Rofi'i</h1>
            <h3>A Full-stack Developer</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tempore excepturi temporibus hic ipsa iusto commodi veniam nesciunt, velit facere molestias doloribus neque perferendis ab rerum architecto eos mollitia iste!
            </p>
            <a href="#">READ MORE</a>
            <br/>
        </div>
        <div className='gambar'>
          <img src={profil} alt="mahmud rofii"/>
        </div>
    </div>
  )
}

export default Header