import React from 'react'
import AddTask from './AddTask'
import Filter from './Filter'
import Sponser from './Sponser'

const ControlPanel = () => {
      return (
            <div className='ring ring-slate-500 hover:ring-slate-400 rounded-lg p-4  flex flex-row flex-nowrap justify-between'>
                  <div className='flex flex-row'>
                        <AddTask></AddTask>
                        <Filter></Filter>
                  </div>

                  <Sponser></Sponser>
            </div>
      )
}

export default ControlPanel