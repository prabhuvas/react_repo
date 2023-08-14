import React from 'react'
import InShot from './InShot.jpg';
import './Content.css'

const Content = () => {
  return (
    <div>
        <div className="Content-img">
          <img src={InShot} className='img' alt="img" />
        </div>
    </div>
  )
}

export default Content