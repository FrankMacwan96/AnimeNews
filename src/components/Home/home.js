import React from 'react';
import Slider from '../widgets/slider';
import Newslist from '../widgets/newslist' ;
import VideosList from '../widgets/videosList';

const Home = () =>{
    return(
        <div>      
            <Slider type='featured' settings={{dots:true}}/>       
            <Newslist type='card' start={3} amount={3} />
            <VideosList type="card" title={true} loadmore={true} last={false}
                        start={0} amount={3}></VideosList> 
        </div>
    )
}

export default Home;