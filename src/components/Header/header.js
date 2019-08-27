import React from 'react';
import style from './Header.module.css'
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome'
import SideNav from './sidenav/sidenav'
const Header = (props) => {

    const navBars = () =>(
        <div className={style.bars}>
            <FontAwesome
                onClick={props.onOpenHideNav}
                name='bars'
                style={{
                    color: 'white',
                    padding:'15px',
                    cursor:'pointer'
                }}
            />
        </div>
    )
    const logo = () =>(
        <Link to='/' className={style.logo}>
            <img alt='anime logo' src="/images/anime_logo_a.png"/>
         </Link>
    )

    return (
        <header className={style['header']}>
            <SideNav {...props}/>
            <div className={style['headerOpt']}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
    
}

export default Header;
