import React from 'react';
import styles from './videosList.module.css';

import { Link } from 'react-router-dom';
//import CardInfo from '../CardInfo/cardInfo';

const VideosListTemplate = (props) => {
    return props.data.map( (item,i) => (
        <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videoListItem_wrapper}>
                <div className={styles.left}
                    style={{
                        background:`url(/images/videos/${item.image})`
                    }}>
                </div>
                <div className={styles.right}>   
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ))
}

export default VideosListTemplate;