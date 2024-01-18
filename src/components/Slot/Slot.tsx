import React from 'react';

const Slot = ({startTime,endTime,bookingStartTime,bookingEndTime,handlingFunction,buttonType}) => {
    return (
        <div className='card my-3 shadow-xl w-[40%]'>
            <p className='font-[700] text-lg'>Service Time</p>
            <p className='text-md text-[green]  italic'>{startTime} - {endTime}</p>
            <p className='font-[700] text-lg'>Booking Time</p>
            <p className='text-md italic text-[green]'>{bookingStartTime} - {bookingEndTime}</p>
            <button className='btn btn-info mt-5'
            onClick={handlingFunction}
            >
                {
               ( buttonType===0 && 'Create Appointment' ) ||
               (buttonType===1 && 'Start Appointment')||
               (buttonType===2 && 'Close Appointment')||
               (buttonType===3 && 'Delete Appointment')}

            
            </button>
        </div>
    );
};

export default Slot;