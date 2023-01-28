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
        <div className="dropdown">
         
         <lebel class="dropbtn">
             Currency :
             <select  value={currencyType} onChange={handleChange}>

              {options.map((option) => (

              <option className="dropdown-content"  value={option.value}>{option.name}</option>
              

))}

        </select>

        </lebel>
      
      
        </div>
    );
};

export default Currency;