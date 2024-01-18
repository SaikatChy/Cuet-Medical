import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import mainRouter from './routes/MainRoute';
import { useEffect, useState } from 'react';
import UserContext from './Contexts/UserContext';
import { rootUrl } from './utils/rootUrl';
import axios from 'axios';


function App() {
  const router = createBrowserRouter(mainRouter)
  const [user,setUser]=useState(null);
  
  useEffect(()=>{
  
   axios.get(rootUrl+'user/login',{withCredentials:true})
  .then(({data})=>{
    console.log(data);
      if(data.status){
        setUser(data.data)
        localStorage.setItem('token',data.data.token)
      
        
      }
  })
  .catch(()=>setUser(null))
  },[])
  return (
    <UserContext.Provider value={{user,setUser}}>
       <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
    </UserContext.Provider>
  )
}

export default App;
