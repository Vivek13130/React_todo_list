import React from 'react'
import Task from './Task'

const PendingTask = () => {
      return (
            <div>
                  <h2 className='text-2xl text-red-200 font-bold'>Pending Tasks : </h2>
                  <div className='border-b-2 border-red-200 mb-4'></div>
                  <div>
                        <Task></Task>
                  </div>
            </div>
      )
}

export default PendingTask