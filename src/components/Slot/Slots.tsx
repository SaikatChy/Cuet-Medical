import React from 'react';
import Slot from './Slot';

const Slots = ({slots,handlingFunction,buttonType}) => {
    return (
        <div>
             <div className='flex justify-between flex-wrap mx-8'>
            {
                slots.map((slot,idx)=><Slot 
                id={idx}
                buttonType={buttonType}
                {...slot} 
                handlingFunction={()=>handlingFunction(slot._id)}/>)
            }
          </div> 
        </div>
    );
};

export default Slots;