import React, { useEffect, useState } from 'react'
import SlideContant from './SlideContant'
import ProjectData from './ProjectData'

const Slider = () => {
  const [data, setData] = useState(ProjectData)
  const [indexValue, setIndexValue] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (indexValue < 0) {
      setIndexValue(lastIndex)
    }

    if (indexValue > lastIndex) {
      setIndexValue(0)
    }
  }, [indexValue, data])

  useEffect(() => {
    let slide = setInterval(() => {
      setIndexValue(indexValue + 1)
    }, 3000)
    return () => clearInterval(slide)
  }, [indexValue])

  return (
    <>
      <div className='container'>
        <h1 className='title'>Slider | Responsive Design Projects</h1>
        <div className='silde-contantiner'>
          {data.map((item, index) => {
            let position = 'next-slide'

            if (index === indexValue) {
              position = 'active-slide'
            }

            if (
              index === indexValue - 1 ||
              (indexValue === 0 && index === data.length - 1)
            ) {
              position = 'last-slide'
            }

            return (
              <SlideContant
                key={item.id}
                item={item}
                indexValue={indexValue}
                position={position}
              />
            )
          })}
          <button
            className='prev'
            onClick={() => setIndexValue(indexValue - 1)}
          >
            <i className='material-icons'>navigate_before</i>
          </button>
          <button
            className='next'
            onClick={() => setIndexValue(indexValue + 1)}
          >
            <i className='material-icons'>navigate_next</i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Slider
