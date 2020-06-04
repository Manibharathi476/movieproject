import React from 'react';
import { Label } from 'react-bootstrap';
import YoutubeVideo from './YoutubeVideo';

const MovieInfo = (props) => {
    return(
        <div className='container'   onLoad={props.getMovieId()}>
            <div className='row' onClick={props.closeMovieInfo()} style={{cursor: "pointer", paddingTop: 50}}>
                <i className='fas fa-arrow-left'></i>
                <span style={{marginLeft: 10}}>Go back</span>
            </div>
            <div className='row'>
                <div className='col s12 m4'>
                    { props.currentMovie.poster_path == null ? <img src={`https://img.icons8.com/cute-clipart/64/000000/no-image.png`} alt="Card image" style={{width: "100%", height: 360}}/> : 
                    <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card-image" style={{width:"100%",height: 360 }}/>}
                </div>
                <div className='col s12 m8'>
                    <div className='info-container'>
                        <p><b>Name: </b>{props.currentMovie.title}</p>
                        <p><b>Release date: </b>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0,4)).join("/")}</p>
                        <p><b>Overview: </b>{props.currentMovie.overview}</p>
                        
                        <p><b>Popularity: </b>{props.currentMovie.popularity}</p>
                    </div>    
                </div>    
            </div>
            
                <div className="row">
                {
                            props.videos.map((_video, i ) => {
                                return (
                                <YoutubeVideo key={i} movieId={_video.key} videoOnReady={props.videoOnReady}/>
                                )
                            })
                    }

                </div>
                
                
                  


            
             
        </div>
        
    )
}

export default MovieInfo;