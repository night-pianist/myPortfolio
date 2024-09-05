import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AnimatedText from './AnimatedWelcome';
import { motion } from 'framer-motion';
import '../styling/styles.css';

// images
import opennote from '../media/programs/opennote.png'
import blob from '../media/programs/blob.png'
import swe from '../media/programs/swe.png'

const Programs = () => {
    const toOpennote = () => { window.location.href = 'https://opennote.me/' }
    const toOpennoteDevpost = () => { window.location.href = 'https://devpost.com/software/opennote-h4xjnk' }
    const toBlob = () => { window.location.href = 'https://blobbyblob.vercel.app/intro.html' }
    const toBlobDevpost = () => { window.location.href = 'https://devpost.com/software/b-l-o-b' }
    const toSWEDevpost = () => { window.location.href = 'https://devpost.com/software/mentorspace-k9ejyb' }

    // const [fadeIn, setFadeIn] = useState(false);
    // useEffect(() => {
    //     setFadeIn(true);
    //     descriptionRefs.current = images.map(() => null); // initialize array
    // }, []); 

    return (
        <div className="programs bg-dark-indigo">
            <Navbar /> 

            <div className="main-content container mx-auto text-center py-8"> 
                <div className="flex justify-center items-center" style={{ marginBottom: '5%', marginTop: '5%'}}>
                    <h1 className="font-dancingscript text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        <AnimatedText text="programming to..." speed={0.05}/> 
                    </h1>
                </div> 
                
                <div className="grid grid-cols-1 gap-4"> {/* displays projects */}
                    <div className="relative w-full transition-filter duration-300 ease-in-out hover:drop-shadow-blue-glow">
                        <div className="opennote-img" onClick={toOpennote} style={{ zIndex: 1 }}>
                            <img
                                src={opennote} 
                                alt="opennote" 
                                className="rounded-2xl" 
                                onClick={toOpennote}               
                            /> 
                            <div className="absolute inset-0 z-0" onClick={toOpennote} style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%)", }}></div> {/* overlay */}
                        </div>
                        
                        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <div className="flex justify-center">
                                <span className="text-white font-varelaround bg-black bg-opacity-70 p-[1%] rounded-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic mb-4">
                                    ...revolutionize learning
                                </span>
                            </div>
                            <div className="flex ">
                                <div className="font-varelaround text-white sm:text-sm md:text-md lg:text-lg bg-black bg-opacity-70 p-2 mr-[1%] rounded-md hover:italic cursor-pointer" onClick={toOpennoteDevpost}>
                                    best use of ai in education @ la hacks 2024 
                                </div>
                                <div className="font-varelaround text-white bg-black bg-opacity-70 p-2 mr-[1%] rounded-md cursor-pointer">
                                    <svg className="w-6 h-6 text-white hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={toOpennote}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16l4-4m0 0l-4-4m4 4H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative w-full flex transition-filter duration-300 ease-in-out hover:drop-shadow-blue-glow">
                            <img
                                src={blob} 
                                alt="opennote" 
                                className="rounded-xl"                
                            /> {/* blob */}
                            <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%)", }}></div> {/* overlay */}
                            
                            <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <div className="flex justify-center">
                                    <span className="text-white font-varelaround bg-black bg-opacity-70 p-[1%] rounded-lg sm:text-md md:text-lg lg:text-xl font-bold italic mb-4">
                                        ...raise mental health awareness
                                    </span>
                                </div>
                                <div className="flex ">
                                    <div className="font-varelaround text-white sm:text-xs md:text-sm lg:text-md bg-black bg-opacity-70 p-2 mr-[1%] rounded-md hover:italic cursor-pointer" onClick={toBlobDevpost}>
                                        popular vote @ ucla hack2impact 2024 
                                    </div>
                                    <div className="font-varelaround text-white bg-black bg-opacity-70 p-2 mr-[1%] rounded-md cursor-pointer">
                                        <svg className="w-6 h-6 text-white hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={toBlob}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16l4-4m0 0l-4-4m4 4H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full flex transition-filter duration-300 ease-in-out hover:drop-shadow-blue-glow">
                            <img
                                src={swe} 
                                alt="opennote" 
                                className="rounded-xl"                
                            /> {/* mentorspace */}
                            <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%)", }}></div> {/* overlay */}
                            <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <div className="flex justify-center">
                                    <span className="text-white font-varelaround bg-black bg-opacity-70 p-[1%] rounded-lg sm:text-md md:text-lg lg:text-xl font-bold italic mb-4">
                                        ...empower women in STEM
                                    </span>
                                </div>
                                <div className="flex ">
                                    <div className="font-varelaround text-white sm:text-xs md:text-sm lg:text-md bg-black bg-opacity-70 p-2 mr-[1%] rounded-md hover:italic cursor-pointer" onClick={toBlobDevpost}>
                                        venushacks 2024  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-[3%]">
                        <h1 className="mb-[2%] font-dancingscript text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            more to come...
                        </h1>
                        <p className="font-dancingscript text-white sm:text-3xl md:text-4xl lg:text-5xl">
                            check out my <a href="https://github.com/night-pianist" className="font-bold text-light-blue">github</a> for updates :)
                        </p>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Programs;

/* coding to.. 

https://ed.studio/

revolutionize learning: 1st place touch screen / 1st use of ai in education

raise mental health awareness: popular vote 

empower women

grocery shopping simplified

*/

{/* Revolutionize Learning Section */}
{/* <section className="text-white font-varelaround">
    <h2 className="text-5xl font-bold">revolutionize education</h2>
    <p className="mt-4 text-xl">personalizing learning through technology</p> 
    <div className="flex justify-center mt-[2%]">
        <ProjectCard3 title="Project 1" description="A project description." technologies="React, TypeScript" imageSrc={opennote} imageAlt='opennote' />
    </div>
</section> */}