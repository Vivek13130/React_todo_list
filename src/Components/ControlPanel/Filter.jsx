import React from 'react'

const Filter = () => {

      const [popupVisibility, setPopupVisibility] = useState(false);

      return (
            <>
                  <button className='inputBox'>Apply Filter</button>

                  {popupVisibility &&
                        <div>
                              <div className="fixed inset-0 flex items-center justify-center">

                                    <div className='absolute inset-0 z-40 bg-black opacity-90'></div>

                                    <div className='relative text-2xl bg-black z-50 text-white rounded-lg  p-10 ring ring-slate-400 hover:ring-gray-200' >
                                          <form action="">
                                                <label>Filters : </label>
                                                <br />
                                                <br />

                                                <label>Show By : </label>
                                                <fieldset>
                                                      <legend about='Priority'>

                                                            <input type="checkbox" name="showByLowPriority" id="lowPriorityShow" />
                                                            <label htmlFor="lowPriorityShow">Low</label> <br />

                                                            <input type="checkbox" name="showByMedPriority" id="medPriorityShow" />
                                                            <label htmlFor="medPriorityShow">Med</label> <br />

                                                            <input type="checkbox" name="showByHighPriority" id="highPriorityShow" />
                                                            <label htmlFor="highPriorityShow">High</label> <br />

                                                      </legend>
                                                </fieldset>

                                                <fieldset>
                                                      <legend about='Status'>

                                                            <input type="checkbox" name="showPendingTask" id="showPendingTask" />
                                                            <label htmlFor="showPendingTask">Pending Tasks</label> <br />

                                                            <input type="checkbox" name="showCompletedTask" id="showCompletedTask" />
                                                            <label htmlFor="showCompletedTask">Completed Tasks</label> <br />

                                                      </legend>
                                                </fieldset>

                                                <label htmlFor="">Sort By : </label>

                                                <input type="checkbox" name="sortByPriority" id="sortByPriority" />
                                                <label htmlFor="sortByPriority"> Priority </label> <br />

                                                <input type="checkbox" name="sortByDeadline" id="sortByDeadline" />
                                                <label htmlFor="sortByDeadline"> Deadline </label> <br />

                                                <input type="checkbox" name="sortByCreationTime" id="sortByCreationTime" />
                                                <label htmlFor="sortByCreationTime"> CreationTime </label> <br />

                                                <div className='flex flex-row justify-end'>
                                                      <button className='buttonWithRing w-auto mt-5 mr-5'>Apply</button>
                                                      <button className='buttonWithRing w-auto mt-5 hover:ring-red-500'>Cancel</button>
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