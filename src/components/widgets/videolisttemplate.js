import React from 'react';
import style from './videolist.module.css'
import { Link } from 'react-router-dom';

const VideolistInfo = (props) =>{
    return props.data.map( (item,i) =>{
        <Link to='/videos/' key={i}>
            <div className={style.videolistitem}>
                <div className={style.left}>
                style={{
                    backgorund:`url(/image/videos/${item.image})`
                }}
                </div>
                <div className={style.right}>
                    <h2>{item.title}</h2>
                </div>
        </div>
        </Link>
    })              
        
}

export default VideolistInfo;