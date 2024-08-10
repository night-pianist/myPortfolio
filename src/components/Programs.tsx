import Navbar from './Navbar';
import AnimatedText from './AnimatedWelcome';
import { motion } from 'framer-motion';
import '../styling/styles.css';

// images
import opennote from '../media/opennote.png'
import blob from '../media/blob.png'
import swe from '../media/swe.png'

type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string;
    imageSrc: string;
    imageAlt: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, imageSrc, imageAlt }) => (
    <div 
        className="bg-white text-black p-4 rounded-lg relative h-96"
        style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="inset-0 bg-black opacity-20 z-0"></div>

        <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-lg mb-4">{description}</p>
            <p className="text-sm text-gray-700">technologies: {technologies}</p>
            <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                view project
            </button>
        </div>
    </div>
);


const Programs = () => {
    const toOpennote = () => { window.location.href = 'https://opennote.me/' }
    
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
                    <div 
                        className="relative w-full transition-filter duration-300 ease-in-out hover:drop-shadow-blue-glow"
                        onClick={toOpennote}
                    > {/* opennote */}
                        <img
                            src={opennote} 
                            alt="opennote" 
                            className="rounded-2xl"                
                        /> 
                        <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%)", }}></div> {/* overlay */}
                        
                        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            {/* Title */}
                            <div className="text-white text-xl font-bold mb-4 flex justify-center">
                                <span className="bg-indigo-600 p-2 rounded-lg">
                                    revolutionize learning
                                </span>
                            </div>
                            {/* Description and Arrow */}
                            <div className="flex items-end justify-between">
                            <div className="text-white bg-black bg-opacity-70 p-2 rounded-md">
                                Short description goes here
                            </div>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16l4-4m0 0l-4-4m4 4H3"></path>
                                </svg>
                            </a>
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
                        </div>
                        <div className="relative w-full flex transition-filter duration-300 ease-in-out hover:drop-shadow-blue-glow">
                            <img
                                src={swe} 
                                alt="opennote" 
                                className="rounded-xl"                
                            /> {/* mentorspace */}
                            <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%)", }}></div> {/* overlay */}
                        </div>
                    </div>

                    {/* <ProjectCard title='opennote' description='' technologies='' imageSrc={opennote} imageAlt=''/> */}
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