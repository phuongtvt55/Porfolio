import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGit, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava'
export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const strName = 'About me'
    const strSplit = strName.split("")

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    setTimeout(function () {
        const elements = document.getElementsByClassName('text-animate-hover');

        if (elements.length !== 0) {
            //console.log(elements);
            for (let i = 0; i < elements.length; i++) {
                elements[i].addEventListener('animationend', function (e) {
                    elements[i].classList.remove('animated');
                });

                elements[i].addEventListener('mouseover', function (e) {
                    elements[i].classList.add('animated')
                })
            }
        }
    }, 500);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={strSplit} idx={15} />
                </h1>
                <p>Movie cry volume forest new port degree century one arrange strip police fun open shout belong man beauty burn furniture power neighborhood cup least camera last charge those hurt kind nearby sent born difficulty belt neck habit iron excitement active since directly thumb noise pour wide thus verb younger went.</p>
            </div>
            <div className='cube'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faGit} />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJava} />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                </div>
            </div>
        </div>
    )
}
