import { AppContext } from '../context/AppContext';
import React, { useContext, useState } from 'react';

const Currency = () => {
     const {dispatch, currency } = useContext(AppContext);
    const options = [

        { name: '$ Dollar', value: '$' },
        { name: '£ Pound', value: '£' },
        { name: '€ Euro', value: '€' },
        { name: '₹ Ruppee', value: '₹' }
      ];


const myStyle = {
   select:{
    color: 'white',
    backgroundColor:'#7ceb7c',
    border:'none',
  
   },
    optionStyle:
    {
        color: 'black',
        'option :nthChild(1n+4):hover' : 
        {
            backgroundColor:'white',
        },
        
    },
};


    const handleChange = (event) => {

        // setCurrencyType(event.target.value);
        const cur = event.target.value;

        dispatch({
            type: 'CHG_CURRENCY',
            payload: cur,
        });
     
      };

    return (
        <div className="alert alert-success" style={{ color: 'white', backgroundColor : '#7ceb7c' }}>
         
              <div className="form-group row">
              <lebel className="col-sm-3 col-form-label col-form-label-sm">Currency</lebel>
              <div class="col-sm-6">
              <select style={myStyle.select}  value={currency} onChange={handleChange}>
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