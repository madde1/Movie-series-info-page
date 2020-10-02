import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import image from '../../images/heroimg5.png'
import image2 from '../../images/jag3.png'
import image3 from '../../images/movieTv.PNG'
import image4 from '../../images/pong.PNG'
class LandingHome extends Component{
    render(){
        return(
            <div>
                <div id="background" className="img-fluid">
                    <img id ="hero-Img" src={image} className="img-fluid" alt="Person"/>
                </div>
                <section id="puff1" className="ml-5">
                        <h1 className="heading mb-0">Madeleine Hallqvist</h1>
                        <p>Göteborg, Sverige</p>          
                </section>

                <section className="container mt-5 mb-5 pt-2 pb-2">
                <ul class="nav nav-pills row mt-5 mb-5" id="pills-tab" role="tablist">
                        <li class="nav-item col-sm">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profil</a>
                        </li>
                        <li class="nav-item col-sm">
                            <a class="nav-link" id="pills-projekt-tab" data-toggle="pill" href="#pills-projekt" role="tab" aria-controls="pills-projekt" aria-selected="false">Projekt</a>
                        </li>
                        <li class="nav-item col-sm">
                            <a class="nav-link" id="pills-ommig-tab" data-toggle="pill" href="#pills-ommig" role="tab" aria-controls="pills-ommig" aria-selected="false">Om mig</a>
                        </li>
                        <li class="nav-item col-sm">
                            <a class="nav-link " id="pills-kontakt-tab" data-toggle="pill" href="#pills-kontakt" role="tab" aria-controls="pills-kontakt" aria-selected="true">Kontakt</a>
                        </li>
                    </ul>
                   
                    <div class="tab-content" id="pills-tabContent">
                        {/** ------------ Profile Part ------------- */}
                        <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                       <section>
                           <div className="container-xl ">
                            <div className="row">
                                <div className="col-sm shadow p-5 m-2 ">
                                    <h5>Erfarenhet</h5>
                                    <h6 className="mb-0">Fullstack utvecklare - SEO-Doktorn</h6>
                                    <p className="font-weight-light mb-0">07/2019-10/2019</p>
                                    <p className="mb-0">Arbete med utveckling och design av hemsidor i CMS verktyget Wordpress. </p>
                                    <h6 className="mt-2 mb-0">Administratör- Kontaktpunkten Sahlgrenska</h6>
                                    <p className="font-weight-light mb-0">05/2014-06/2019</p>
                                    <p className="mb-0">Arbete med utveckling och design av hemsidor i CMS verktyget Wordpress. </p>
                                </div>
                                <div className="col-sm shadow p-5 m-2 ">
                                    <h5>Utbildning</h5>
                                    <h6 className="mb-0">Java och Webbutvecklare</h6>
                                    <p className="mb-0">Campus Mölndal</p>
                                    <p className="font-weight-light">2018-2020</p>
                                    <h6 className="mb-0">Estet programmet</h6>
                                    <p className="mb-0">Fässbergsgymnasiet</p>
                                    <p className="font-weight-light">2009-2012</p>
                                </div>
                                <div id="profile-col1" className="col-s shadow p-5 m-2">
                                    <h5>Nuvarande Anställning:</h5>
                                    <h6 className="mb-0">Arbetslös</h6>
                                    <p className="font-weight-light mb-0">07/2020 - nu</p>
                                    <p>Letar arbete som fullstack<br></br> utvecklare/Java utvecklare  </p>
                                </div>
                                <div className="col-s shadow p-5 m-2 ">
                                    <h5>Färdigheter</h5>
                                    <div className="row">
                                        <div className="col-s m-2"> <i class="fab fa-java fa-4x" data-toggle="tooltip" data-placement="top" title="Java"></i> </div>
                                        <div className="col-s m-2"> <i class="fab fa-js fa-4x" data-toggle="tooltip" data-placement="top" title="JavaScript"></i></div>
                                        <div className="col-s m-2"> <i class="fab fa-python fa-4x" data-toggle="tooltip" data-placement="top" title="Pyhton"></i></div>
                                        <div className="col-s m-2"><i class="fab fa-html5 fa-4x" data-toggle="tooltip" data-placement="top" title="HTML5"></i></div>
                                        <div className="col-s m-2"> <i class="fab fa-css3-alt fa-4x" data-toggle="tooltip" data-placement="top" title="CSS3"></i></div>
                                        <div className="col-s m-2"><i class="fab fa-sass fa-4x" data-toggle="tooltip" data-placement="top" title="Sass"></i></div>
                                        <div className="col-s m-2"><i class="fab fa-php fa-4x" data-toggle="tooltip" data-placement="top" title="Php"></i></div>
                                        <div className="col-s m-2">   <i class="fas fa-database fa-4x" data-toggle="tooltip" data-placement="top" title="MySQL"></i></div>
                                        <div className="col-s m-2"><i class="fab fa-adobe fa-4x" data-toggle="tooltip" data-placement="top" title="Photoshop,Premier Pro, InDesign"></i></div>
                                        <div className="col-s m-2"> <i class="fab fa-wordpress fa-4x" data-toggle="tooltip" data-placement="top" title="Wordpress"></i></div>
                                    
                                    </div>
                                </div>
                        
                           </div>
                           </div>
                       </section>
                        </div>
                        
                        {/** ------------ Projekt Part ------------- */}
                        <div class="tab-pane fade" id="pills-projekt" role="tabpanel" aria-labelledby="pills-projekt-tab"> 
                            <section>
                                <div className="container pt-5 pb-5 pl-5 pr-5">
                                <h2 className="text-center">Mina Projekt</h2>
                                <p className="text-center">Även på min fritid gillar jag att hålla på med programmering. Här nedan hittar du några projekt jag håller på med.</p>
                                    <div class="row">
                                    <div className="col-sm shadow p-4">
                                       <Link to="/movie-tvseries-search"><img className="img-fluid" src={image3} alt="Movie and tv series page"/></Link>
                                        <p className="mt-3">En hemsida för att söka ut filmer och tv serier som hämtas från API:et OMDB</p>
                                        <a className="btn btn-outline-secondary" href="https://github.com/madde1/madde/tree/master/src/components/home-movie" target="_blank" rel="noopener noreferrer">Github repo</a>
                                    </div>
                                    <div className="col-sm shadow p-4">
                                        <img className="img-fluid" src={image4} alt="Pong"/>
                                        <p className="mt-3">Ett ping pong spel gjort i Java och Java Swing för layout.</p>
                                        <a className="btn btn-outline-secondary" href="https://github.com/madde1/PongGame" target="_blank" rel="noopener noreferrer">Github repo</a>
                                    </div>
                                    </div>    
                                    </div>               
                            </section>
                        </div>
                        {/** ------------ About me Part ------------- */}
                        <div class="tab-pane fade" id="pills-ommig" role="tabpanel" aria-labelledby="pills-ommig-tab">
                            <section id="bg-black" className="mt-5 text-light shadow-lg">
                                <div className="container pt-5 pb-5 pl-5 pr-5 ">
                                    <div className="row">
                                        <div className="col-sm">
                                        <h2 className="text-center">Om mig</h2>
                                            <h5>Vem är jag?</h5>
                                            <p className="text-left ">Jag heter Madeleine, bor i Göteborg tillsammans med min sambo.
                                                Jag håller på och utbildar mig till Fullstack Utvecklare. I Maj - 2020 tar jag min examen och 
                                                får äntligen få komma ut i arbetslivet och använda mina kunskaper. 
                                                Programmering och jag går hand i hand. Man får vara kreativ och jobba med problemlösning, kan ju inte bli bättre! 
                                            </p>
                                            <h5>Mina hobbys</h5>
                                            <p>På min fritid är det inte bara programmering som gäller. Jag gillar även att resa och se världen, fotografera, måla, spela datorspel.
                                                Men själv klart även umgås med nära och kära. </p>
                                        
                                            <h5>Lite om sidan</h5>
                                            <p>Hemsidan är gjord i React JS. Här finns lite olika projekt jag arbetar med på min fritid. Länkar till min LinkedIn, Github bland annat. </p>
                                        </div>
                                        <div className="col-sm">
                                            <img src={image2} className="img-fluid" alt="Person"/>
                                        </div>
                                    </div>
                                </div>

                                </section>
                        </div>

                        <div class="tab-pane fade" id="pills-kontakt" role="tabpanel" aria-labelledby="pills-kontakt-tab">
                            <div className="container">
                            <h4 class="ribbon">
                                <strong class="ribbon-content">Kul att du vill komma i kontakt med mig!</strong>
                            </h4>
                                <div id="contact-puff" className="shadow-lg p-3 mb-5 bg-white rounded text-center">
                                <p className="marg-pad">Antingen kan du skicka ett mail eller kontakta mig via LinkedIn!</p>
                                <i className="fas fa-envelope" id="icon-size-50"></i> 
                               <p><a className="contact-link" href="mailto:madeleinehallqvist1@outlook.com">Email</a></p>
                                <i class="fab fa-linkedin" id="icon-size-50" ></i> 
                               <p><a className= "contact-link" href="https://www.linkedin.com/in/madeleine-hallqvist-a6b08981/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                               <i className="fab fa-github-square" id="icon-size-50" ></i>
                                <p className="marg-pad"><a className="contact-link" href="https://github.com/madde1" rel="noopener noreferrer">Github </a></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
          
                </section>
              
                

               
            </div>
        )
    }
}

export default LandingHome