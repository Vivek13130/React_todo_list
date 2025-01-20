import React from 'react'
import AddTask from './AddTask'
import Filter from './Filter'
import Feedback from './Feedback'

const ControlPanel = ({tasklist , setTaskList, filters, setFilters}) => {
      return (
            <div className='ring ring-slate-500 hover:ring-slate-300 rounded-lg px-6 py-4  flex flex-row flex-nowrap justify-between'>
                  
                  <div className='flex flex-row'>
                        {/* add effect of added and green on add task and same on filters  */}
                        <AddTask tasklist = {tasklist} setTaskList = {setTaskList}></AddTask>
                        <Filter filters = {filters} setFilters = {setFilters}></Filter>
                  </div>

                  <Feedback></Feedback>
            </div>
      )
}

export default ControlPanel