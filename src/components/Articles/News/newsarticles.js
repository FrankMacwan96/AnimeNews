import React, { Component } from 'react';
import axios from 'axios';
//import { URL } from '../../../config';

import styles from '../articles.module.css';
import Header from './header';

class NewsArticles extends Component {

    state = {
        article:[],
        team:[]
        
    }

    componentDidMount(){
        let articles = null;
        let teams = null;
        axios.get(`http://localhost:3005/articles?id=${this.props.match.params.id}`)
        .then( response => {
            
            articles = response.data[0];
            axios.get(`http://localhost:3005/teams?id=${articles.team}`)
            .then( response => {
                teams = response.data[0];
                
                this.setState({
                    article:articles,
                    team:teams
                })
                
            })
            
        })
        
    }

    
    render(){
        const article = this.state.article;
        const team = this.state.team;
        console.log(article)
        return(
            <div className={styles.articleWrapper}>
                <Header
                    teamData={team}
                    date={article.date}
                    author={article.author}
                />
                <div className={styles.articleBody}>
                    <h1>{article.title}</h1>
                    <div className={styles.articleImage}
                        style={{
                            background:`url('/images/articles/${article.image}')`
                        }}
                    ></div>
                    <div className={styles.articleText}>
                        {article.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsArticles;