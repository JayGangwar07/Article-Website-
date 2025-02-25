import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js"
import {login, logout} from "./store/authSlice.js"
import { Footer, Header,Logo ,
Container,LogoutBtn,Loading,Signup,PostCard,AddPost,AllPosts,EditPost,Home,PageLogin,Post,PageSignup }
from
'./components/index.js'
import { Outlet } from 'react-router'

function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(() => {
authService.getCurrentUser()
.then((userData) => {
if (userData) {
dispatch(login({userData}))
} else {
dispatch(logout())
}
})
.finally(() => setLoading(false))
}, [])

return !loading ?
<div className='min-h-screen flex flex-wrap content-between bg-gray-800'>
  <div className='w-full block'>
    <Header />
    <main>
     <Outlet />
    </main>
    <Footer />
    
    
  </div>

</div>
: (<Loading styling="h-screen w-screen" />)

}

export default App