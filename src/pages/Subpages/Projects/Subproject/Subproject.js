
import { CCard, CCardBody, CCardImage, CCardText, CRow, CCol,CCardTitle } from '@coreui/react';

import "./Projects.css"
export default function Projects(props){
    return (
        <div>
            
        <CRow>
            <CCol sm={6}>
                <CCard>
                    
                    <CCardBody>
                        
                    <a href={props.srcLink}>
                        <CCardImage src= {props.img} />
                        </a>
                        <CCardTitle>{props.name}</CCardTitle>
                            <CCardText>
                                {props.comp}
                            </CCardText>
                            <CCardText>
                                {props.desc}
                            </CCardText>
                            <CCardText>
                                <a href={props.info}>
                                More Info:
                                </a>
                                
                            </CCardText>
                            
                            
                    </CCardBody>
                </CCard>
            </CCol>
</CRow>
        </div>
    )
}