import React from 'react';

import SideNav from 'react-simple-sidenav';
import SideNavOpt from './sidenavopt'
const SideNavigation = (props) =>{
        
        return(
            <div>
                <SideNav
                showNav={props.showNav}
                onHideNav={props.onOpenHideNav}
                navStyle = {{ 
                            background: '#38363d',
                            maxWidth:'280px',
                            padding: '10px',
                            
                        }}
                        >
                 <SideNavOpt/>
                </SideNav>  
            </div>
        )
}

export default SideNavigation;