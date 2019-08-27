import React from 'react';
import styles from '../videosList.module.css';

import VideosListTemplate from '../videosListTemplate';

const VideosRelated = (props) => (
    <div className={styles.relatedWrapper}>
        <VideosListTemplate
            data={props.data}
            teams={props.teams}
        />
    </div>
)

export default VideosRelated;