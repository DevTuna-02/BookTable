import TDetails from "./TDetails";
import CInfo from "./CInfo";
import ConfirmedBooking from "./ConfirmedBooking";
import homelogo from "../assets/home icon.svg";
import {useState} from  "react";
import { Link } from "react-router-dom";
function BookingForm(props) {
    const [page,setPage]=useState(0);
    const [table,setTable]=useState({
        date:"",
        time:"17:00",
        diners:"",
        location:"",
        ocassion:"",
        further:"",
    });
    const [contact,setContact]=useState({
        name:"",
        lname:"",
        phone:"",
        email:"",
        confirm:"",
    });
    const [validTable,setValidTable]=useState({date:false,diners:false,location:false});
    const [validContact,setValidContact]=useState({name:false,lname:false,email:false});
    const [touchedTable,setTouchedTable]=useState({date:false,diners:false});
    const [touchedContact,setTouchedContact]=useState({name:false,lname:false,email:false});
    const isValid=[...Object.values(validContact),...Object.values(validTable)].every((e)=>e==true);
    const content=[
        <TDetails data={table} touched={touchedTable} setTouched={setTouchedTable} validTable={validTable} setValidTable={setValidTable} setData={setTable} availableTimes={props.availableTimes} dispatch={props.dispatch}/>,
        <CInfo data={contact} touched={touchedContact} setTouched={setTouchedContact} validContact={validContact} setValidContact={setValidContact} setData={setContact}/>,
        <ConfirmedBooking/>,
    ];
    const handleSubmit= function(e){
        e.preventDefault();
        props.submitForm({...table,...contact})?setPage(page+1):alert("An error ocurred, try again!");
    };
    const buttonStyle=page==0?{justifyContent: 'flex-end'}:page==1?{justifyContent: 'space-between'}:{justifyContent:'center'};
    const stepStyle={color:'#EDEFEE',backgroundColor:'#495E57',borderColor:'#495E57'}
    
    return(
        <div className="form">
        <div id="prog">
            <div style={page>=0?stepStyle:null}>1</div>
            <div style={page>=1?stepStyle:null}>2</div>
            <div style={page>=2?stepStyle:null}>3</div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="formPage">{content[page]}</div>
           <div className="formButtons" style={buttonStyle}>
           {page==1 && <button className="prev" onClick={()=> {setPage(page-1)}}>Previous</button>}
           {page==0 && <button className="next" onClick={()=> {setPage(page+1)}}>Next</button>}
           {page==1 && <button type="submit" disabled={!isValid} className="submit">Submit</button>}
           {page==2 && <Link reloadDocument className="home" path="/"><img src={homelogo} alt="Home Icon"/> Back Home</Link>}
           </div>
        </form>
        </div>
        )
}
export default BookingForm;