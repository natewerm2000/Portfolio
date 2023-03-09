
import { CCard, CCardBody, CCardImage, CCardText, CRow, CCol,CCardTitle } from '@coreui/react';
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import YoutubeEmbed from '../Youtube/YoutubeEmbed';
import "./Projects.css"

export default function Projects(props){
    const [flip, setFlip] = useState(false);
     
    if(props.vid === 1){
        var video = <YoutubeEmbed embedId={props.linkVid} />
    }
    else{
         video = 
         <CCardText>
         

         <CCardImage src= {props.pic1} />
            <CCardText>
                {props.about1}
            </CCardText>
            <CCardText>
                {props.about2}
            </CCardText>
            <CCardText>
                {props.about3}
            </CCardText>
         </CCardText>
    }
    return (
        <div>
            
        <CRow>
            <CCol sm={6}>
                <CCard>
                    
                    <CCardBody>
                        
                    <ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
            <div style={{
                minHeight:'600px',
                fontSize: '40px',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                <CCardTitle>
                {props.name}
                </CCardTitle>
                <a href={props.srcLink}>
                        <CCardImage src= {props.img} />
                        </a>
                        <CCardText>
                                {props.comp}
                            </CCardText>
                            <CCardText>
                                {props.desc}
                            </CCardText>
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                    More Info</button>
            </div>
            <div style={{
                minHeight:'600px',
                fontSize: '40px',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                <CCardTitle>
                {props.name}
                </CCardTitle>
                <CCardText>
               {video}              </CCardText>
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                    Less Info</button>
            </div>
        </ReactCardFlip>
                            
                            
                    </CCardBody>
                </CCard>
            </CCol>
</CRow>
        </div>
    )
}