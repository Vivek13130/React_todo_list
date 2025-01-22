import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../Utilities/popup';
import ConfettiExplosion from 'react-confetti-explosion';
import { trollCelebration, smallCelebration, mediumCelebration, largeCelebration } from '../Utilities/Constants';

export default function Feedback() {
      const [isExploding, setIsExploding] = useState(false);
      const [buttonContent, setButtonContent] = useState("Send");
      const [rating, setRating] = useState(0); // Default rating value
      const [popupVisibility, setPopupVisibility] = useState(false);
      const form = useRef();

      const handleRatingChange = (e) => {
            setRating(e.target.value);
      };


      function suitableCelebration() {
            let feedback = document.getElementById('feedback_text').value;
            if (feedback.length < 20) {
                  return <ConfettiExplosion  {...trollCelebration} zIndex={999}></ConfettiExplosion>
            } else if (feedback.length >= 20 && feedback.length <= 40) {
                  return <ConfettiExplosion  {...smallCelebration} zIndex={999}></ConfettiExplosion>
            } else if (feedback.length > 40 && feedback.length <= 100) {
                  return <ConfettiExplosion  {...mediumCelebration} zIndex={999}></ConfettiExplosion>
            } else {
                  return <ConfettiExplosion  {...largeCelebration} zIndex={999}></ConfettiExplosion>
            }
      }

      function handleExplosion() {
            setIsExploding(true);
            console.log("c1")
            let submitButton = document.getElementById('feedback_submit_button')

            submitButton.classList.add('cursor-not-allowed');
            submitButton.setAttribute('disabled', 'true');


            setButtonContent("Sent, Thanks !")
            submitButton.classList.add("!bg-green-700", "!ring-green-400")

            setTimeout(() => {
                  setIsExploding(false);
                  setPopupVisibility(false);
                  setButtonContent("Send")
                  submitButton.classList.remove("!bg-green-800")
                  submitButton.classList.remove("!ring-green-400")
                  submitButton.classList.remove('cursor-not-allowed');
                  submitButton.removeAttribute('disabled');
            }, smallCelebration.duration - 2000);

      }


      function sendEmail(e){
            e.preventDefault();
            setButtonContent("Sending....")

            const textArea = document.getElementById("feedback_text")
            textArea.value = textArea.value + "   ||   RATING : " + rating;

            emailjs.sendForm('service_4g5iyib', 'template_guvmahq', form.current, {
                  publicKey: 'CI_uVcwFj9ddIgiaN',
            }).then(() => {
                  handleExplosion();
            },
                  (error) => {
                        console.log('FAILED...', error.text);
                        setButtonContent('!!!  E R R O R  !!!');
                  },
            );
      };

      return (
            <>

                  <div className="tooltip  tooltip-warning" data-tip="No personal data required !">
                        <button className=' buttonWithRing  ' onClick={() => { setPopupVisibility(true); }} >Feedback</button>
                  </div>
                  {
                        popupVisibility &&
                        (
                              <Popup>
                                    <div className='flex flex-col justify-start items-center  text-white'>
                                          <div className='flex flex-row flex-nowrap justify-center items-center'>
                                                {isExploding && suitableCelebration()}
                                                <h2 className='border-b-2 ml-8 mr-8'>Feedback Form</h2>
                                                {isExploding && suitableCelebration()}
                                          </div>
                                          <br></br>

                                          <form ref={form} onSubmit={sendEmail}>
                                                <label htmlFor='from_name'>Your Name :</label>
                                                <input type="text" name="from_name" className='inputBox ml-4' placeholder='Optional' /> <br></br>
                                                <label htmlFor='to_name'>My Name : </label>
                                                <input type="text" name="to_name" className='inputBox ml-4' placeholder=' in your mind :) ' /> <br></br>
                                                <label htmlFor='message'>Feedback / Roast : </label><br></br>
                                                <textarea id='feedback_text' placeholder='@_@' className='rounded-lg p-2 px-4 ring-2 ring-slate-500 focus:ring-transparent   h-40 w-full' name="message" /><br></br>
                                                <br></br>

                                                <div className="rating rating-lg rating-half flex flex-row items-center">
                                                      <label htmlFor="rating-10" className="mr-4">Rating :</label>
                                                      <input type="radio" name="rating" className="rating-hidden" value="0" onChange={handleRatingChange} />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-1 bg-yellow-500" value="0.5" onChange={handleRatingChange} defaultChecked />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-2 bg-yellow-500" value="1" onChange={handleRatingChange} />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-1 bg-yellow-500" value="1.5" onChange={handleRatingChange} />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-2 bg-yellow-500" value="2" onChange={handleRatingChange} />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-1 bg-yellow-500" value="2.5" onChange={handleRatingChange} />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-2 bg-yellow-500" value="3" onChange={handleRatingChange} />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-1 bg-yellow-500" value="3.5" onChange={handleRatingChange} />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-2 bg-yellow-500" value="4" onChange={handleRatingChange} />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-1 bg-yellow-500" value="4.5" onChange={handleRatingChange} />
                                                      <input type="radio" name="rating" className="mask mask-star-2 mask-half-2 bg-yellow-500" value="5" onChange={handleRatingChange} />
                                                </div>

                                                <br></br>
                                                <div className='flex flex-row justify-end items-center '>
                                                      <button id='feedback_submit_button' className='tooltip tooltip-error buttonWithRing mr-6' data-tip="No SPAM please !" type='submit' onClick={sendEmail}>{buttonContent}</button><br></br>
                                                      <button className='buttonWithRing hover:ring-red-500' type='button' onClick={() => { setPopupVisibility(false) }}>Cancel</button>
                                                </div>
                                          </form>

                                    </div>
                              </Popup>
                        )
                  }
            </>
      );
};