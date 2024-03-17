import React, { useContext } from 'react'
import { AppContex } from '../contex/AppContex'
import Spinner from './Spinner'


function Blogs() {
    // consuming
    const{posts,loading}=useContext(AppContex)
    
  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[90px] justify-center items-center h-screen mb-[300px]'>
    {
        loading ?(<Spinner/>):
        (posts.length===0?
        (<div>
            <h1>No Post Found</h1>
        </div>):(posts.map((post)=>(
            <div key={post.id}>
             <p className='font-bold text-lg '>{post.title}</p>
             <p className='text-sm mt-[4px]'>
                BY <span className='italic '>{post.author}</span> On <span className='underline font-semibold'>{post.category}</span>
             </p>
             <p className='text-sm mt-[4px]'>Posted On {post.date}</p>
             <p className='text-md mt-[14px]'>{post.content}</p>
             <div className='flex gap-x-3'>
                {post.tags.map((tag,index)=>{
                  return <span key={index} className='text-blue-700  underline font-bold mt-[5px]'>{`#${tag}`}</span> 
})}
             </div>
            </div>
           
        )))
        )
    }
    </div>
  )
}

export default Blogs
