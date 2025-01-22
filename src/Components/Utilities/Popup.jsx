import React from 'react'

const Popup = ({ children }) => {
      return (
            <div className='fixed inset-0 z-40 flex items-center justify-center'>

                  {/* this div will block all clicks outside the popup  */}
                  {/* we should keep this div as seperate div , so it can handle all outside clicks as well  */}
                  <div className='absolute inset-0 bg-black bg-opacity-95'></div>

                  {/* this is our pop up, always provide a higher z-index as well as relative position to popup  */}
                  <div className='relative text-2xl bg-black z-50 text-white rounded-lg  p-10 ring ring-slate-400 hover:ring-gray-200' >
                        {children}
                  </div>
            </div >
      )
}

export default Popup