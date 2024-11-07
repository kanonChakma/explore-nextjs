"use client"

import PostList from "@/components/PostList/PostList"
import { useEffect, useState } from "react"

type Post = {
    userId?: number,
    id?: number,
    title?: string,
    body?: string,
}

const Post = () => {
    
    const [posts, setposts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    
    useEffect(()=>{
        const fetchPosts = async() => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                const postData = await res.json()
                setposts(postData)
                console.log(postData)
            } catch (error) {
                setError("Failed to fetch error!!")
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    },[])
  
  if(loading) return <div>Loading.......</div>
  if(error) return <div>{error}</div>
  
  return (
    <div className="container mx-auto">
      <h1>Welcome posts</h1>
     <div className="flex flex-wrap justify-between gap-1">
         {
            posts.map((post: Post) => (
                <PostList key={post.id} post ={post}/>
            ))
         }
     </div>
    </div>
  )
}

export default Post
