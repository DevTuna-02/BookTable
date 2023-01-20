
function CInfo(props) {
    function handleNameChange(e){
        props.setData({...props.data,name:e.target.value});
        props.setValidContact({...props.validContact,name:e.target.value.length>=1&&e.target.value.length<=12});
    }
    function handleLastNameChange(e){
        props.setData({...props.data,lname:e.target.value});
        props.setValidContact({...props.validContact,lname:e.target.value.length>=1&&e.target.value.length<=12});
    }
    function handleEmailChange(e){
        props.setData({...props.data,email:e.target.value});
        props.setValidContact({...props.validContact,email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e.target.value)});
    }
    return (
        <>
            <h2>Contact Information</h2>
            <div className="colWrap">
                <div className="col1">
                    <label>
                        First Name<sup>*</sup><br/>
                        <input name="name" aria-required="true" value={props.data.name} onBlur={()=>{props.setTouched({...props.touched,name:true});}} onChange={handleNameChange} />
                        {!props.validContact.name&&props.touched.name&&<div className="errorMessage">Enter your name.</div>}
                    </label>
                    <label>
                        Last Name<sup>*</sup><br/>
                        <input name="lastname" aria-required="true" value={props.data.lname} onBlur={()=>{props.setTouched({...props.touched,lname:true});}} onChange={handleLastNameChange}/>
                        {!props.validContact.lname&&props.touched.lname&&<div className="errorMessage">Enter your last name.</div>}
                    </label>
                </div>
                <div className="col2">
                    <label>
                        Phone Number<br/>
                        <input type="tel" name="phone" value={props.data.phone} onChange={e=>{props.setData({...props.data,phone:e.target.value})}}/>
                    </label>
                    <label>
                        E-mail<sup>*</sup><br/>
                        <input type="email" name="email" aria-required="true" value={props.data.email} onBlur={()=>{props.setTouched({...props.touched,email:true});}} onChange={handleEmailChange}/>
                        {!props.validContact.email&&props.touched.email&&<div className="errorMessage">Please, enter a valid e-mail.</div>}
                    </label>
                </div>
                </div>
                <div className="confirmBox">
                    <p><sup>*</sup> At least your Email Address is required for contact and confirmation.</p>
                    <fieldset>
                        <legend>Confirmation</legend>
                        <div className="radioBox">
                            <div>
                            <input id="email" type="radio" name="confirmation" value="email" checked={props.data.confirm=="email"} onChange={e=>{props.setData({...props.data,confirm:e.target.value})}} />
                            <label htmlFor="email">Email</label>
                            </div>
                            <div>
                            <input id="phone" type="radio" name="confirmation" value="phone" checked={props.data.confirm=="phone"} onChange={e=>{props.setData({...props.data,confirm:e.target.value})}}/>
                            <label htmlFor="phone">Phone</label>
                            </div>
                            
                            
                        </div>
                    </fieldset>
                </div>


            
        </>
    )
}

export default CInfo;