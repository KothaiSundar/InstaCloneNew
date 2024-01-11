import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';

function Post({user, postImage, likes, timespamp}) {
  return( <div className='post'>

          <div className='post_header'>

            <div className='post_headerAuthor'>
                    <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                     {user}•
                    <span>{timespamp}</span>
            </div>

            <i class="fa-solid fa-ellipsis"></i>
        </div>




          <div className='post_image'>
            <img src={postImage} alt=""/>

          </div>

          <div className='post_footer'>
                <div className='post_footericons'>

                    <div className='post_iconMain'>

                        <div className='postIcon'>
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment"></i>
                            <i class="fa-regular fa-paper-plane"></i>
                        </div>

                    </div>

                    <div className='post_iconSave'>

                                <div className='postIcon'>
                                        <i class="fa-regular fa-bookmark"></i>
                                </div>
                    </div>
                    
                </div>
               Liked by {likes} people
          </div>



  </div>
  );
}

export default Post