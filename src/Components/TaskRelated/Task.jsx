import React from 'react'
import { useState } from 'react';

import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";

const Task = () => {
      const [isPending, setIsPending] = useState(false);

      return (
            <div className={`relative ring-2 ring-slate-500 hover:ring-slate-300 rounded-lg px-6 pt-4 pb-2 ${!isPending ? 'ring-green-300 hover:ring-green-400' : ''} `}>
                  <div className='flex flex-row flex-nowrap items-center  border-b border-slate-200 mb-2 pb-2'>
                        {
                              isPending &&
                              <input type="checkbox" name="taskCompleted" id="taskCompleted" className='checkbox checkbox-success  mr-4' />
                        }
                        <p className='text-xl text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi debitis reprehenderit qui soluta voluptatibus, ipsam natus neque libero molestias temporibus nihil porro, repellat enim. Ipsum vitae sint sed amet?
                              Laborum reprehenderit veniam illum nemo ullam dignissimos, ex voluptas harum fuga, asperiores adipisci at qui vitae quisquam corrupti architecto illo quia unde maiores exercitationem iusto. Natus praesentium dolore eveniet perspiciatis? this is title</p>
                  </div>

                  <div className='flex flex-row justify-between'>
                        <div className='flex flex-row'>
                              <CreationTime></CreationTime>
                              {!isPending && <CompletionTime></CompletionTime>}
                        </div>

                        <div className='flex flex-row flex-nowrap justify-end items-center py-2'>
                              <DescriptionButton></DescriptionButton>
                              <PriorityButton></PriorityButton>
                              <DeadlineButton></DeadlineButton>

                              {
                                    isPending && <EditButton></EditButton>
                              }

                              <DeleteButton></DeleteButton>
                        </div>

                  </div>


            </div>
      )
}


const EditButton = () => {
      return (
            <div className="tooltip  tooltip-info" data-tip="Edit Task ?">
                  <div className='ring-2 ring-slate-300 cursor-pointer  hover:ring-sky-400 hover:text-sky-400 rounded-full p-3 mr-4'>
                        <GrEdit className='scale-150' />
                  </div>
            </div>
      );
}

const DeleteButton = () => {
      return (
            <div className="tooltip  tooltip-error" data-tip="Delete Task ?">
                  <div className='ring-2 ring-slate-300 cursor-pointer hover:ring-red-400 rounded-full p-3  hover:text-red-400'>
                        <MdDeleteForever className='scale-150' />
                  </div>
            </div>
      );
}

const DescriptionButton = () => {
      return (
            <div className="tooltip  tooltip-info" data-tip="Add Description">
                  <div className='ring-2 ring-slate-300 cursor-pointer hover:ring-sky-400 rounded-full p-3 mr-4 hover:text-sky-400 flex flex-row'>
                        <MdDescription className='scale-150' />
                  </div>
            </div>
      );
}

const DeadlineButton = () => {
      return (
            <div className="tooltip  tooltip-warning" data-tip="Remaining Time : ">
                  <div className='ring-2 ring-slate-300 cursor-pointer hover:ring-yellow-400 rounded-full p-2 mr-4'>
                        <span>Deadline</span>
                  </div>
            </div>
      );
}


const PriorityButton = () => {
      return (
            <div className="tooltip  tooltip-warning" data-tip="Priority">
                  <div className='ring-2 ring-slate-300 cursor-pointer hover:ring-yellow-400 rounded-full py-2 px-4 mr-4'>
                        <span>High</span>
                  </div>
            </div>
      );
}

const CreationTime = () => {
      return (
            <div className=' ring-1 ring-slate-300 rounded-lg  px-2 mr-4  flex flex-col justify-center items-left  '>
                  <span>Created : 7th Jan 2025 12:00 PM</span>
                  <span>Updated : 19th Jan 2025 12:30 PM</span>
            </div>
      );
}

const CompletionTime = () => {
      return (
            <div className=' ring-1 ring-slate-300 rounded-lg  px-2 mr-4  flex flex-col justify-center items-left  '>
                  <span>Completed : 7th Jan 2025 12:00 PM</span>
                  <span>Time Taken : 19th Jan 2025 12:30 PM</span>
            </div>
      );
}


export default Task