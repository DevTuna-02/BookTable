import Hero from './Hero';
import { useReducer } from 'react';
import BookingForm from './BookingForm';
import {fetchAPI,submitAPI} from '../api';
function Main() {
    const submitForm = function(formData){
        return submitAPI(formData);
    }
    const updateTimes=function (availableTimes,action){
        if(action.type=="date"){
            return(<>{fetchAPI(new Date(action.date)).map((e,i)=><option key={i}>{e}</option>)}</>);
        }
    }
    const initializeTimes =()=>{
        return(<>{fetchAPI(new Date()).map((e,i)=><option key={i}>{e}</option>)}</>)
    }
    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes());
    return(
        <main>
            <Hero/>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </main>
    )
}
export default Main;