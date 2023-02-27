import { Routes, Route } from 'react-router-dom';
import TodosLogic from '@/components/TodosLogic';
import Home from '@/routes/Home';
import About from '@/routes/About';
import Login from '@/routes/Login';
import Profile from '@/routes/Profile';
import NoMatch from '@/routes/NoMatch';
import Layout from '@/components/Layout';
import SinglePage from '@/routes/SinglePage';
import ProtectedRoute from '@/components/ProtectedRoute';

const TodoApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}>
          <Route path=':slug' element={<SinglePage />}></Route>
        </Route>
        <Route path='login' element={<Login />}></Route>
        <Route 
          path='profile' 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>    
          }
        ></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Route>
    </Routes>
  )
}

export default TodoApp;