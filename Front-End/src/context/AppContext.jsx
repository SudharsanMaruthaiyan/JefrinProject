import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { toast } from "react-toastify";

export const AppContext = createContext()
const AppContextProvider = (props) => {
    // const [worker, setWorker] = useState([])
    const [userData, setUserData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token , setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false )

    const loadUserProfileData = async ()=>{
      try {
          const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{token}})

          if(data.success){
              setUserData(data.userData)
          }
          else{
              console.log(error)
              toast.error("load er")
          }
        } catch (error) {
            console.log(error)
            toast.error("fetch error") 
        }
    }

    const value = {
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfileData
    }

    useEffect(()=>{
      if (token) {
          loadUserProfileData()
      }else{
          setUserData(false)
      }
    },[token])
  return (
    <AppContext.Provider value={value}> 
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider