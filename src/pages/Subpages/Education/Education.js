
import { CCard, CCardBody, CCardImage, CCardText, CRow, CCol,CCardTitle } from '@coreui/react';

import "./Education.css"
export default function Education(props){
    return (
        <div>
        <CRow>
            <CCol sm={6}>
                <CCard>
                    <CCardBody>
                        <CCardImage src= {props.img}/>
                        <CCardTitle>{props.school}</CCardTitle>
                            <CCardText>
                                {props.year}
                            </CCardText>
                            <CCardText>
                                {props.deg}
                            </CCardText>
                            <CCardText>
                                {props.gpa}
                            </CCardText>
                    </CCardBody>
                </CCard>
            </CCol>
</CRow>
        </div>
    )
}