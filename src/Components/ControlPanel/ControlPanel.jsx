import React from 'react'
import AddTask from './AddTask'
import Filter from './Filter'
import Feedback from './Feedback'

const ControlPanel = () => {
      return (
            <div className='ring ring-slate-500 hover:ring-slate-300 rounded-lg px-6 py-4  flex flex-row flex-nowrap justify-between'>
                  <div className='flex flex-row'>
                        <AddTask></AddTask>
                        <Filter></Filter>
                  </div>

                  <Feedback></Feedback>
            </div>
      )
}

export default ControlPanel