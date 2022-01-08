import React from 'react'
import TabsDetials from './TabsDetials'

const TabsList = ({ data, indexValue }) => {
  return (
    <>
      <div className='contant-list'>
        <TabsDetials data={data[indexValue]} />
      </div>
    </>
  )
}

export default TabsList
