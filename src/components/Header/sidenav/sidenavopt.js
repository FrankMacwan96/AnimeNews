import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import style from './sideNav.module.css'


const SideNavOpt = () =>{

    const items =[
        {
            text : 'Home',
            type : style.content,
            icon: 'home',
            link: '/'
        },
        {
            text : 'News',
            type : style.content,
            icon: 'rss',
            link: '/News'
        },
        {
            text : 'Video',
            type : style.content,
            icon: 'film',
            link: '/Video'
        },
        {
            text : 'Sign-up',
            type : style.content,
            icon: 'sign-in',
            link: '/signin'
        },
    ]

    const ShowItems = () =>{
        return items.map((item,i)=>{
            return(
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
               </div>
            )
        })
    }
    return(
        <div>
         {ShowItems()}
        </div>
    )
    
}

export default SideNavOpt;