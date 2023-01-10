import jelly from '../images/jelly1.PNG';
import spice from '../images/spice.PNG';
import '../style2.scss';

export default function Shop(){
    return <div className = "shop">
<div id = "header"><h1>Shop</h1></div>
    <div class="card">
        <img src={jelly} alt=""/>
        <div class="container">
            <h4><b>Hot Pepper Jelly</b></h4> 
            <p>dsahdkwjkdhaklwdhdlhwadkwajhd</p>
            <a href="/home">
            <button class="button">
	                    Buy
	                <div class="button__horizontal"></div>
	            <div class="button__vertical"></div>
            </button> 
            </a>
            <div id = "space"></div>
        </div>
    </div>
    <div id = "space"></div>
    
    <div class="card">
        <div class="box">
        <img src={spice} alt=""/></div>
        <div class="container">
            <h4><b>Hot Pepper Seasonings</b></h4> 
            <p>dsahdkwjkdhaklwdhdlhwadkwajhd</p> 
            <a href="/home">
            <button class="button">
	                    Buy
	                <div class="button__horizontal"></div>
	            <div class="button__vertical"></div>
            </button>
            </a>
            <div id = "space"></div>
        </div>
        
    </div>
    
</div>
}