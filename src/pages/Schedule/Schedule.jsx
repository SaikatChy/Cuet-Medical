import React, { useState } from 'react';
import CustomForm from '../../components/Formik/CustomForm';
import CustomField from '../../components/Formik/CustomField';
import { RxCrossCircled } from 'react-icons/rx';
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const Schedule = () => {
    const [weekDay, setWeekDay] = useState(0);
    const [slots, setSlots] = useState([{ startTime: "08:00AM", endTime: "10:00AM" },
    { startTime: "01:00PM", endTime: "03:00PM" },
    { startTime: "06:00PM", endTime: "09:00PM" }]); // this slots should be dynamic; will be changed later
    return (
        <div className='mt-[8%]'>
            <div className='card card-body w-4/6 mx-auto my-auto'>
                <h2 className='text-center font-bold text-4xl py-2'>Doctor's Schedule</h2>
                <div className='border-spacing-4 p-5 border-2 rounded-md'>
                    <div className='flex flex-wrap gap-7 p-5 border-b-2 w-full justify-center'>
                        <button className={weekDay === 0 ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success" : "btn btn-sm bg-transparent focus:outline-none  text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"} onClick={() => setWeekDay(0)}>Sunday</button>
                        <button className={weekDay === 1 ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success" : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"} onClick={() => setWeekDay(1)}>Monday</button>
                        <button className={weekDay === 2 ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success" : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"} onClick={() => setWeekDay(2)}>Tuesday</button>
                        <button className={weekDay === 3 ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success" : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"} onClick={() => setWeekDay(3)}>Wednesday</button>
                        <button className={weekDay === 4 ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success" : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"} onClick={() => setWeekDay(4)}>Thursday</button>
                        <button className={weekDay === 5 ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success" : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"} onClick={() => setWeekDay(5)}>Friday</button>
                        <button className={weekDay === 6 ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success" : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"} onClick={() => setWeekDay(6)}>Saturday</button>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className="font-semibold text-xl my-5">Available Time Slots</h2>

                        </div>


                        {/* {loading && <span className="loading loading-bars loading-xl"></span>} */}

                        <div className='flex gap-4 flex-wrap'>
                            {
                                slots.map((slot, idx) => {
                                    return (
                                        <div key={idx} className='rounded-md text-center font-semibold text-sm text-white flex align-middle items-center gap-2 bg-success p-2 w-auto'>
                                            <p className='flex'>{slot.startTime}<span className='px-1'>-</span>{slot.endTime}</p>
                                            {/* <p onClick={() => { handleDeleteSlot(idx) }} className='cursor-pointer text-green-200 text-lg hover:text-white'><RxCrossCircled></RxCrossCircled></p> */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;