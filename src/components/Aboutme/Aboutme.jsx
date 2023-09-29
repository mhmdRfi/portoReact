import React from 'react'
import gambar3 from '../Asset/about.png'

function Aboutme() {
  return (
    <div>
        <div className="about">
        <h2>ABOUT ME</h2>
            <div>
                <p className='paraph'>
                    <strong> ipsum dolor sit amet consectetur adipisicing elit.</strong> <br/><br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quo voluptatum quae sequi ea doloremque molestias accusantium, libero temporibus dignissimos, eius numquam, quasi perferendis eum tenetur deserunt repellat voluptates quis.
                </p>
            </div>
       

            <div className='gambar3'>
                <img src={gambar3} alt="mahmud rofii in Melbourne"/>
            </div>

            <div className="contact">
                <p>
                    <strong>EMAIL<br/></strong>
                    mahmudrofiie@gmail.com<br/>
                    <strong>ROLE<br/></strong>
                    Full-stack Web Developer<br/>
                    <strong>PHONE<br/></strong>
                    (+62) 812 5902 5966<br/>
                </p>
        </div>
        
        <div className="par2">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit voluptas voluptates necessitatibus quas ducimus repudiandae numquam sit cupiditate magnam voluptatum facere, quo et quaerat. Perspiciatis quibusdam distinctio nesciunt veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure illo consectetur omnis iusto magnam optio nihil corporis incidunt suscipit doloremque, ullam eveniet aliquid possimus quos facere tenetur quasi fugiat.
            </p>
        </div>
    </div>
    </div>
  )
}

export default Aboutme