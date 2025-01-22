import React from 'react'
import PendingTask from './PendingTask'
import CompletedTask from './CompletedTask'
const TaskSection = (props) => {
      return (
            <div className=' mt-8 p-6  ring ring-slate-500 hover:ring-slate-300 rounded-lg px-6 py-4 '>
                  <PendingTask {...props}></PendingTask>
                  <CompletedTask {...props}></CompletedTask>
            </div>
      )
}

export default TaskSection