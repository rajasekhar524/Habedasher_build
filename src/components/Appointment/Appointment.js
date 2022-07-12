import React, {useEffect} from 'react'
import './appointment.scss'
import BlueButton from './../BlueButton/BlueButton';
import emailjs from 'emailjs-com';
// import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom';
import Popup from './../popup/Popup';
import { useState } from "react";
// import ReactDOM from "react-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgb(0, 17, 53);
  color:rgb(0, 17, 53);
`;

function Appointment() {
    const [buttonPopup, setButtonPopup] = useState(false);
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("rgb(0, 17, 53)");

    function handleShow() {
        setButtonPopup(true);
    }
    const history = useHistory();

    function sendEmail(e) {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm('service_f3vayds', 'template_oysmbvj', e.target, 'user_uh9FZHGEceRQL50NMAOUV')
          .then((result) => {
              // console.log(result.text);
              setLoading(false)
          }, (error) => {
              // console.log(error.text);   
          });
          e.target.reset()  
      }

    return (
        <div className="appointment_container_section">
          
         <div className='top_margin_checkout'>
          
          </div>
          {/* <div className='adcd' onClick={() => setLoading(!loading)}>Toggle Loader</div> */}
            {loading?<div className='appointment_container_popup'>
              <div className='appointment_container_popup'>
                <div className="sweet-loading">
                    {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
                    <ClipLoader color={color} loading={loading} css={override} size={80} />
                </div>
              </div>
          </div>:""}
                    <h1 className="appointment_container_header">
                        request an Appointment
                    </h1>
                    <div className="appointment_container_para">
                    Find the perfect present or create your personalized look with the help of our staff.
                    </div>
            
            <div className="appointment_container_enterdetails">
                <form onSubmit = {sendEmail}  className='appointment_container_form-inputs_form' >
                    <div className='appointment_container_form-inputs'>
                        {/* <label className='appointment_container_form-label'>First Name*</label> */}
                        <input
                            className='appointment_container_form-input'
                            type='text'
                            name='firstname'
                            placeholder='First Name'
                            required="required"
                        />
                    </div>
                    <div className='appointment_container_form-inputs'>
                        {/* <label className='form-label'>Last Name*</label> */}
                        <input
                            className='appointment_container_form-input'
                            type='text'
                            name='secondname'
                            placeholder='Last Name'
                        />
                    </div>
                    <div className='appointment_container_form-inputs'>
                        {/* <label className='form-label'>Email</label> */}
                        <input
                            className='appointment_container_form-input'
                            type='email'
                            name='email'
                            placeholder='Email'
                        />
                    </div>

                    <div className='appointment_container_form-inputs'>
                        {/* <label className='form-label'>Phone*</label> */}
                        <input
                          className='appointment_container_form-input'
                          type='phone'
                          name='phone'
                          placeholder='Phone'
                          required="required"
                        />
                    </div>
                    <div className='appointment_container_form-inputs'>
                      {/* <label className='form-label'>PREFERRED CONTACT TIME</label> */}
                      <select name="option">
                          <option value="0">Preferred contact time</option>
                          <option value="1">9am - 12noon</option>
                          <option value="2">12noon - 6pm</option>
                          <option value="3">6pm - 9pm</option>
                          <option value="3">9pm-2am</option>
                      </select>
                    </div>
                    <div className='appointment_container_form-inputs'>
                      {/* <label className='form-label'>LEAVE A MESSAGE</label> */}
                      <textarea name="message" rows="7" cols="47" placeholder=" Leave a message for us">
                    </textarea>
                    </div>

                    <div className='apppointemnt_btn'>
                    <BlueButton onClick={handleShow} type='submit' >
                        BOOK AN APPOINTMENT
                      </BlueButton>
                    </div>
                    
                </form>
              </div>
              <div className='appointment_container_booked'>
                  
              </div>
        
        
     
        </div>
    )
}

export default Appointment