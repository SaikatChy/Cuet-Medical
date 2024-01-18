import  { useContext, useEffect, useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { HiPlusCircle } from "react-icons/hi";
import { rootUrl } from '../../utils/rootUrl';
import timeSchema from '../../formValidator/timeRange.yup';
import CustomField from '../Formik/CustomField';
import CustomForm from '../Formik/CustomForm';
import convertToAMPMFormat from '../../utils/util.time';
import customAxios from '../../Axios/axios';
import axios from 'axios';
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const AdminScheduleTimings = () => {
    const [weekDay, setWeekDay] = useState(0);
    const [loading,setLoading]=useState(true)
    const [modal,setModal]=useState(false)
    const [error,setError]=useState(null)
    // const [slots, setSlots] = useState([{ startTime: "08:00AM", endTime: "10:00AM" },
    // { startTime: "04:00PM", endTime: "10:00PM" },
    // { startTime: "01:00PM", endTime: "05:00PM" },
    // { startTime: "06:00PM", endTime: "09:00PM" },
    // { startTime: "06:00PM", endTime: "09:00PM" },
    // { startTime: "06:00PM", endTime: "09:00PM" }])
    const [slots,setSlots]=useState([])
   useEffect( ()=>{
      setLoading(true)
     axios.post(rootUrl+'doctor/slots',{weekDay:daysOfWeek[weekDay]},{withCredentials:true})
      .then(({data})=>setSlots(data.data))
      .catch((err)=>{
        console.log(err);
        setSlots([])})
      setLoading(false)
   },[weekDay])
    const handleDeleteSlot = async (index) => {
        setLoading(true)
        await axios.delete(rootUrl+'doctor/slot/'+slots[index]._id,{withCredentials:true})
        .then(({data})=>data.status && setSlots([...slots.filter((_, i) => i !== index)]) )
       setLoading(false)
    };
   const initialValues={
    startTime:"00:00",
    endTime:"00:00",
    bookingStartTime:"00:00",
    bookingEndTime:"00:00",
    capacity:5,
    visitingFee:100
}
    const handleSubmit = (values) => {
        setError(null)
     console.log(values);
     let {startTime,endTime,bookingStartTime,bookingEndTime}=values;
     startTime=convertToAMPMFormat(startTime);
     endTime=convertToAMPMFormat(endTime)
     bookingStartTime=convertToAMPMFormat(bookingStartTime)
     bookingEndTime=convertToAMPMFormat(bookingEndTime)
     axios.post(rootUrl+'doctor/slot',{...values,
        startTime,endTime,bookingEndTime,bookingStartTime,
        weekDay:daysOfWeek[weekDay]
    },{withCredentials:true})
          .then(({data})=>{
            if(data?.status){
                data.data.startTime=convertToAMPMFormat(data.data.startTime)
                data.data.endTime=convertToAMPMFormat(data.data.endTime)
                setSlots([...slots,data.data])
                setModal(false)
            }
          })
          .catch((err)=>{
            setError(err.response.data.message);
          })
        // event.preventDefault();
        // const form = event.target;
        // const newStartTime = form.querySelector('#start-time').value;
        // const newEndTime = form.querySelector('#end-time').value;
        // const newSlot = { startTime: newStartTime, endTime: newEndTime };
        // const updatedSlots = [...slots, newSlot];
        // // console.log(updatedSlots);
        // setSlots(updatedSlots);
    }
    return (
        <div>
            <h2 className='text-center font-bold text-xl py-2'>Shcedule Timings</h2>
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
                        <h2 className="font-semibold text-xl my-5">Time Slots</h2>
                        <div onClick={() => setModal(true)} className='cursor-pointer font-semibold text-lg my-5 items-center flex text-green-300 hover:text-success'>
                            <span className='text-xl'><HiPlusCircle></HiPlusCircle></span>
                            <span>Add Slot</span>
                        </div>
                       
                            {modal && <div className="modal-box bg-white fixed top-[250px]">
                                
                                    <button onClick={()=>setModal(false)} className="focus:outline-none btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            
                                <h3 className="text-lg text-center font-[900] my-3">Add Time Slots</h3>
                                {/* <form onSubmit={handleAddSlots} className="w-full max-w-lg p-4 dialog">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="start-time">
                                                Start Time
                                            </label>
                                            <select name='startTime' id="start-time" className="bg-transparent select select-info w-full max-w-xs">
                                                <option>08:00AM</option>
                                                <option>09:00AM</option>
                                                <option>10:00AM</option>
                                                <option>11:00AM</option>
                                                <option>12:00PM</option>
                                                <option>01:00PM</option>
                                                <option>02:00PM</option>
                                                <option>03:00PM</option>
                                            </select>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="end-time">
                                                End Time
                                            </label>
                                            <select name='endTime' id="end-time" className="bg-transparent select select-info w-full max-w-xs">
                                                <option>09:00AM</option>
                                                <option>10:00AM</option>
                                                <option>11:00AM</option>
                                                <option>12:00PM</option>
                                                <option>01:00PM</option>
                                                <option>02:00PM</option>
                                                <option>03:00PM</option>
                                                <option>04:00PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button className='focus:outline-none btn bg-success glass text-white'>Add Slots</button>
                                    </div>
                                </form> */}
                                  <CustomForm
                                        initialValues={initialValues}
                                        onSubmit={handleSubmit}
                                        validationSchema={timeSchema}
                                        className='flex flex-wrap justify-between'
                                        >
                                            <CustomField type='time' 
                                            name='startTime' labelText='Start Time'
                                            className='w-[200px] bg-transparent input select-info'
                                            />
                                            <CustomField type='time' 
                                            name='endTime' labelText='End Time'
                                            className='w-[200px] bg-transparent input select-info'
                                            />
                                            <CustomField type='time' 
                                            name='bookingStartTime' labelText='Booking Start Time'
                                            className='w-[200px] bg-transparent input select-info'
                                            />
                                            <CustomField type='time' 
                                            name='bookingEndTime' labelText='Booking End Time'
                                            className='w-[200px] bg-transparent input select-info'
                                            />
                                            <CustomField type='number' 
                                            name='capacity' labelText='Capacity'
                                            className='w-[200px] bg-transparent input select-info'
                                            />
                                            <CustomField type='number' 
                                            name='visitingFee' labelText='Visiting Fee'
                                            className='w-[200px] bg-transparent input select-info'
            
                                            />
                                            <div className='text-center w-full'>
                                        <button 
                                        type='submit'
                                        className='focus:outline-none my-4 btn bg-success glass text-white w-full'>Add Slot</button>
                                        <p className='text-[red] text-[600] text-xs'>*{error}</p>
                                    
                                    </div>
                                   </CustomForm>
                            </div>}
                       
                    </div>
                     
                    
                    {loading && <span className="loading loading-bars loading-xl"></span>}
                    
                    <div className='flex gap-4 flex-wrap'>
                        {
                            slots.map((slot, idx) => {
                                return (
                                    <div key={idx} className='rounded-md text-center font-semibold text-sm text-white flex align-middle items-center gap-2 bg-success p-2 w-auto'>
                                        <p className='flex'>{slot.startTime}<span className='px-1'>-</span>{slot.endTime}</p>
                                        <p onClick={() => { handleDeleteSlot(idx) }} className='cursor-pointer text-green-200 text-lg hover:text-white'><RxCrossCircled></RxCrossCircled></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminScheduleTimings;