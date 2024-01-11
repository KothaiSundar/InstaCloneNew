// import React from 'react'
import React,{useState} from "react";
import "./Timeline.css"
import  Suggestions from "./Suggestions";
import Post from "./posts/Post";


/** 
 * not done
 * minimixe max not done
 * in sidenav if we give bg color for sidenav...it is not getting fixed...
 * in sidenav hover if we give it is coming too long
 * 
*/





function Timeline() {

//putting different user name likes images
       const [posts,setPosts]= useState([
        {
               user:"kothai_",
               postImage:"https://i.pinimg.com/originals/19/6e/71/196e71b3d7d2508308d6f1e22de8728f.jpg",
               likes:20,
               timespamp:"2d",
        },
        {
          user:"amuda_",
          postImage:"https://i.pinimg.com/736x/66/81/30/668130024e151dfb82daef4d9751f52d.jpg",
          likes:30,
          timespamp:"1d",

        },

        {
          user:"sundar_",
          postImage:"https://i.pinimg.com/1200x/66/41/53/66415315048113072cbcd6a72eb2ee52.jpg",
          likes:25,
          timespamp:"12hr",

        }
       ]
      )
  




  return (
    <div className='timeline'>

          <div className='.timeline_left'>
               <div className="timeline_posts">

                {posts.map((posts)=>(
                          <Post 
                          user= {posts.user} 
                          postImage={posts.postImage} 
                          likes={posts.likes} 
                          timespamp={posts.timespamp}
                          />
                     
                ))}
                     

               </div>
          </div>

          <div className='.timeline_right'>
              <Suggestions/>
          </div>

    </div>

  )
}

export default Timeline