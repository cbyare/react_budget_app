
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <div className="form-group row">
            <lebel className="col-sm col-form-label col-form-label-sm">Budget: £ </lebel>
            <div class="col-sm-8">
            <input className="form-control form-control-sm" type="number" value={budget} />
            </div>

            </div>
            
      
        </div>
    );
};

export default Budget;