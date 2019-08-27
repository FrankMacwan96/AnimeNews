import React from 'react';
import {Link} from 'react-router-dom';

import styles from './button.module.css';

const Button = (props) =>{
    let template = null;

    switch(props.type){
        case 'loadmore':
            template = (
                <div className={styles.button_blue}
                    onClick={props.loadMore}                   
                >
                    {props.cta}
                </div>

            )
            break;
        case 'linkTo':
        template = (
            <Link to={props.linkTo} className={styles.button_blue}>
                {props.cta} 
            </Link>

        )
        break;
    
        default:
           template = null;
    }
    return template;
}

export default Button;