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
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
)
}

export default AllPosts