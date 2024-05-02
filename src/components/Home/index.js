import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudTag from '../CloudTag';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    let nameText = " Phuong";
    const strName = nameText.split("");
    let nameJob = "Backend developer";
    const strJob = nameJob.split("");

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

    //use Gsap
    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(ScrollTrigger)
    const text = useRef()
    const cloudBoard = useRef()

    useGSAP(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: cloudBoard.current,
                    pin: true,
                    start: "top top",
                    end: "+=300%",
                    //markers: true,
                    scrub: 1,
                },
                defaults: {
                    ease: "none",
                },
            })
            .to(
                document.body,
                {
                    delay: 0.3,
                    backgroundColor: '#ffffff',
                },
                "start"
            ).to(
                text.current, {
                scale: 5,
            },
                'start'
            ).to(
                text.current, {
                opacity: 0,
            },
                'start'
            ).to(
                ".cloud", {
                scale: 5
            }, "start"
            ).to(
                ".cloud", {
                opacity: 0
            }, "start"
            )
            .to(
                ".cardImage",
                {
                    delay: 0.4,
                    opacity: 1,
                },
                "start"
            )
    })

    useEffect(() => {
        setTimeout(() => {
            toast("You can scroll to see more detail", {
                position: 'bottom-right',
                type: 'info',
                theme: 'dark'
            })

        }, 5000)
    }, [])


    return (
        <div className='container home-page'>
            <div ref={text} className='text'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={strName} idx={17} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={strJob} idx={22} />

                </h1>
                <h2>Backend developer</h2>
                <Link to="/contact" className='contact-button'>CONTACT ME</Link>

            </div>
            <div className='cloudBoard' ref={cloudBoard}>
                <div className='cloud'><CloudTag /></div>
                <div className='cardImage'>
                    <img src={require('../../assets/images/HuynhHoangPhuong-CE161062.JPG')} alt='Phuong' className='myImg' />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home