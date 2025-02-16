import React from 'react'
import AddTask from './AddTask'
import Filter from './Filter'
import Feedback from './Feedback'
import DummyList from './DummyList'

const ControlPanel = ({ taskList, setTaskList, filters, setFilters }) => {
      return (
            <div className='ring ring-slate-500 hover:ring-slate-300 rounded-lg px-6 py-4  flex flex-row flex-nowrap justify-between'>

                  <div className='flex flex-row'>
                        <AddTask taskList={taskList} setTaskList={setTaskList}></AddTask>
                        <Filter filters={filters} setFilters={setFilters}></Filter>
                  </div>
                  
                  <div className='flex flex-row'>
                        <Feedback></Feedback>
                        <DummyList taskList={taskList} setTaskList={setTaskList}></DummyList>
                  </div>
            </div>
      )
}

export default ControlPanel