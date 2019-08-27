import React, {Component} from 'react';
import Axios from 'axios';
import SliderContent from './slidercontent';



class Slider extends Component {

    state = {
        news:[]
    }

    UNSAFE_componentWillMount(){
        Axios.get('http://localhost:3005/articles?_start=0&_end=4').then(Response => {
            this.setState({
                news:Response.data
            })
        })    }
    
    render() {
    return(    
        <div>
            <SliderContent data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        </div>
        )
    }
} 

export default Slider;