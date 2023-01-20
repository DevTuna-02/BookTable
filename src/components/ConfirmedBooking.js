import check from "../assets/check.svg";

function ConfirmedBooking() {
    return(
        <>
        <h2>You're all set!</h2>
        <div className="finishBox">
            <p>You'll be soon receiving your booking confirmation via e-mail and alternatively to your phone. We're looking forward to serve you!</p>
            <img src={check} alt="Check Icon"/>
        </div>
        </>
    )
}

export default ConfirmedBooking;