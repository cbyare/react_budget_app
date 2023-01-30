import { AppContext } from '../context/AppContext';
import React, { useContext, useState } from 'react';

const Currency = () => {
     const {dispatch } = useContext(AppContext);
     const [currencyType, setCurrencyType ] = useState('');

     const myStyle = {
        select:{
         color: 'white',
         backgroundColor:'#7ceb7c',
         border:'none',
       
        },
         optionStyle:
         {
             color: 'black',
             
         },
     };

    const options = [

        { name: '$ Dollar', value: '$' },
        { name: '£ Pound', value: '£' },
        { name: '€ Euro', value: '€' },
        { name: '₹ Ruppee', value: '₹' }
      ];




    // const handleChange = (event) => {

    //     setCurrencyType(event.target.value);
    //     currency =currencyType;
       

    //     dispatch({
    //         type: 'CHG_CURRENCY',
    //         payload: currency,
    //     });
     
    //   };

    
    const handleChange = (event) => {
     const  value  = event.target.value;
    setCurrencyType({event}) // fix here
       console.log(currencyType);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };
    //   const handleChange = e => {
    //     const { value } = e.target;
    //     setCurrencyType(e.target);
    //     dispatch({
    //         type: 'CHG_CURRENCY',
    //         payload: value,
    //     });
        
    //   };

     

    return (
        <div className="alert alert-success" style={{ color: 'white', backgroundColor : '#7ceb7c' }}>
         
              <div className="form-group row">
              <lebel className="col-sm-3 col-form-label col-form-label-sm">Currency</lebel>
              <div class="col-sm-6">
              <select style={myStyle.select}  value={currencyType} onChange={handleChange}>
                {options.map((option) => (

                    <option style={myStyle.optionStyle} value={option.value}>{option.name}</option>
                    ))}

                </select>
              </div>
             
              </div>



      

      
      
        </div>
    );
};

export default Currency;