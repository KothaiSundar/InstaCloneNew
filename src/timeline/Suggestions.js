import React from 'react'
import "./Suggestions.css"
import { Avatar } from '@mui/material';
function Suggestions() {
  return (
    
//can do map for suggestions also

    <div className='suggestions'>

              <div className='suggestions_title'>
                Suggested for you
              </div>

        <div className='suggestions_usernames'>


        <div className='suggestion_username'>

                    <div className='username_left'>

                      <span className='avatar'>

                      <Avatar>
                              K
                    </Avatar>

                      </span>
                                


                     <div className='username_info'>
                                <span className='username'>kothai_</span>
                              <span className='relation'>New to Instagram</span>
                      </div>

                    </div>

                  <button className='follow_button'>
                              Follow
                  </button>


        </div>



        <div className='suggestion_username'>
             <div className='username_left'>

                    <span className='avatar'>

                    <Avatar>
                            K
                  </Avatar>

                    </span>
                        


                        <div className='username_info'>
                            <span className='username'>kothai_</span>
                           <span className='relation'>New to Instagram</span>
                        </div>
             </div>
             <button className='follow_button'>
                         Follow
             </button>
        </div>


        <div className='suggestion_username'>
             <div className='username_left'>

                              <span className='avatar'>

                              <Avatar>
                                      K
                            </Avatar>

                              </span>
                                        


                        <div className='username_info'>
                            <span className='username'>kothai_</span>
                           <span className='relation'>New to Instagram</span>
                        </div>
             </div>
             <button className='follow_button'>
                         Follow
             </button>
        </div>


      </div>
    </div>
  )
}

export default Suggestions

