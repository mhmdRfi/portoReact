import React from 'react'
import profil2 from '../Asset/profil-2.png'

function Profile() {
  return (
    <div className='profile'>
        <div class="judul">
            <h2>PROFILE</h2>
            <h4>I'm a creative full-stack developer</h4>
        </div>
        
        <div class="container">
            <div class="aboutme">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem illo ipsum natus quo quas dolor libero porro a quaerat consectetur quam maiores distinctio sunt possimus corrupti repellat, ratione voluptatibus?</p>
            </div>
            <div class="gambar2">
                <img src={profil2} alt="mahmud rofii profil"/>
                
            </div>
            <div  class="detail">
                <h3>Details</h3>
                <p>
                <strong>Name:</strong><br/>
                Mahmud Rofi'i<br/>
                <strong>Nationality:</strong><br/>
                Indonesia<br/>
                <strong>Location:</strong><br/>
                Yogyakarta, Indonesia
                </p>
                <div class="icon">
                    <a href="https://www.instagram.com/mahmudrofiie/" class="fa fa-instagram"></a>
                    <a href="https://github.com/mhmdRfi" class="fa fa-github"></a>
                    <a href="https://www.linkedin.com/in/mahmud-rofii/" class="fa fa-linkedin"></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile