import portrait from './portait.jpg';
import './Portrait.css';

export default function Portrait(){
    return(
        
    <div className="box">
        <div className="card1">
            <div className="imgBx">
                <img src={portrait} alt=""/>
            </div>
        <div className="details">
            <h2>Nathaniel Alexander<span>Web Developer</span></h2>
        </div>
        
      </div>
      
    </div>
    )
}
