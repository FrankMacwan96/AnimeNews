import React,{Component} from 'react';
import axios from 'axios';
import {firebaseDB, firebaseloop, firebaseTeams, firebaseVideos} from '../../../firebase';
import style from '../../Articles/articles.module.css';
import Header from '../Videos/header';
import Iframe from 'react-iframe';
import VideosRelated from '../../widgets/VideosRelated/videosRelated'

class VideoArticles extends Component{
    
    state ={
        article:[],
        team:[],
        teams:[],
        related:[]
    }

    componentDidMount(){
       
        firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
        .then( (snapshot) => {
            let article = snapshot.val();

            firebaseTeams.orderByChild('id').equalTo(article.team).once('value')
            .then( (snapshot) => {
                const team = firebaseloop(snapshot)
                
                this.setState({
                    article,
                    team
                })
                this.getRelated();     
            })
        })
        
        this.getRelated();     
        // axios.get(`http://localhost:3005/videos?id=${this.props.match.params.id}`)
        // .then( response => {
            
        //     articles = response.data[0];
        //     axios.get(`http://localhost:3005/teams?id=${articles.team}`)
        //     .then( response => {
        //         teams = response.data[0];
                
        //         this.setState({
        //             article:articles,
        //             team:teams
        //         });
        //         this.getRelated();            
        //     })
            
        // })
        
    }
    getRelated = () =>{
        
         firebaseTeams.once('value').then((snapshot)=>{
             const teams = firebaseloop(snapshot);
                
             firebaseVideos.orderByChild("team").equalTo(this.state.article.team).limitToFirst(3).once("value").
             then((snapshot)=>{
                 const related = firebaseloop(snapshot);
                 console.log(related)
                 this.setState({
                     teams,
                     related
                 })
             })
         })
        
        // axios.get(`http://localhost:3005/teams`).then(
        //     response=>{
        //         let teams = response.data
                
        //         axios.get(`http://localhost:3005/videos?q=${this.state.team.city}&_limit=3`)
        //         .then(response=>{
                    
        //             this.setState({
        //                 teams,
        //                 related:response.data
        //             })

        //         })        
                
        //     })
    }
    render(){
        console.log(this.state)
        
        return(
            <div>
                  <Header team={this.state.team} data={this.state.article} />
                  <div className={style.videoWrapper}>
                    <h1>{this.state.article.title}</h1>
                    <Iframe url={`https://www.youtube.com/embed/${this.state.article.url}`} title='videoplayer' width='100%' height='350px'/>    
                </div>
                <VideosRelated data={this.state.related} teams={this.state.teams}/>
            </div>

             
        )
}
} 

export default VideoArticles; 