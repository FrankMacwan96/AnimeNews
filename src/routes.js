import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home/home'
import Layout from './components/hoc/layout'
import NewsArticles from './components/Articles/News/newsarticles'
import VideoArticle from './components/Articles/Videos/videos'
import NewsPage from './components/pages/newpage/newsPage'
import VideoPage from './components/pages/videopage/videoPage'
// import ReactDOM from 'react-dom';


class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path='/' exact component = {Home} />
                    <Route path='/News/' component = {NewsPage}/>
                    <Route path='/Video/' component = {VideoPage}/>
                    <Route path="/articles/:id" exact component={NewsArticles}/>
                    <Route path='/videos/:id' exact component={VideoArticle}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;