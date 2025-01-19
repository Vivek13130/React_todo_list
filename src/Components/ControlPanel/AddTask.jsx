import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = () => {
      const [popupVisibility, setPopupVisibility] = useState(false);
      const [selectedDate, setSelectedDate] = useState(null);

      const handleDateChange = (date) => {
            setSelectedDate(date);
      };
      const now = new Date();

      return (
            <>
                  <button className='buttonWithRing mr-5'>Add Task</button>
                  {
                        popupVisibility &&
                        <div className='fixed inset-0 z-40 flex items-center justify-center'>

                              {/* this div will block all clicks outside the popup  */}
                              {/* we should keep this div as seperate div , so it can handle all outside clicks as well  */}
                              <div className='absolute inset-0 bg-black bg-opacity-90'></div>

                              {/* this is our pop up, always provide a higher z-index as well as relative position to popup  */}
                              <div className='relative text-2xl bg-black z-50 text-white rounded-lg  p-10 ring ring-slate-400 hover:ring-gray-200' >

                                    <form action="">
                                          <label htmlFor="taskTitle">Title : </label> <br />
                                          <input type="text" name="taskTitle" id="taskTitle" className='inputBox w-full' />
                                          <br />

                                          <label htmlFor="titleDesc">Description : </label><br />
                                          <textarea name="titleDesc" id="titleDesc" placeholder='You can add it later..' className='inputBox w-full min-h-28'></textarea>
                                          <br />

                                          <label htmlFor="titlePriority" className='mr-4'>Set Priority : </label>
                                          <select name="titlePriority" id="titlePriority" className='inputBox '>
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                          </select>
                                          <br />

                                          <label htmlFor="deadline">Set Deadline :  </label>
                                          <DatePicker
                                                selected={selectedDate}
                                                onChange={(date) => setSelectedDate(date)}
                                                showTimeSelect
                                                dateFormat="Pp" // Formats date and time
                                                timeIntervals={15} // Interval between times in minutes
                                                timeCaption="Time" // Label for time picker
                                                className="inputBox ml-2"
                                                minDate={now} // Prevent selection of past dates
                                          />
                                          <br />

                                          <label htmlFor="creationTime">Mention Creation Time : </label>
                                          <select name="creationTime" id="creationTime" className='inputBox py-0'>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                          </select>
                                          <br />

                                          <div className='flex flex-row justify-end'>
                                                <button className='buttonWithRing w-auto mt-5 mr-5'>Add Task</button>
                                                <button className='buttonWithRing w-auto mt-5 hover:ring-red-500'>Cancel</button>
                                          </div>

                                    </form>
                              </div>
                        </div>
                  }
            </>

      )
}

export default AddTask