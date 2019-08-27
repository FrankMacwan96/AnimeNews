import React,{Component} from 'react';
import axios from 'axios';
import style from './videolist.module.css';
import Button from "./button";
import VideolistInfo from './videolisttemplate'
class Videolist extends Component{
    state = {
        teams:[],
        video:[],
        start: this.props.start,
        amount:this.props.amount,
        end:this.props.start+this.props.amount,
        loadmore:this.props.loadmore,
        type:this.props.type
    }
    
    UNSAFE_componentWillMount(){
        this.request(this.state.start,this.state.end)
    }
    renderTitle=()=>{
        return this.props.title ?
            <h3><strong>Anime</strong> Video</h3>
            :null
    }
    renderButton=()=>{
        return this.props.loadmore?
            'loadmore': <Button type='linkTo' cta="Load More Video" linkTo='/videos/'></Button>
    }
    renderVideos=()=>{
        let template=null;

        switch(this.props.type){
            case('card'):
                template =  <VideolistInfo data={this.state.video} teams={this.state.teams} ></VideolistInfo>
                break;
            default:
                template = null;
            
            }
            return template;
    }
    request = (start,end) =>{
            if(this.state.team.length<1){
                axios.get(` http://localhost:3005/teams?`).then(
                    response=>{
                        this.setState({
                            teams:[...this.state.team,...response.data]
                        })
                    }
                )
            }
            axios.get(` http://localhost:3005/videos?_start=${this.state.start}&_end='${this.state.end}`).then(
                response=>{
                    this.setState({
                       videos:[...this.state.videos,...response.data] 
                    }
                    )
                }
            )    
    }

    render(){
        
        return(
        
        <div className={style.videolist_wrapper}>               
            {this.renderTitle()}
            {this.renderVideos()}
            {this.renderButton()}
        </div>
        )
    }
    
}


export default Videolist;  