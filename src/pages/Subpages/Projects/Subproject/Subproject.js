
import { CCard, CCardBody, CCardImage, CCardText, CRow, CCol,CCardTitle } from '@coreui/react';

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
                            
                            
                            
                    </CCardBody>
                </CCard>
            </CCol>
</CRow>
        </div>
    )
}