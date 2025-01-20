import React from 'react'
import { useState } from 'react';
const Filter = ({ filters, setFilters }) => {

      function handleSubmit(e) {
            e.preventDefault();
            
            const { showByLowPriority, showByMedPriority, showByHighPriority, showPendingTask, showCompletedTask, sortByPriority, sortByDeadline, sortByCreationTime } = e.target;
            
            const newFilters = {
                  'showByLowPriority': showByLowPriority.value,
                  'showByMedPriority': showByMedPriority.value,
                  'showByHighPriority': showByHighPriority.value,
                  'showPendingTask': showPendingTask.value,
                  'showCompletedTask': showCompletedTask.value,
                  'sortByPriority': sortByPriority.value,
                  'sortByDeadline': sortByDeadline.value,
                  'sortByCreationTime': sortByCreationTime.value,
            }

            setFilters(newFilters);
            console.log("filters applied !")

            document.getElementById('submit_button').textContent = 'Applied !';
            document.getElementById('submit_button').classList.add( 'bg-green-800', 'text-white', 'font-bold', 'text-xl', '!ring-green-400' );
            setTimeout( ()=>{setPopupVisibility(false)}, 1000);
      }


      const [popupVisibility, setPopupVisibility] = useState(false);


      return (
            <>
                  <button className='buttonWithRing' onClick={() => { setPopupVisibility(true) }}>Apply Filter</button>

                  {popupVisibility &&
                        <div>
                              <div className="fixed inset-0 z-40 flex items-center justify-center">

                                    <div className='absolute inset-0  bg-black opacity-95'></div>

                                    <div className='relative text-2xl bg-black z-50 text-white rounded-lg  p-8 ring ring-slate-500 hover:ring-gray-200' >
                                          <form onSubmit={handleSubmit}>

                                                <div className='border-2 rounded-lg p-4'>
                                                      <h1>Show By : </h1>
                                                      <h2 className='ml-4 mt-2'>Priority : </h2>
                                                      <div className=' flex flex-col justify-around sepe ml-10'>

                                                            <div>
                                                                  <input type="checkbox" name="showByLowPriority" id="lowPriorityShow" className='defaultCheckBox' />
                                                                  <label htmlFor="lowPriorityShow">Low</label> <br />
                                                            </div>
                                                            <div>
                                                                  <input type="checkbox" name="showByMedPriority" id="medPriorityShow" className='defaultCheckBox' />
                                                                  <label htmlFor="medPriorityShow">Med</label> <br />
                                                            </div>
                                                            <div>
                                                                  <input type="checkbox" name="showByHighPriority" id="highPriorityShow" className='defaultCheckBox' />
                                                                  <label htmlFor="highPriorityShow">High</label> <br />
                                                            </div>
                                                      </div>

                                                      <h2 className='ml-4 mt-2 '>Status : </h2>
                                                      <div className='ml-10'>
                                                            <input type="checkbox" name="showPendingTask" id="showPendingTask" className='defaultCheckBox' />
                                                            <label htmlFor="showPendingTask">Pending Tasks</label> <br />

                                                            <input type="checkbox" name="showCompletedTask" id="showCompletedTask" className='defaultCheckBox' />
                                                            <label htmlFor="showCompletedTask">Completed Tasks</label> <br />
                                                      </div>
                                                </div>

                                                <div className='border-2 rounded-lg p-4 mt-8'>


                                                      <h2 >Sort By : </h2>
                                                      <div className='ml-4'>
                                                            <input type="checkbox" name="sortByPriority" id="sortByPriority" className='defaultCheckBox' />
                                                            <label htmlFor="sortByPriority"> Priority </label> <br />

                                                            <input type="checkbox" name="sortByDeadline" id="sortByDeadline" className='defaultCheckBox' />
                                                            <label htmlFor="sortByDeadline"> Deadline </label> <br />

                                                            <input type="checkbox" name="sortByCreationTime" id="sortByCreationTime" className='defaultCheckBox' />
                                                            <label htmlFor="sortByCreationTime"> CreationTime </label> <br />
                                                      </div>
                                                </div>

                                                <div className='flex flex-row justify-end mt-8'>
                                                      <button type='submit' id='submit_button' className='buttonWithRing w-auto  mr-6'>Apply</button>
                                                      <button onClick={() => setPopupVisibility(false)} className='buttonWithRing w-auto  hover:ring-red-500'>Cancel</button>
                                                </div>

                                          </form>
                                    </div>
                              </div>
                        </div>
                  }
            </>
      )
}

export default Filter