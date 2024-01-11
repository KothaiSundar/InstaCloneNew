import React from 'react'

import "./Sidenav.css"
import { Avatar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {auth} from "../Firebase"
import { loginUser,logoutUser } from '../featuress/UserSlice'
import { signOut } from 'firebase/auth'


function Sidenav() {
            const user=useSelector((state)=> state.data.user.user);
            const dispatch= useDispatch();
            
            const handleLogout=()=>
            {
                // to have to logout from redux using dispatch
                dispatch(logoutUser());//fun with empty paramerters
                //everytime this fun runs jus returning null to user
                signOut(auth);//signout from firebase
            }

  return (
    <div className='sidenav'>

        
                 <img className='sidenav_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="logo"/>

    

            
          <div className='sidenav_buttons'>

                <button className='sidenav_button'>
                        <i class="fa-solid fa-house"></i>
                         <span>Home</span>
                </button>
     

                
          
                <button className='sidenav_button'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                         <span>Search</span>
                </button>
         

 
                <button className='sidenav_button'>
                          <i class="fa-solid fa-house"></i>
                         <span>Explore</span>
                </button>
      

        
                <button className='sidenav_button'>
                        <i class="fa-solid fa-video"></i>
                         <span>Reels</span>
                </button>
        

          
        
                <button className='sidenav_button'>
                          <i class="fa-brands fa-facebook-messenger"></i>
                         <span>Messages</span>
                </button>
        


     
                <button className='sidenav_button'>
                         <i class="fa-regular fa-heart"></i>
                         <span>Notifications</span>
                </button>
     


        
                <button className='sidenav_button'>
                           <i class="fa-regular fa-square-plus"></i>
                         <span>Create</span>
                </button>
               {/* have to get user so using state and getting it */}
                <button className='sidenav_button'>
                         <Avatar>{user.username? user.username.charAt(0).toUpperCase():"A"}</Avatar>
                         <span>
                          {
                          user.username
                          }
                          </span>
                          <button onClick={handleLogout} className='logout_button'>Log out</button>
                </button>

{/* everytime we click logout ,we have to logout the
user from firebase and also it will remove user from redux state
 */}


                        
            </div>

                <div className='sidenav_more'>

                      <button className='sidenav_button'>
                             <i class="fa-brands fa-threads"></i>
                              <span>Threads</span>
                      </button>

                   
                        <button className='sidenav_button'>
                              <i class="fa-solid fa-bars"></i>
                              <span>More</span>
                         </button>
                   
        
                </div>
       


    </div>





  )
}

export default Sidenav

// sidenav_button is   side_button
//