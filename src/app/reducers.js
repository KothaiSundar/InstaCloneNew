import { combineReducers } from "redux";

import { userSlice } from "../featuress/UserSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});

//reducers to save infor about users 
//storing slice in reducers