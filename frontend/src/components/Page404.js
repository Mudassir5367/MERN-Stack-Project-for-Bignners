import React from 'react'
import {Link} from 'react-router-dom'


const Page404 = () => {
  return (
    <>
      <div className='page404'>
        <h1 className='page404Text'>404 Page not found</h1> <br/>
      </div>
        <Link to='/' className='navLinkPage404'>Back To Home Page</Link>
    </>
  )
}

export default Page404
