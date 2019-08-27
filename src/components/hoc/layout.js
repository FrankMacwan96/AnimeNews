import React , { Component } from 'react';
import styles from './Layout.module.css';

import Header from '../../components/Header/header'
import Footer from '../../components/footer/footer'
class Layout extends Component {

state ={
    showNav:false
}

toggleSidenav = () =>{
    this.setState({
        showNav:!this.state.showNav
    })
}

render (){
    return (
        <div className={styles['body']}>
            <Header
             showNav={this.state.showNav}
             onOpenHideNav={()=>this.toggleSidenav()}
             //onOpenNav={()=>this.toggleSidenav()}
             />
            {this.props.children }
            <Footer/>
        </div>
    )
}
}

export default Layout;