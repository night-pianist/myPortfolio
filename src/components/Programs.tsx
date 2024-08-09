import Navbar from './Navbar';
import AnimatedText from './AnimatedWelcome';
import { motion } from 'framer-motion';

// images
import opennote from '../media/opennote.png'

// type ProjectCardProps = {
//     title: string;
//     description: string;
//     technologies: string;
//     imageSrc: string;
//     imageAlt: string;
// };

// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, imageSrc, imageAlt }) => (
//     <div className="bg-white text-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
//         <img src={imageSrc} alt={imageAlt} className="w-full h-48 object-cover rounded-t-lg mb-4" />
//         <h3 className="text-2xl font-bold mb-2">{title}</h3>
//         <p className="text-lg mb-4">{description}</p>
//         <p className="text-sm text-gray-700">Technologies: {technologies}</p>
//         <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
//             View Project
//         </button>
//     </div>
// );

interface GalleryImage {
    src: string;
    alt: string;
    gridColumn?: string; // Specify grid column span if needed
    gridRow?: string; // Specify grid row span if needed
}

const images: GalleryImage[] = [
    { src: opennote, alt: 'Image 1', gridColumn: 'span 2', gridRow: 'span 2' },
    { src: opennote, alt: 'Image 2' },
    { src: opennote, alt: 'Image 3', gridColumn: 'span 2' },
    // Add more images with different gridColumn/gridRow values
];


const Programs = () => {
    return (
        <div className="programs bg-dark-indigo">
            <Navbar />

            <div className="container mx-auto text-center py-8">
                <div className="flex justify-center items-center" style={{ marginBottom: '5%', marginTop: '5%'}}>
                    <h1 className="font-dancingscript text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        <AnimatedText text="coding to..." speed={0.05}/>
                    </h1>
                </div> *

                {/* Revolutionize Learning Section */}
                {/* <section className="text-white font-varelaround">
                    <h2 className="text-5xl font-bold">revolutionize education</h2>
                    <p className="mt-4 text-xl">personalizing learning through technology</p> 
                    <div className="flex justify-center mt-[2%]">
                        <ProjectCard3 title="Project 1" description="A project description." technologies="React, TypeScript" imageSrc={opennote} imageAlt='opennote' />
                    </div>
                </section> */}
                <div className="grid grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg"
                            style={{
                                gridColumn: image.gridColumn,
                                gridRow: image.gridRow,
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Programs;

/* coding to.. 

revolutionize learning: 1st place touch screen / 1st use of ai in education

raise mental health awareness: popular vote 

empower women

grocery shopping simplified

*/