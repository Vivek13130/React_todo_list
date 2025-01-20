import React from 'react'
import PendingTask from './PendingTask'
import CompletedTask from './CompletedTask'
const TaskList = () => {
      return (
            <div className=' mt-8 p-6  ring ring-slate-500 hover:ring-slate-300 rounded-lg px-6 py-4 '>
                  <PendingTask></PendingTask>
                  <CompletedTask></CompletedTask>
            </div>
      )
}

export default TaskList