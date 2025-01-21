import React from 'react'
import { useState } from 'react';
import Popup from '../Utilities/popup';

const Filter = ({ filters, setFilters }) => {
      const [reset_buttonContent, setResetButtonContent] = useState("Reset");

      function resetFilters() {
            setCurrentFilters({
                  'showByLowPriority': true,
                  'showByMedPriority': true,
                  'showByHighPriority': true,
                  'showPendingTask': true,
                  'showCompletedTask': true,
                  'sortByPriority': false,
                  'sortByDeadline': false,
                  'sortByCreationTime': false,
            });

            setResetButtonContent('Done !');
            resetButton.classList.add('bg-green-800')
            setTimeout(() => {
                  setResetButtonContent('Reset');
                  resetButton.classList.remove('bg-green-800')
            }, 1000);
      }

      function handleSubmit(e) {
            e.preventDefault();

            setFilters(currentFilters);
            console.log("filters applied !")

            setButtonContent("Applied !");
            document.getElementById('submit_button').classList.add('bg-green-800', 'text-white', 'font-bold', 'text-xl', '!ring-green-400');
            setTimeout(() => {
                  setPopupVisibility(false);
                  setButtonContent('Apply');
            }, 1000);
      }

      function handleCheckboxChange(e) {
            setCurrentFilters({ ...currentFilters, [e.target.name]: e.target.checked });
      }

      const [buttonContent, setButtonContent] = useState("Apply");
      const [popupVisibility, setPopupVisibility] = useState(false);
      const [currentFilters, setCurrentFilters] = useState(filters);

      return (
            <>
                  <button className='buttonWithRing' onClick={() => { setPopupVisibility(true) }}>Apply Filter</button>

                  {popupVisibility &&
                        <Popup>
                              <form onSubmit={handleSubmit}>

                                    <div className='border-2 rounded-lg p-4'>
                                          <h1>Show By : </h1>
                                          <h2 className='ml-4 mt-2'>Priority : </h2>
                                          <div className=' flex flex-col justify-around sepe ml-10'>

                                                <div>
                                                      <input type="checkbox" name="showByLowPriority" id="lowPriorityShow" className='defaultCheckBox' onChange={handleCheckboxChange} checked={currentFilters.showByLowPriority} />
                                                      <label htmlFor="lowPriorityShow">Low</label> <br />
                                                </div>
                                                <div>
                                                      <input type="checkbox" name="showByMedPriority" id="medPriorityShow" className='defaultCheckBox' onChange={handleCheckboxChange} checked={currentFilters.showByMedPriority} />
                                                      <label htmlFor="medPriorityShow">Med</label> <br />
                                                </div>
                                                <div>
                                                      <input type="checkbox" name="showByHighPriority" id="highPriorityShow" className='defaultCheckBox' onChange={handleCheckboxChange} checked={currentFilters.showByHighPriority} />
                                                      <label htmlFor="highPriorityShow">High</label> <br />
                                                </div>
                                          </div>

                                          <h2 className='ml-4 mt-2 '>Status : </h2>
                                          <div className='ml-10'>
                                                <input type="checkbox" name="showPendingTask" id="showPendingTask" className='defaultCheckBox' onChange={handleCheckboxChange} checked={currentFilters.showPendingTask} />
                                                <label htmlFor="showPendingTask">Pending Tasks</label> <br />

                                                <input type="checkbox" name="showCompletedTask" id="showCompletedTask" className='defaultCheckBox' onChange={handleCheckboxChange} checked={currentFilters.showCompletedTask} />
                                                <label htmlFor="showCompletedTask">Completed Tasks</label> <br />
                                          </div>
                                    </div>

                                    <div className='border-2 rounded-lg p-4 mt-8'>


                                          <h2 >Sort By : </h2>
                                          <div className='ml-4'>
                                                <input type="checkbox" name="sortByPriority" id="sortByPriority" className='defaultCheckBox' onChange={handleCheckboxChange} checked={currentFilters.sortByPriority} />
                                                <label htmlFor="sortByPriority"> Priority </label> <br />

                                                <input type="checkbox" name="sortByDeadline" id="sortByDeadline" className='defaultCheckBox' onChange={handleCheckboxChange} checked={currentFilters.sortByDeadline} />
                                                <label htmlFor="sortByDeadline"> Deadline </label> <br />

                                                <input type="checkbox" name="sortByCreationTime" id="sortByCreationTime" className='defaultCheckBox' onChange={handleCheckboxChange} checked={currentFilters.sortByCreationTime} />
                                                <label htmlFor="sortByCreationTime"> CreationTime </label> <br />
                                          </div>
                                    </div>

                                    <div className='flex flex-row justify-end mt-8'>
                                          <button type="button" id='reset_button' className='buttonWithRing h-12 hover:ring-yellow-400 mr-6' onClick={resetFilters}>{reset_buttonContent}</button>
                                          <button type='submit' id='submit_button' className='buttonWithRing h-12  mr-6'>{buttonContent}</button>
                                          <button type="button" onClick={() => setPopupVisibility(false)} className='buttonWithRing h-12  hover:ring-red-500'>Cancel</button>
                                    </div>
                              </form>
                        </Popup>

                  }
            </>
      )
}

export default Filter