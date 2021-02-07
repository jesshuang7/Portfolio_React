import React from "react";
import "./style.css";
import resume from "./../../Assets/2021_Jessica_Software_Engineer.pdf"
import headshot from "./../../Assets/Images/jessica.jpeg"
import github from "./../../Assets/Images/github.png";
import linkedin from "./../../Assets/Images/linkedin.png";

function About () {
    return (
<footer className="footer">
<div className="intro-container container col-md-10 col-sm-10 col-xs-8 ml-4 mt-3 mb-5">
                    <div className="col-md-9 bg-light pt-2 pl-5 pr-5 pb-5">

                    <div className="row">
                        <h1>About Me</h1>
                    </div>
                    <div className="row">
                        <p className="underline"></p>
                    </div>


                    <div className="card float-left mr-5" style={{width: "15rem"}}>
                        <img src={headshot} className="card-img-top" alt="Jessica" />
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><i className="fas fa-envelope"></i> tzunuhuang@gmail.com</li>
                                <li className="list-group-item"><i className="fas fa-mobile-alt"></i> 206-636-8108</li>

                            </ul>
                            <div className="card-body">
                                <a href="https://www.linkedin.com/in/tzunu-jessica/" className="card-link"><img src={linkedin} alt="linkedin-image" width="15%"/></a>
                                    <a href="https://github.com/jesshuang7" className="card-link"><img src={github} alt="github-image" width="30%"/></a>
                                        <a href={resume} className="card-link">resume</a>
                            </div>
                     </div>
                                <br />

                        <div className="row">
                            <section>

                         <p className="intro">Jessica was born and raised in Taiwan and came to the US when she was sixteen years old. She obtained her International Baccalaureate in a high school in New York and Bachelor of Science in Chemical Engineering and Bachelor of Arts in Dance at the University of Washington. </p>

                            </section>
                        </div>
                            <div className="row pt-4">
                                <p className="intro">She is curently taking Full-Stack coding boot camp from the University of Washington. She likes to challenge her comfort zone and is excited to learn and transform during this novel journey.</p>
                            </div>
                            <div className="row pt-4">
                                <p className="intro">Besides dancing, as you can already tell, Jessica also loves traveling, cooking, reading, and singing. She loves haning out with friends and family. She recently falls in love with hiking here at the Pacific Northwest.</p>
                            </div>
                        </div>
                        </div>
                            
</footer>
    )
}

export default About;