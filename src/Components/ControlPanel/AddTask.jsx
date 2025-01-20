import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({tasklist, setTaskList}) => {
      const [popupVisibility, setPopupVisibility] = useState(false);
      const [selectedDate, setSelectedDate] = useState(null);

      function handleSubmit(e) {
            e.preventDefault()
            const { taskTitle, taskDesc, taskPriority, taskDeadline, setCreationTime } = e.target; // destructuring important values 
            
            const newTaskData = {
                  title: taskTitle.value,
                  description: taskDesc.value,
                  priority: taskPriority.value,
                  deadline: taskDeadline.value,
                  mentionCreationTime: setCreationTime.value,
                  completed : false,
            }

            console.log("new task added !");
            setTaskList(tasklist.concat(newTaskData));
            document.getElementById('submit_button').textContent = 'Added !';
            document.getElementById('submit_button').classList.add( 'bg-green-800', 'text-white', 'font-bold', 'text-xl', '!ring-green-400' );
            setTimeout( ()=>{setPopupVisibility(false)}, 1000);
      }

      const now = new Date();

      return (
            <>
                  <button className='buttonWithRing mr-6 ' onClick={() => { setPopupVisibility(true) }}>Add Task</button>
                  {
                        popupVisibility &&
                        <div className='fixed inset-0 z-40 flex items-center justify-center'>

                              {/* this div will block all clicks outside the popup  */}
                              {/* we should keep this div as seperate div , so it can handle all outside clicks as well  */}
                              <div className='absolute inset-0 bg-black bg-opacity-90'></div>

                              {/* this is our pop up, always provide a higher z-index as well as relative position to popup  */}
                              <div className='relative text-2xl bg-black z-50 text-white rounded-lg  p-10 ring ring-slate-400 hover:ring-gray-200' >

                                    <form onSubmit={handleSubmit}>
                                          <label htmlFor="taskTitle">Title : </label> <br />
                                          <input type="text" name="taskTitle" id="taskTitle" className='inputBox w-full' required />
                                          <br />

                                          <label htmlFor="taskDesc">Description : </label><br />
                                          <textarea name="taskDesc" id="taskDesc" placeholder='You can add it later..' className='inputBox w-full min-h-28'></textarea>
                                          <br />

                                          <label htmlFor="taskPriority" className='mr-4'>Set Priority : </label>
                                          <select name="taskPriority" id="taskPriority" className='inputBox '>
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                          </select>
                                          <br />

                                          <label htmlFor="deadline">Set Deadline :  </label>
                                          <DatePicker
                                                name='taskDeadline'
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

                                          <div className='flex flex-row items-center'>
                                                <label htmlFor="setCreationTime">Mention Creation Time  </label>
                                                <input type="checkbox" name='setCreationTime' className='checkbox checkbox-info ml-3' />
                                          </div>
                                          <br />

                                          <div className='flex flex-row justify-end'>
                                                <button type='submit' id='submit_button' className='buttonWithRing w-auto mt-5 mr-5'>Add Task</button>
                                                <button onClick={() => { setPopupVisibility(false) }} className='buttonWithRing w-auto mt-5 hover:ring-red-500'>Cancel</button>
                                          </div>

                                    </form>
                              </div>
                        </div>
                  }
            </>

      )
}

export default AddTask