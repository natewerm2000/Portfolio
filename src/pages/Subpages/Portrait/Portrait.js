import portrait from './portait.jpg';
import './Portrait.css';
import {useCollapse} from 'react-collapsed';

export default function Portrait(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return(
        <div>
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
    <div className='border'>
        <div className='left'>
            <h2>Front End Developer</h2>
            Developer who writes clean and elegant code, focused primarily on React<br>
            </br>
            Competent in developing projects with various other tools such as Vue.js, PHP, etc.
            </div>
            <div className='right'>
                <h2>Software Developer</h2>
                Strong skills in object oriented programming languages such as Java and Python<br>
            </br>
            Some experience in C++ and C#
            </div>
        </div>
        
        <div className='border'>
            <h2>Skills</h2>
            <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
        <div className="content">
            <div className='left'>
                <h3>
                    Professional
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
                    Technical
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
    
    </div>
    )
}
