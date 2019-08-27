import React from 'react';

import Slider from '../../widgets/slider';
import Newslist from '../../widgets/newslist'
const NewsPage = () => {
    return(
        <div>
            <Slider type='featured' settings={{dots:true}}/>
            <Newslist type='card' start={2} amount={9}/> 
        </div>
    )
}

export default NewsPage;