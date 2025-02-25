import React, {useState, useEffect} from 'react'
import { Container, PostCard ,Loading } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
      setLoading(false)
    })
  return !loading ? (
    <div className='w-full py-8'>
        <Container>
          <div className='grid place-items-center'>
            {posts.map((post) => (
              <div key={post.$id} className='p-2 w-[90%] text-center'><br />
              <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  ) : (<Loading />)
}

export default AllPosts