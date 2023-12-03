import React from 'react'
import './Signup.css'
import { useState } from 'react'
import { element } from 'prop-types';
import SignUpdata from '../SignUpData/SignUpdata';

const Signup = () => {
    const[fullname,SetFullName]=useState('');
    const[email,SetEmail]=useState('');
    const[tel,setTelNumber]=useState('');
    const[password,SetPassWord]=useState('');
    const[confirm_pass,SetConfirmPassword]=useState('');
    const[data,SignupData]=useState([]);

    const SaveData =()=>{
        SignupData([...data,{fullname,email,tel,password,confirm_pass}]);
        SetFullName('');
        SetEmail('');
        setTelNumber('');
        SetPassWord('');
        SetConfirmPassword('');
    }
    const removeData =(i)=>{
        let arr = data;
        arr.splice(i,1);
        SignupData([...arr]);
    }

  return (
    <div className='main_wrapper_signup'>
        <div className='signup_container'>
        <div className='signup_wrapper'>
            <div className='signup_form'>
            <form action="">
                <h2>Sign Up</h2>
                <input type="text" id="fullname" name="fullname" placeholder='Full Name'value={fullname} onChange={(e)=>SetFullName(e.target.value)
                }required/><br/><br/>
                <input type="email" id="email" name="email" placeholder='Email'value={email} onChange={(e)=>SetEmail(e.target.value)
                }required/><br/><br/>
                <input type="tel" id="mobile" name="mobile" placeholder='Mobile Number' value={tel}onChange={(e)=>setTelNumber(e.target.value)
                }required/><br/><br/>
                <input type="password" id="signpassword" name="password" placeholder='Password'value={password}onChange={(e)=>SetPassWord(e.target.value)
                } required/><br/><br/>
                <input type="password" id="confirm_password" name="confirm_password" value={confirm_pass}onChange={(e)=>SetConfirmPassword(e.target.value)
                } placeholder='Confirm Password' required/><br/><br/>
                <input type="submit" value="Sign Up Now" className='submit_form'onClick={SaveData}/>
            </form>
            </div>
            {/* You can add other elements or sections here */}
        </div>
        </div>
        <div>
      <table>
        <tr>
            <th>Fullname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
        </tr>
        {
        data.map((element,index)=>{
            return(
                <SignUpdata
                id={index} 
                name={element.fullname}
                email={element.email}
                telephone={element.tel}
                password={element.password}
                />
            )    
        })
        }
        {
            data.map((ele,i) =>{
                return (
                    <tr className='get_data' key={i}>
                        <td>{ele.fullname}</td>
                        <td>{ele.email}</td>
                        <td>{ele.tel}</td>
                        <td>{ele.password}</td>
                        <td><button onClick={()=>removeData(i)}>Delete</button></td>
                    </tr>
              )
            })
        }
      </table>
      </div>
    </div>
  )
}

export default Signup