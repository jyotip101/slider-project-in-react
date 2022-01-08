import React from 'react'

const TabsDetials = ({ data }) => {
  const { name, job, url, text } = data

  return (
    <>
      <article className='card'>
        <div className='profile'>
          <div className='img-contant'>
            <img src={url} alt={name} />
          </div>
          <div className='name-contant'>
            <h1>{name}</h1>
            <h4>{job}</h4>
          </div>
        </div>
        {text.map((txt, index) => {
          return (
            <div key={index} className='text-contant'>
              <i className='material-icons icons'>double_arrow</i>
              <p>{txt}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default TabsDetials
