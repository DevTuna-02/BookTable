
function TDetails(props) {
    
    function handleDateChange(e){
        props.setData({...props.data,date:e.target.value});
        props.dispatch(
            {type:'date',
        date:e.target.value,}
        );
        props.setValidTable({...props.validTable,date:e.target.value!=""});
    }
    
    function handleTimeChange(e){
        props.setData({...props.data,time:e.target.value});
    }

    function handleDinerChange(e){
        props.setData({...props.data,diners:e.target.value});
        props.setValidTable({...props.validTable,diners:e.target.value>=1&&e.target.value<=12});
    }
    function handleLocationChange(e){
        props.setData({...props.data,location:e.target.value});
        props.setValidTable({...props.validTable,location:e.target.value!=""});
    }
    
    
    return (
        <>
            <h2>Table Details</h2>
            <div className="colWrap">
                <div className="col1">
                    <label>
                        Select Date<sup>*</sup><br />
                        <input type="date" name="date" aria-required="true" min={new Date().toISOString().split('T')[0]} value={props.data.date} onBlur={()=>{props.setTouched({...props.touched,date:true});}} onChange={handleDateChange} />
                        {!props.validTable.date&&props.touched.date&&<div className="errorMessage">Select a Date for reservation.</div>}
                    </label>
                    <label>
                        Select Time<sup>*</sup><br />
                        <select id="res-time" name="time" aria-required="true" value={props.data.time} onChange={handleTimeChange}>
                            {props.availableTimes}
                        </select>
        
                    </label>
                    <label>
                        Number of Diners<sup>*</sup><br />
                        <input type="number" name="diner" aria-required="true" min={1} max={12} value={props.data.diners} onBlur={()=>{props.setTouched({...props.touched,diners:true});}} onChange={handleDinerChange} />
                        {!props.validTable.diners&&props.touched.diners&&<div className="errorMessage">Insert the number of guests.</div>}
                    </label>
                    <fieldset aria-required="true">
                        <legend>Location<sup>*</sup></legend>
                        <div className="radioBox">
                            <div>
                                <input id="out" type="radio" name="location" value="outdoors" checked={props.data.location=="outdoors"} onChange={handleLocationChange} />
                                <label htmlFor="out">
                                    Outdoors</label>
                            </div>
                            <div>
                                <input id="in" type="radio" name="location" value="indoors" checked={props.data.location=="indoors"} onChange={handleLocationChange} />
                                <label htmlFor="in">
                                    Indoors</label>
                            </div>


                        </div>
                    </fieldset>
                </div>
                <div className="col2">
                    <label>
                        Select Ocassion<br />
                        <select name="ocassion" value={props.data.ocassion} onChange={e=>{props.setData({...props.data,ocassion:e.target.value})}}>
                            <option value="">Ocassion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </label>
                    <label className="fInfo">
                        Further Information<br />
                        <textarea name="information" rows="8" cols="30" value={props.data.further} onChange={e=>{props.setData({...props.data,further:e.target.value})}}>

                        </textarea>
                    </label>
                </div>


            </div>

        </>

    )
}

export default TDetails;