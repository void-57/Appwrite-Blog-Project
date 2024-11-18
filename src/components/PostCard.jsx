import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/configuration'
import '../App.css'

function PostCard({$id, title, featuredImage}){
  return (
    <Link to={`/post/${$id}`}>
        <div className='post-card w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl object-cover h-48 w-full'/>
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard