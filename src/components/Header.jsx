import React from 'react'
import {Container, Logo, LogoutBtn,Button } from './index'
import { Link } from 'react-router'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

/*
<button
  onClick={() => navigate(item.slug)}
  className='inline-block px-8 mx-1 py-2 rounded-full'
  >{item.name}</button>
*/


  return (
    <header className='py-3 shadow bg-gray-700 text-white'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'
              styling="rounded-full w-10"
              />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
              
               <Button 
               children={item.name}
               onClick={() => navigate(item.slug)}
               className='inline-block rounded-full mx-1'
               /> 
                
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header