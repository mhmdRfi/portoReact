import React, {useState} from 'react'

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
    return (
    <section className='navbar-section'>
    <div>
        
        {/* <nav className='mobile-nav'>
            <ul>
                <li><a href='#profile'>Profile</a></li>
                <li><a href='#aboutme'>About Me</a></li>
                <li><a href='#aboutme'>Portofolio</a></li>
                <li><a href='#aboutme'>Skills</a></li>
            </ul>
        </nav> */}

        <nav className={`desktop-nav ${isActive ? 'active' : ''}`}>
            <div className='navbar'>
              <label>mhmdRfi</label>
                <ul className='nav-list'>
                    <li><a href='/Profile'>Profile</a></li>
                    <li><a href='/Aboutme'>About Me</a></li>
                    <li><a href='/Portofolio'>Portofolio</a></li>
                    <li><a href='/Skill'>Skills</a></li>
                </ul>
                <div className='hamburger-icon' onClick={toggleMenu}>
                  <i className={`fa ${isActive ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    </div>
    </section>
  )
}

export default Navbar