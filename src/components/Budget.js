import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget ,currency,dispatch,expenses} = useContext(AppContext);


    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const badgetChange = (event) => {

        // const { value } = event.target.value;
         const maxBadget=20000;
        if(event.target.value < totalExpenses) {
            alert("The badeget cannot lower spended funds " + currency  + totalExpenses);
            return;
        }
      
        if(event.target.value > maxBadget) {
            alert("The budget cannot exceed this "  + maxBadget);
            // setCost("");
            return;
        }


        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
      };

    // const badgetChange = e => {
    //     const { value } = e.target.value;
    //      const maxBadget=20000;
    //      console.log(value)
        
    //     if(budget < remaining) {
    //         alert("The badeget cannot lower spended funds " + currency  + remaining);
    //         return;
    //     }
      
    //     if(value > maxBadget) {
    //         alert("The budget cannot exceed this "  + maxBadget);
    //         // setCost("");
    //         return;
    //     }


    //     dispatch({
    //         type: 'SET_BUDGET',
    //         payload: value,
    //     });

        
    //   };


    return (
        <div className='alert alert-secondary'>
            <div className="form-group row">
            <lebel className="col-sm col-form-label col-form-label-sm">Budget: {currency} </lebel>
            <div class="col-sm-8">
            <input className="form-control form-control-sm"
             type="number"
             step={10}
             value={budget}
             onChange={badgetChange}
              />
             
            </div>

            </div>
            
      
        </div>
    );
};

export default Budget;