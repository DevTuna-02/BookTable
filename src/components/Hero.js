import outdoors from '../assets/outdoors.png';
function Hero() {
    return(
    <div className='hero'>
    <h1>Reserve a Table</h1>
    <img src={outdoors} alt="Outdoors Restaurant Table" />
    </div>
        )
}
export default Hero;