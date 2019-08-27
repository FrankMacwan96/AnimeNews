import React from 'react';
import Slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import style from './slider.module.css'

const SliderContent = (props) => {
    let template = null;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...props.settings
    }
    
    switch(props.type){
        case('featured'):
            template = props.data.map((item,i)=>{
               return (<div key={i}>
                    <div className={style.featured_item}>
                    <div className={style.featured_images}
                        style ={{background:`url(../images/articles/${item.image})`}}></div>          
                    </div>
                    <Link to={`/articles/${item.id}`}>
                        <div className={style.featured_title}>
                        {item.title}
                        </div>
                    </Link>
                </div>
)            })
            break;
        default:
            template = null;
    }
    
    return (
    
        <Slick {...settings}>
            {template}
        </Slick>
      
    )
        
    
}

export default SliderContent;