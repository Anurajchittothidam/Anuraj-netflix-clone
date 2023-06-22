import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios';
import { api_key, imageUrl } from '../../constants';
import YouTube from 'react-youtube';


function RowPost(props) {
    const [movies,setMovies] =useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data.results)
        setMovies(response.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:0
        }
    }
    const [Id,setId]=useState("")
    const handleMovie =(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                setId(response.data.results[0]) 
            }else{
                console.log('No video found')
            }
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">  
        {movies.map((obj)=>(
        <img onClick={(()=>handleMovie(obj.id))} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        ))}
        </div>
     { Id &&  <YouTube  opts={opts} videoId={Id.key} /> }
    </div>
  )
}

export default RowPost