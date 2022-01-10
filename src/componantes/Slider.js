import React, { useState } from 'react'
import SlideContant from './SlideContant'
import ProjectData from './ProjectData'

const Slider = () => {
  const [data, setData] = useState(ProjectData)
  const [indexValue, setIndexValue] = useState(0)

  return (
    <>
      <div className='container'>
        <h1 className='title'>Slider | Responsive Design Projects</h1>
        <div className='silde-contantiner'>
          {data.map((item) => {
            return (
              <SlideContant key={item.id} item={item} indexValue={indexValue} />
            )
          })}
          <button className='prev'>
            <i className='material-icons'>navigate_before</i>
          </button>
          <button className='next'>
            <i className='material-icons'>navigate_next</i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Slider
