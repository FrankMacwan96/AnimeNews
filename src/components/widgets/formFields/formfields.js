import React from 'react';
import syles from './formfields.module.css';

const FormFields = ({formdata,change,id}) =>{
    
    const renderfields = () =>{
        let template = null;
        switch(formdata.element){
            case('input'):
                template=(
                    <div>
                        <input 
                        value={formdata.value}
                        {...formdata.config}
                        onBlur={(event)=>change({event,id,blur:true})}
                        onChange={(event)=>change({event,id,blur:false})}/>
                    </div>
                )
            break;
            default:
            template=null;
        }
        return template;
    }

    return(
        <div>{ renderfields()}</div>
    )
}

export default FormFields;