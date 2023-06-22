import axios from '../../axios'
import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { api_key,imageUrl } from '../../constants'
import './Banner.css'

function Banner() {
    const [state,setState] =useState([])
    useEffect(()=>{
        axios.get(`/trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
      
        setState(response.data.results[0]) 
        })
    },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${state?imageUrl+state.backdrop_path:""})`}}>
        
        <div className="content">
            <h1 className="title">
                {state.title}
            </h1>
            <div className="banner-buttons">
                <button className="btn">Play</button>
                <button className="btn">My list</button>
            </div>
            <h1 className='description'>{state.overview}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}
export default Banner