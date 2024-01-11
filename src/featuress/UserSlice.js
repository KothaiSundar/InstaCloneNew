//here is main part of slice
//store inital state or slice
//insert fun to interact with state

import {createSlice} from "@reduxjs/toolkit";

const initialState={

    user:null,
    isLoading:true
}
//by default user is null
//isloading is used to wherather user is laoding or not
//by defaut setting it to true

export const userSlice=createSlice(
    {
        name:"user",
        initialState,
        reducers:{
            loginUser:(state,action)=>{
                state.user=action.payload;
            },
            logoutUser:(state)=>{
                state.user=null;
            },
            setLoading:(state,action)=>{
                state.isLoading=action.payload;
            },
        },

    }
);
export const {loginUser, logoutUser,setLoading}= userSlice.actions;

/** 
 * CreateSlice is fun...
   obj containing inital state,reducers obj
   continaint loginUser state action in that to get user from state

   payload 
   everty time we run this fun, loginuser we can put some info
   inside this fun i will pass in the state of user
   we need payload to put inside user


   logout user...state is null here...because everytime we logout 
   we put null here
*/