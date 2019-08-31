import React,{Component} from 'react';
import { firebaseDB } from '../../firebase';
import styles from './signin.module.css';
import FormField from '../widgets/formFields/formfields';
import FormFields from '../widgets/formFields/formfields';

class SignIn extends Component {

    state={
        registerError:'',
        loading:false,
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'enter your email',
                },
                validation:{
                    required:true,
                    email:true 
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            password:{
                element:'input',
                value:'',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'enter your password',
                },
                validation:{
                    required:true,
                    password:true 
                },
                valid:false,
                touched:false,
                validationMessage:''
            }
        }
    }

    updateform=(element)=>{
        const formdata_old={
            ...this.state.formdata
        }
        const newelements ={
            ...newFormdata[element.id]
        }
        newelements.value = element.event.target.value;
        formdata_old[element.id] = newelements;

        console.log()
    }

render () {
    return (
        <div className={styles.logcontainer}> 
        <form>
            <FormField id='email' formdata={this.state.formdata.email} change={(newstate)=>{this.updateform(newstate)}}/>

        </form>
        </div>        
    )
}    

}

export default SignIn;