import React, { useEffect, useState } from 'react'
import service from '../../appwrite/configuration'
import {Container,PostCard} from '..'


function AllPosts() {
    const [posts,setPosts] =useState([])

    useEffect(()=>{

    },[])

    service.getAllPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className="w-full py-8">

   <Container>
    <div className="flex flrx-wrap">

        {
            posts.map((post)=>(
                <div className="p-2 w-1/4" key={post.$id}>
                    <PostCard {...post}/>
                </div>
            ))
        }
    </div>
   </Container>

    </div>
  )
}

export default AllPosts