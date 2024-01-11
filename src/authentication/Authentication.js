import React, { useState } from 'react';
import "./Authentication.css";

import Login from "./Login";


import Sign from "./Sign"
import { act } from 'react-dom/test-utils';

function Authentication() {
      const [active, setActive] = useState("login");


      const handleChange = ()=>{
            setActive( active === "login" ? "sign" : "login")
      }

  return (
    <div className='authentication'>
        
            <div className='auth_left'>
                  <img src="https://i.imgur.com/P3Vm1Kq.png" alt="instaLogin Image"/>
            </div>

            <div className='auth_right'>
                  {
                        active === "login" ? <Login/> : <Sign/>
                  }
                    

                    <div className='auth_more'>


                    <span>
                        {active === "login"? 

                        (<>
                         Dont have an account?<button onClick={handleChange}>Sign up</button>{" "}
                         </>
                         ) :

                         (<>
                          have an account?<button  onClick={handleChange}>Log In</button></>
                          )
                        }


                       
                                 
                    </span>
                      </div>
                        

            </div>

      </div>
  )
}

export default Authentication