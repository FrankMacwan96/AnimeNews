import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './cardInfo.css'

const CardInfo = (props) =>{

    


    return(
        <div className={styles.cardNfo}>
            <span className={styles.date}>
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    )
}

export default CardInfo;