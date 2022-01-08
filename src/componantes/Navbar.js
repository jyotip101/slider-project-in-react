import React from 'react'

const Navbar = ({ data, setIndexValue }) => {
  console.log(data)
  return (
    <>
      <header className='navbar'>
        <ul className='navbar-link'>
          {data.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setIndexValue(index)}
                className='link'
              >
                {item.job}
              </li>
            )
          })}
        </ul>
      </header>
    </>
  )
}

export default Navbar
