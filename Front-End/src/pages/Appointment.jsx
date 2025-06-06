import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate, useParams } from "react-router-dom";
import { assets, workers } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";


const Appointment = () => {
    const {currency, workerData, token,backendUrl } = useContext(AppContext)
    const {worId} = useParams()
    const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

    const navigate = useNavigate()

    const [workinfo, SetWorkInfo] = useState(null)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchworkinfo = async ()=>{
        const workinfo = workerData.find((doc)=> doc._id === worId)
        SetWorkInfo(workinfo)
    }

    const getAvailableSlots = async ()=>{
        setDocSlots([])

        // getting current date 
        let today = new Date()

        for(let i= 0 ; i<7; i++){
            //getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate()+i)

            //setting and time of the date with index 
            let endTime = new Date()
            endTime.setDate(today.getDate() +i)
            endTime.setHours(21,0,0,0)

            // setting hours 
            if(today.getDate() === currentDate.getDate()){
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() +1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() >30 ? 30 : 0)
            }else{
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleString([],{hour: '2-digit', minute: '2-digit'})
                
                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = workinfo.slots_booked[slotDate] && workinfo.slots_booked[slotDate].includes(slotTime) ? true : false
                
                if (!isSlotAvailable) {
                    //add slot to array
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }

                // increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setDocSlots(prev => ([...prev, timeSlots]))

        }
        
    }

    const bookAppointment = async ()=>{
        if (!token) {
            toast.warn("Login to Book appointment")
            return navigate('/login')
        }

        try {
            
            const date = docSlots[slotIndex][0].datetime

            let day = date.getDate()
            let month = date.getMonth()
            let year = date.getFullYear()

            const slotDate = day + "_" + month + "_" + year

            const {data} = await axios.post(backendUrl + '/api/user/book-appointment', {worId, slotDate, slotTime} ,{headers:{token}})
            
            if (data.success) {
                toast.success(data.message)
                // getDoctorsData()
                navigate('/my-appointments')
            } else {
                toast.error("Slot not available")
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    useEffect(()=>{
        fetchworkinfo();
    },[worId, workerData])

    useEffect(()=>{
        getAvailableSlots();
    },[workinfo])

    useEffect(()=>{
        console.log(docSlots);
    },[docSlots])

  return workinfo && (
    <div className=" px-6 sm:px-[8%] mx-auto pt-28 pb-20">
         {/* docotr details  */}
        <div className=" flex flex-col sm:flex-row gap-4">
            <div>
                <img className=" bg-black w-full sm:max-w-72 rounded-lg" src={workinfo.image} alt="" />
            </div>

            <div className=' flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            {/* workinfo name, degree, experiance */}
                <p className=' flex items-center gap-2 text-2xl font-medium text-gray-700'>{workinfo.name}
                <img className=' w-5' src={assets.verified_icon} alt="" />
                </p>
                <div className=' flex items-center gap-2 text-sm mt-1 text-gray-600'>
                    <p>{workinfo.degree} {workinfo.speciality}</p>
                    <button className=' py-0.5 px-2 border text-xs rounded-full'>{workinfo.experience}</button>
                </div>

                {/* doctor about  */}
                <div>
                <p className=' flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About 
                    <img src={assets.info_icon} alt="" />
                </p>
                <p className=' text-sm text-gray-500 max-w-[700px] mt-1'>{workinfo.about}</p>
                </div> 
                <p className=' text-gray-500 font-medium mt-4'>Appointmet fee: <span className=' text-gray-600'>{currency}50</span></p>
            </div>
        </div>
        {/* BOOKING sots  */}
        <div className=' sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
            <p>Booking Slots</p>
            <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                {
                    docSlots.length && docSlots.map((item,index)=>(
                        <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-black text-white':'border border-gray-200'}`} key={index}>
                            <p className="">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p className="">{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))
                }
            </div>
            <div className=' flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                {
                docSlots.length && docSlots[slotIndex].map((item,index)=>(
                    <p key={index} onClick={()=> setSlotTime(item.time)} className={` text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-black text-white' : 'border border-gray-200'}`}> 
                        {item.time.toLowerCase()}
                    </p>
                ))
                }
            </div>
            <button className=' bg-black text-white text-sm font-light px-14 py-3 rounded-full my-6' onClick={bookAppointment}>Book an appointment</button>
        </div>

    </div>
  )
}

export default Appointment