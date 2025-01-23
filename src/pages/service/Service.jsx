import React from 'react'
import Serviceheader from './servicecomponents/Serviceheader'
import Servicebanner from './servicecomponents/Servicebanner'
import Jumpservice from './servicecomponents/Jumpservice'
import Servicebookingform from './servicecomponents/Servicebookingform'

const Service = () => {
  return (
    <div>
      <Serviceheader/>
      <Servicebanner/>
      <Jumpservice/>
      <Servicebookingform/>
    </div>
  )
}

export default Service
