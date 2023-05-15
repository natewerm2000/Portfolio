
import React from "react";

import {useCollapse} from 'react-collapsed';

export default function Education(props){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return(

<div className="border">
<h2>Education</h2>
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            <div className='left'>
                <h3>
                    SUNY New Paltz
                </h3>
                Problem Solving
                <br></br>
                Active Thinker
                <br></br>
                Self Teacher
                <br></br>
                Leadership
                <br></br>
                Ambitious
                <br></br>
                Fast learner
            </div>
            <div className='right'>
                <h3>
                    Dutchess Community College
                </h3>
                HTML
                <br></br>
                CSS/SCSS
                <br></br>
                Javascript
                <br></br>
                React
                <br></br>
                PHP
                <br></br>
                MySQL
                <br></br>
                Java
                <br></br>
                Python
            </div>
            
            </div>
        </div>
    </div>
    </div>
    );
}