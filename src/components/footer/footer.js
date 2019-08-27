import React from 'react';
import style from '../footer/footer.module.css'
import {Link} from 'react-router-dom';
const Footer = () =>{
    const CURR_YEAR = (new Date()).getFullYear()
    return (
        <div className={style['footer']}>
            <Link to='/' className={style['logo']}>
            <img alt='anime_logog' src='images/anime_logo_a.png'></img></Link>
            <div className={style['right']}>@Anime { CURR_YEAR } All rights reserved </div>
        </div>
    )
}

export default Footer;