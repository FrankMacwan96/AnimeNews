import React from 'react';


import PostData from '../Elements/postData';

const Header = (props) => {


    const postData = ( date, author ) => (
        <PostData data={{date,author}}/>
    )
    

    return(
        <div>
            
            {postData(props.date, props.author)}
        </div>
    )
}

export default Header;