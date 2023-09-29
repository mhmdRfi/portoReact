import React from 'react'
import html from "../Asset/html-5.png"
import css from "../Asset/css-3.png"
import javascript from "../Asset/js.png"
import react from "../Asset/logo192.png"

function Skill() {
  return (
    <div className='skill'>
        <h2>SKILL</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis porro beatae sunt quis laboriosam error modi culpa at molestiae similique, est dolores maxime eos quod itaque saepe laborum et!
        </p>
        <div class="skills">
            <div class="html">
                <img src={html} alt="logo html"/>
                <h3>HTML</h3>
            </div>
            <div class="css">
                <img src={css} alt="logo css"/>
                <h3>CSS</h3>
            </div>
            <div class="javascript">
            <img src={javascript} alt="logo javascript"/>
                <h3>JAVASCRIPT</h3>
            </div>
            <div class="react">
            <img src={react} alt="logo react"/>
                <h3>REACT</h3>
            </div>
        </div>
    </div>
  )
}

export default Skill