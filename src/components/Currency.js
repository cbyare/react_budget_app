import { AppContext } from '../context/AppContext';
import React, { useContext, useState } from 'react';

const Currency = () => {
    // const { budget } = useContext(AppContext);
    const options = [

        { name: '$ Dollar', value: '$' },
        { name: '£ Pound', value: '£' },
        { name: '€ Euro', value: '€' },
        { name: '₹ Ruppee', value: '₹' }
      ];


    const [currencyType, setCurrencyType] = useState('');


    const handleChange = (event) => {

        setCurrencyType(event.target.value);
     
      };

    return (
        <div className="alert alert-success" style={{ color: 'white', backgroundColor : '#7ceb7c' }}>
         
              <div className="form-group row">
              <lebel className="col-sm-3 col-form-label col-form-label-sm">Currency</lebel>
              <div class="col-sm-7">
              <select style={{ color: 'white', backgroundColor : '#7ceb7c', border:'none' }}  value={currencyType} onChange={handleChange}>
                {options.map((option) => (

                    <option style={{ color: 'black',margin :'30' }} value={option.value}>{option.name}</option>
                    ))}

                </select>
              </div>
             
              </div>



      

      
      
        </div>
    );
};

export default Currency;