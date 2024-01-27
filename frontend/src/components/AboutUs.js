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
            <div><button className='about'>Edit Profile</button></div>
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
          <div className='aboutSecThree'>
            <div className='aboutThreeSec'>
              <p>WORK LINK</p>
              <a href='https://github.com/Mudassir5367'>github</a><br/>
              <a href='https://www.upwork.com/freelancers/~01728f70863557fb5a'>upwork</a><br/>
              <a href='https://www.linkedin.com/in/mudassir-hussain-048048222/'>linkedin</a><br/>
              <a href='https://www.fiverr.com/mudassirhuss426?up_rollout=true'>fivver</a><br/>
            </div>
            <div className='aboutThreeSec'>
              <h6 >User Id</h6>
              <h6 className='aboutText'>Name</h6>
              <h6 className='aboutText'>E-mail</h6>
              <h6 className='aboutText'>Phone</h6>
            </div>
            <div className='aboutThreeSec'>
              <p>9375840923</p>
              <p>Mudassir Huusain</p>
              <p>mudassir@gmail.com</p>
              <p>+923564583</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
