import React from 'react';
import YouTube from 'react-youtube';
 
const YoutubeVideo = (props) => {

  const opts = {
    height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
  }



  
  

  return (
        <div  className='col s12 m8 l3'>
          <YouTube
            videoId={props.movieId} 
            opts = {opts} 
            onReady = {props.videoOnReady}
          />
          
        </div>

  )


}





export default YoutubeVideo;