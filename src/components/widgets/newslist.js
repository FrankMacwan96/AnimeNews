import React,{Component} from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import {firebaseArticles, firebaseloop, firebaseTeams} from '../../firebase';
import style from './newslist.module.css';
import Button from './button';
import CardInfo from '../widgets/CardInfo/cardInfo';
class Newslist extends Component {

    state = {
        items:[],
        start:this.props.start,
        amount: this.props.amount,
        end:this.props.start+this.props.amount
    }

    componentDidMount(){
                    this.request(this.state.start,this.state.end)
    }

    loadmore = () =>{
        let end = this.state.end + this.state.amount
        this.request(this.state.end,end)
    }

    request = (start,end) => {

     firebaseTeams.once('value').then((snapshot)=>{
         const teams = firebaseloop(snapshot)
         this.setState({
             teams
         })
     })

     firebaseArticles.orderByChild('id').startAt(start).endAt(end).once('value')
      .then((snapshot) =>{
          const articles = firebaseloop(snapshot)
        this.setState({
            items:[...this.state.items,...articles]
        })
    }
    )
    }

     renderNews = (type) =>{
         let template = null;
         switch(type){
             case('card'):
                template=this.state.items.map((item,i)=>(
                    <CSSTransition
                        classNames={{
                            enter:style.newslist_wrapper,
                            enterActive:style.newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                    
                    <div key={i} className={style.newslist_item}>
                        <Link to={`/articles/${item.id}`} >   
                        
                            <CardInfo className={style.right} date={item.date}/>
                            <h2>{item.title}</h2>     
                           
                        </Link>
                    </div>
                    </CSSTransition>
                ))
                break;
             default:
                template=null;
         }
         return template;
     }
    render(){
        return(
            <div>
                <TransitionGroup
                component="div"
                className='list'>
                {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                type="loadmore"
                loadMore={()=>this.loadmore()}
                cta="Load more News"
                >
                </Button>
                
            </div>
        )
    }
}

export default Newslist;