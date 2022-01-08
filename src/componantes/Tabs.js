import React, { useState } from 'react'
import TabsList from './TabsList'
import Data from './Data'
import Navbar from './Navbar'

const Tabs = () => {
  const [data, setData] = useState(Data)
  const [indexValue, setIndexValue] = useState(0)

  return (
    <>
      <div className='container'>
        <h1 className='title'>my team</h1>
        <div className='contant-center'>
          <Navbar data={data} setIndexValue={setIndexValue} />
          <TabsList data={data} indexValue={indexValue} />
        </div>
      </div>
    </>
  )
}

export default Tabs
