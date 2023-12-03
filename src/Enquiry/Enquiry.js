import React from 'react'
import './Enquiry.css'
import { useState } from 'react'


const Enquiry = () => {
    const[enqNewInfo,setenqNew]=useState({
    });
    const[enqData,GetEnqData]=useState([]);
    const GetAllData = () =>{
      //  GetEnqData([...enqData,enqNewInfo]);
      //  setenqNew(enqNewInfo);
       console.log(enqNewInfo);
    }
  return (
    <div className='Enquiry_main_wrapper'>
       <div className='Enquiry_container'>
            <h1 className='Enquiry_title'>Have Some Questions?</h1>
            <div className='Enquiry_wrapper'>
                <div className='Enquiry_mail_box'>
                </div>
                <div className='Enquiry_data'>
<form>
                        <input type='text' name='fullname' value={enqNewInfo.fullname} placeholder='Enter Name' onChange={(event)=>setenqNew({...enqNewInfo,name:event.target.value})}required/>
                        
                        <input type="email" name='email' id="enqemail"  placeholder="What's Your Email?"value={enqNewInfo.email}onChange={(event)=>setenqNew({...enqNewInfo,email:event.target.value})}required/><br/><br/>

                        <input type="tel" name='enqmobile' id="enqmobile"  placeholder='Mobile Number' value={enqNewInfo.tel}onChange={(event)=>setenqNew({...enqNewInfo,tel:event.target.value})}required/><br/><br/>

                        <textarea name='question' value={enqNewInfo.question} onChange={(event)=>setenqNew({...enqNewInfo,question:event.target.value})}placeholder='Your Questions..'></textarea>
                        <input type="submit" value="Send Message" className='SendEnquiry'onClick={GetAllData}/>
                        </form>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Enquiry