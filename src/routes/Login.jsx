import { useState } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '@/styles/Login.module.css';
import Header from '@/components/Header';
const Login = () => {
  const location = useLocation();
  const from = location.state?.pathname || '/';
  console.log(location);
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const {login} = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userName) return;
    login(userName);
    setUserName('');
    // navigate('/');
    navigate(from , {replace: true});
  }

  return (
    <div>
      <Header>
        <h1>Login</h1>
      </Header>
      <h1>Login</h1>
      <div className={styles.formWrapper}>
        <form 
          className={styles.form} 
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            placeholder='username'
            value={userName}
            onChange={(evt) => setUserName(evt.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;