import React, { useState } from 'react'
import "./Sign.css"
import {  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,} from 'firebase/auth';
import { auth } from '../Firebase';

function Sign() {


    const [email, setEmail]= useState("");
    const[username,setUserName]=useState("");
    const [password, setPassword]= useState("");

// this fun is gng to have user
/**it runs everytime if we click signup 
 * creating email password 
 * then signin with that
 * then updating wit that
 * then dispkaying that
 * if error to get some alert
*/

    const handleSignUp= (event) =>{
      event.preventDefault();
      createUserWithEmailAndPassword(auth,email,password).
      then((authUser)=>{
      signInWithEmailAndPassword(auth,email,password).
      then(updateProfile(auth.currentUser,{displayName:username}))
       })
      .catch(err=>{
        alert(err);
      })
    }
  return (
    <div className='signup'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="logo"/>
        
         <input onChange={e=>setEmail(e.target.value)} 
         type="email"
          placeholder="Email"
          value={email}/>

         <input onChange={e=>setUserName(e.target.value)}  
          type="text"
          placeholder="UserName"
          value={username}/>

         <input onChange={e=>setPassword(e.target.value)}
         type="password" placeholder="Password"
         value={password}/>

         <button onClick={handleSignUp}>Sign Up</button>



    </div>
  )
}

export default Sign