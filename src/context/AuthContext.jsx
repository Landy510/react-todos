import { 
  useState, 
  useContext, 
  useEffect,
  createContext
} from 'react';

const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(getUserName());
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  function getUserName() {
    const temp = localStorage.getItem('userName');
    const saveUserName = JSON.parse(temp);
    return saveUserName || '';
  }

  useEffect(() => {
    const temp = JSON.stringify(user);
    localStorage.setItem('userName', temp);
  }, [user])

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuthContext = () => useContext(AuthContext);