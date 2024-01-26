import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className='aboutParent'>
        <div className='aboutSections'>
          <div className='aboutSecOne'>
            <div className='aboutImg about'><img src ='...' alt=''/>Image Paste here...</div>
            <div>
              <h4 className='about'>Mudasir Hussain</h4>
              <h6 className='aboutDesignationText'>Software Engineer</h6>
              <p className='about'>Rating: <span>1/10</span></p>
            </div>
            <div><p className='about'>Edit Profile</p></div>
          </div>
          <div className='aboutSecTwo'>
            <ul className='nav nav-tabs tabs' role='tablist'>
              <li className='nav-item'>
                <a className='nav-link active' id='home-tab' data-toggle = 'tab' href='#home' role='tab'>About</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' id='profile-tab' data-toggle = 'tab' href='#profile' role='tab'>Timeline</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
