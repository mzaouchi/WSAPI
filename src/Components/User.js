import axios from 'axios';
import React, { useEffect, useState } from 'react';

function User({match}) {

    const {id} = match.params

    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
        
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))
    },[])

  return( 
  
  <div>
      {
          loading ? 
          <h1>Mazel</h1>
          :
          <div>
            <h1>{user.id}</h1>
            <h2>{user.email}</h2>
         </div>  
      }
    
      
  </div>)
}

export default User;
