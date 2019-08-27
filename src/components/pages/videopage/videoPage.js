import React from 'react';
import VideosList from '../../widgets/videosList'

const VideoPage = () =>{

    return(
        <VideosList type="card" title={false} loadmore={false} last={true} 
                        start={0} amount={9}></VideosList>    
    )
}

export default VideoPage;