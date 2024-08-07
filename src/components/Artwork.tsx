import Navbar from './Navbar';
import React from 'react';
import AnimatedText from './AnimatedWelcome';

// images
import img1 from '../media/northernlights.png';
import img2 from '../media/acotar.png';
import img3 from '../media/waterfall.png';
import img4 from '../media/ocean.png';
import img5 from '../media/dreams.png';
import img6 from '../media/tcp.png';
import img7 from '../media/tear.png';
import img8 from '../media/pastel.png';
import img9 from '../media/bridge.png';


const images = [
  { src: img1, alt: 'Image 1', description: 'Description 1' },
  { src: img2, alt: 'Image 2', description: 'Description 2' },
  { src: img3, alt: 'Image 3', description: 'Description 3' },
  { src: img4, alt: 'Image 4', description: 'Description 4' },
  { src: img5, alt: 'Image 5', description: 'Description 5' },
  { src: img6, alt: 'Image 6', description: 'Description 6' },
  { src: img7, alt: 'Image 7', description: 'Description 7' },
  { src: img8, alt: 'Image 8', description: 'Description 8' },
  { src: img9, alt: 'Image 9', description: 'Description 9' },
];

const Creations = () => {
    return ( 
        <div className="artwork bg-dark-indigo">
            <Navbar /> 

            <div className="container mx-auto text-center py-8">
                <div className="flex justify-center items-center" style={{ marginBottom: '5%', marginTop: '7%'}}>
                    <h1 className="font-dancingscript text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        <AnimatedText text="creativity in imagination" />
                    </h1>
                </div>

                <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg group"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg p-4">{image.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
     );
}
 
export default Creations;