import React from 'react'
import Popup from '../Utilities/popup'
import { useState } from 'react'
const Feedback = () => {

      const [popupVisibility , setPopupVisibility] = useState(false)

      return (
            <>
            <button className='buttonWithRing' onClick={()=>{setPopupVisibility(true)}}>FeedBack</button>
            {popupVisibility && 
                  <Popup>
                        <p>hello there</p>
                  </Popup>
            }
            </>
      )
}

export default Feedback