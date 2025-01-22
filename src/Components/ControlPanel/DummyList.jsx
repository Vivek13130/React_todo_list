import React from 'react'
import { randomTasks } from '../Utilities/Constants'
import Popup from '../Utilities/popup';


const DummyList = ({taskList, setTaskList}) => {
      const [popupVisibility, setPopupVisibility] = React.useState(false);
      const [buttonContent, setButtonContent] = React.useState("Load");

      function loadTasks() {
            setTaskList([...taskList , ...randomTasks]);
            console.log(taskList); 

            setButtonContent("Loaded ! ");
            const button = document.getElementById("DummyListAddButton")
            button.classList.add('bg-green-800', '!ring-green-400');
            
            setTimeout(() => {
                  setPopupVisibility(false);
                  setButtonContent("Load");
                  button.classList.remove('bg-green-800');
                  button.classList.remove('ring-green-400');
            }, 1500);
      }

      return (
            <div className="tooltip  tooltip-info" data-tip="Load random tasks to explore">
                  <button className='ring ring-yellow-500 hover:text-white hover:ring-green-400 rounded-lg px-2 py-2 font-semibold text-xl  ml-6 ' onClick={()=>setPopupVisibility(true)}>Dummy List</button>
                  {popupVisibility &&
                        <Popup>
                              <div>
                                    <h1>Load random tasks to play with features !</h1><br></br>
                                    <div className='flex flex-row items-center justify-end'> 
                                          <button id='DummyListAddButton' className='buttonWithRing mr-6' onClick={loadTasks}>{buttonContent}</button>
                                          <button  className='buttonWithRing hover:ring-red-500' onClick={()=> setPopupVisibility(false)}>Cancel</button>
                                    </div>
                              </div>
                        </Popup>
                  }
            </div>
      )
}

export default DummyList;