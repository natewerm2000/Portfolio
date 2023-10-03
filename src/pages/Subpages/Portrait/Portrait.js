import portrait from './portait.jpg';
import './Portrait.css';

export default function Portrait(){
    return(
        <div>
    <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Nathaniel Alexander</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Software Developer</p>
            <img src={portrait} alt="Nathaniel Alexander" className="intro__img"/>
        </section>
    
    
    
    </div>
    )
}
