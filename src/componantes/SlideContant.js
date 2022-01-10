import React from 'react'

const SlideContant = ({ item, indexValue }) => {
  const { id, imgUrl, demo, sourceCode, description, title, language } = item
  return (
    <>
      <article className='slide-contant .active-slide'>
        <div className='lang'>
          {language.map((item, index) => {
            return <p key={index}>#{item}</p>
          })}
        </div>
        <img src={imgUrl} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='links'>
          <a href={demo}>Demo</a>
          <a href={sourceCode}>
            Source Code <i className='material-icons'>code</i>
          </a>
        </div>
      </article>
    </>
  )
}

export default SlideContant
