import React from "react"
import email from "./email.png"
import phone from "./phone.png"
export default function Contact(){
    return <div>
        
      
    <div className='border1'>
        <div className='left'>
            <img src = {email} alt = ""></img>
            <h2>Email</h2>
            <h1>natewerm2000@gmail.com</h1>
            
            </div>
            <div className='right'>
            <img src = {phone} alt = ""></img>
                <h2>Phone Number</h2>
                <h1>(845) 763-6528</h1>
            </div>
        </div>

    
    </div>


}