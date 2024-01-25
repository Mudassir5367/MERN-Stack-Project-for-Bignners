import React from 'react'

const ContactUs = () => {
  return (
    <>
     <div className='contactUs-main'>
      <div className='contactUs'>
        <h4>Phone</h4>
        <p>+923444555</p>
      </div>
      <div className='contactUs'>
        <h4>E-mail</h4>
        <p>mudassir@gmail.com</p>
      </div>
      <div className='contactUs'>
        <h4>Address</h4>
        <p>Lahore</p>
      </div>
     </div> 

     <div className='contactUs-SecTwo'>
     <h3>Get In Touch</h3>
      <div className='contactSecTwoInputs'>
        <div className='contactInputs'>
          <input type='text' placeholder='Your Name'/>
        </div>
        <div className='contactInputs'>
          <input type='email' placeholder='Your E-mail'/>
        </div>
        <div className='contactInputs'>
          <input type='tel' placeholder='Your Phone Number'/>
        </div>
      </div>
      <div className='textArea-main'>
        <textarea className='contactTextArea' cols = '30' rows= '8' placeholder='Message'></textarea>
      </div>
      <div className='contactBtn'>
      <button className='contactSubmitBtn'>Send Message</button>
      </div>
     </div>
    </>
  )
}

export default ContactUs
