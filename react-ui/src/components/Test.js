import React from 'react';
import portrait from '../images/portrait.jpg';
import ruby from '../images/languages/ruby.png';
import javascript from '../images/languages/javascript.png';
import react from '../images/languages/react-native.png';
import angular from '../images/languages/angularjs.png';
import css from '../images/languages/css.png';
import html from '../images/languages/html.png';
import facebook from '../images/socialmedia/facebook.png';
import github from '../images/socialmedia/github.png';
import instagram from '../images/socialmedia/instagram.png';
import linkedin from '../images/socialmedia/linkedin.png';
import medium from '../images/socialmedia/medium.png';
import rugby from '../images/projects/rugbyapp.png'
import yardsale from '../images/projects/yardsale.jpg'
import dogapp from '../images/projects/dogapp.png'
import onehundred from '../images/projects/onehundred.png'
import dndtool from '../images/projects/dndtool.png'
import coach from '../images/activities/coach.png'
import dumbbell from '../images/activities/dumbbell.png'
import football from '../images/activities/football.png'
import physics from '../images/activities/physics.png'
import runner from '../images/activities/runner.png'
import videogame from '../images/activities/videogame.png'
import Email from './Email';

export default class Test extends React.Component{

    render() {
        return(
            <div id="Test" style={{backgroundColor: "black"}}>
                <div class="name">
                    Zachary Schulz
                </div>
                <center><div class="frame">
                  <img alt="Portrait" src={portrait}></img>
                </div></center>
                <div class="title">
                    Software Engineer | Developer | Programmer
                </div>
                <div class="techskills">
                    <img src={ruby} alt="Ruby"></img>
                    <img src={javascript} alt="Javascript"></img>
                    <img src={react} alt="React"></img>
                    <img src={angular} alt="Angular"></img>
                    <img src={css} alt="CSS"></img>
                    <img src={html} alt="HTML"></img>
                </div>
                <div class="socialmedia">
                    <div class="activity"><img src={coach} alt="coach"></img>Youth Coach</div>
                    <div class="activity"><img src={dumbbell} alt="dumbbell"></img>Lifter</div>
                    <div class="activity"><img src={football} alt="football"></img>Rugby Player</div>
                    <div class="activity"><img src={physics} alt="physics"></img>B.S. in Physics</div>
                    <div class="activity"><img src={runner} alt="runner"></img>Runner</div>
                    <div class="activity"><img src={videogame} alt="videogame"></img>Gamer</div>
                </div>
                <div class="content">
                    <div class="row" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
                        <div class="projectframe">
                            <a href="https://youtu.be/Np9cskcfYrs" target="_blank" rel="noopener noreferrer">
                                <img src={rugby} alt="rugby"></img>
                                <div class="centered">TRY AWARDED</div>
                            </a>
                        </div>
                        <div class="projectframe">
                            <a href="https://youtu.be/IYj_KxJ1DoY" target="_blank" rel="noopener noreferrer">
                                <img src={yardsale} alt="yardsale"></img>
                                <div class="centered">YARDSALE</div>
                            </a>
                        </div>
                        <div class="projectframe">
                            <a href="https://www.youtube.com/watch?v=i7FJvKJF_Ds" target="_blank" rel="noopener noreferrer">
                                <img src={dogapp} alt="dogapp"></img>
                                <div class="centered">DOG APP</div>
                            </a>
                        </div>
                    </div>
                    <div class="row" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
                        <div class="projectframe">
                        <a href="https://onehundred.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={onehundred} alt="onehundred"></img>
                            <div class="centered">PRACTICE COMPS OF CODE</div>
                        </a>
                        </div>
                        <div class="projectframe">
                            <a href="https://zsdnd-tool.herokuapp.com/home" target="_blank" rel="noopener noreferrer">
                                <img src={dndtool} alt="dndtool"></img>
                                <div class="centered">D&D TOOl</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="email">
                    <Email/>
                </div>
                <div class="socialmedia">
                    <a href="https://www.linkedin.com/in/zachary-schulz-65946663/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn"></img>
                    </a>
                    <a href="https://github.com/zjschulz" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub"></img>
                    </a>
                    <a href="https://www.facebook.com/zachary.schulz.50" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook"></img>
                    </a>
                    <a href="https://www.instagram.com/zachary.schulz.50/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram"></img>
                    </a>
                    <a href="https://medium.com/@zjschulz" target="_blank" rel="noopener noreferrer">
                        <img src={medium} alt="Medium"></img>
                    </a>
                </div>
            </div>
        )
    }

}