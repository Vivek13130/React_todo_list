import React from 'react'
import Task from './Task'

const CompletedTask = () => {
      return (
            <div className='mt-6'>
                  <h2 className='text-2xl text-green-200 font-bold'>Completed Tasks : </h2>
                  <div className='border-b-2 border-green-200 mb-4'></div>
                  <div>
                        <Task></Task>
                  </div>
            </div>
      )
}

export default CompletedTask