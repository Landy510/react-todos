import React, {useState, useRef, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
const links = [
  {path: '/', text: 'Home'},
  {path: 'about', text: 'About'},
  {path: 'profile', text: 'Profile'},
  {path: 'login', text: 'Login'}
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (evt) => {
      if(navbarOpen && ref.current && !ref.current.contains(evt.target)) {
        setNavbarOpen(false);
      }
    }

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  }, [navbarOpen])


  const {user, logout} = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  return (
    <>  
      <nav 
        className="navbar" 
        ref={ref}
      >
        <button 
          className='toggle'
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? 
            (
              <MdClose style={{ width: '32px', height: '32px' }} />
            ):
            (
              <FiMenu 
                style={{
                  width: '32px',
                  height: '32px'
                }}
              />
            )
          }
        </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          {
            links.map(link => {
              return (
                <React.Fragment key={link.text}>
                  {
                    (() => {
                      if(link.path === 'login') {
                        return (
                          !user && (
                            <li>
                              <NavLink 
                                to={link.path}
                                onClick={() => setNavbarOpen(false)}
                              >{link.text}</NavLink>
                            </li>
                          )
                        )
                      }
                      else if(link.path === 'profile') {
                        return (
                          user && (
                            <li>
                              <NavLink 
                                to={link.path}
                                onClick={() => setNavbarOpen(false)}
                              >{link.text}</NavLink>
                            </li>
                          )
                        )
                      }
                      return (
                        <li>
                          <NavLink 
                            to={link.path}
                            onClick={() => setNavbarOpen(false)}
                          >{link.text}</NavLink>
                        </li>
                      )
                    })()
                  }
                </React.Fragment>
              )
            })
          }
          {
            !user && (
              <li className='log-in'>
                <span>Log in to edit to-dos</span>
              </li>
            )
          }
        </ul>
      </nav>
      {
        user && (
          <div className="logout">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )
      }
    </>
  )
}

export default Navbar;