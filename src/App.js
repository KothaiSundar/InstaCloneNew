import React, { useEffect } from 'react'
import Homepage from './Homepage'
import Authentication from "./authentication/Authentication"
import "./AppInsta.css"
import { auth } from './Firebase';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, setLoading } from './featuress/UserSlice';


function App() 
{const dispatch=useDispatch();
    useEffect(()=>{
        auth.onAuthStateChanged(authUser=>{
            if(authUser)
            
            { dispatch(loginUser({
                uid:authUser.uid,
                username:authUser.displayName,
                email:authUser.email,
              }));
      
              dispatch(setLoading(false));
      
      
        }
        else{
          //if not a user then we can jus console log it is not user
          dispatch(setLoading(false));
          console.log("User is not logged in");
        }
      
      
      })
      },[])
    
      const user=useSelector((state)=> state.data.user.user);
    const isLoading=useSelector((state)=>state.data.user.isLoading);
    return (
        <div className="app">
          {isLoading ? (
            <div class="loader-container">
              <div class="loader"></div>
            </div>
          ) : (
            <>{user ? <Homepage/>: <Authentication/>}</>
          )}
        </div>
      );
      }
      export default App;