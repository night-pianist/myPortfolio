import Navbar from './Navbar';
import React, { useState, useEffect, useRef } from 'react';
import AnimatedText from './AnimatedWelcome';
import '../styling/styles.css';

// images
import img1 from '../media/art/northernlights.png';
import img2 from '../media/art/acotar.png';
import img3 from '../media/art/waterfall.png';
import img4 from '../media/art/ocean.png';
import img5 from '../media/art/dreams.png';
import img6 from '../media/art/tcp.png';
import img7 from '../media/art/tear.png';
import img8 from '../media/art/pastel.png';
import img9 from '../media/art/bridge.png';

interface Image {
    src: string;
    alt: string;
    title: string;
    medium: string;
    date: string;
    description: string;
    path: string;
  }  

const images: Image[] = [
    { src: img1, alt: 'Image 1', title: 'northern lights', medium: 'prisma colors', date: 'july 2021', description: 'seeing northern lights is near the top of my bucket list, and I wanted to bring my dreams to paper and highlight the light and dark contrast', path: 'northern-lights' },
    { src: img2, alt: 'Image 2', title: 'fantasy', medium: 'digital', date: 'august 2021', description: 'I love reading fantasy books and wanted to illustrate an imaginary city with fantasical shooting stars in a colorful sky', path: 'fantasy' },
    { src: img3, alt: 'Image 3', title: 'bright days', medium: 'prisma colors', date: 'july 2023', description: 'I drew this after getting back from a family trip where I saw waterfalls and wanted to capture the vacation in my own art style', path: 'bright-days' },
    { src: img4, alt: 'Image 4', title: 'ocean', medium: 'prisma colors', date: 'october 2021', description: 'this was based on a picture of the ocean I found online-I wanted to try capturing the clear water from the waves', path: 'ocean' },
    { src: img5, alt: 'Image 5', title: 'dreams', medium: 'prisma colors', date: 'october 2021', description: 'I was inspired to draw this by a sunset I saw; it was meant to be just the sky and ocean, but I decided to try adding a cliff with a river', path: 'dreams' },
    { src: img6, alt: 'Image 6', title: 'faerie forest', medium: 'prisma colors', date: 'june 2022', description: 'this is another drawing inspired by a fantasy book I read and I wanted to focus more on drawing trees and nature', path: 'faerie-forest' },
    { src: img7, alt: 'Image 7', title: 'reflection', medium: 'digital', date: 'november 2021', description: 'I wanted to try a new concept and utilize all the extra functionality (flexible mirroring, layering, blending, etc.) that comes with digital painting', path: 'reflection' },
    { src: img8, alt: 'Image 8', title: 'pastel days', medium: 'prisma colors', date: 'september 2023', description: 'I envisioned a pastel theme scene that was colorful and striking yet calming', path: 'pastel-days' },
    { src: img9, alt: 'Image 9', title: 'bridge', medium: 'prisma colors', date: 'march 2024', description: 'I wanted to work on drawing bodies of water, but I wanted to make it more detailed so I added a bridge and some grass', path: 'bridge' },
  ];  

const Creations = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const descriptionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            console.log('IntersectionObserver entry:', entry); // Logging each entry
            if (entry.isIntersecting) {
                const id = entry.target.id;
                console.log('Updating URL to:', id); // Logging URL update
                window.history.replaceState(null, '', `#${id}`);
            }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    descriptionRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        descriptionRefs.current.forEach((ref) => {
          if (ref) observerRef.current?.unobserve(ref);
        });
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = descriptionRefs.current.find((el) => el && el.id === targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleGalleryImageClick = (index: number) => {
    const image = images[index];
    const targetElement = descriptionRefs.current[index];
    if (targetElement) {
        console.log('Image clicked:', image.title); // Logging image click
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `#${image.path}`);
    }
  };    

    useEffect(() => {
        setFadeIn(true);
        descriptionRefs.current = images.map(() => null); // initialize array
    }, []); 

    return ( 
        <div className="artwork bg-dark-indigo">
            <Navbar /> 

            <div className="container mx-auto text-center py-8">
                <div className="flex justify-center items-center" style={{ marginBottom: '5%', marginTop: '5%'}}>
                    <h1 className="font-dancingscript text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        <AnimatedText text="creativity and imagination" speed={0.05}/>
                    </h1>
                </div>
                <div className={`${fadeIn ? 'fade-in' : ''}`}>
                    <div className="grid grid-cols-3 gap-4"> 
                    {images.map((image, index) => ( // collage of drawings
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                            onClick={() => handleGalleryImageClick(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                                <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{image.title}</p>
                            </div>
                        </div>
                    ))}
                    </div>

                    <div className={`m-[7%] ${fadeIn ? 'fade-in' : ''}`}>
                        <h1 className="font-dancingscript text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            more about each drawing...
                        </h1>
                    </div>

                    <div className={`container mx-auto text-center ${fadeIn ? 'fade-in' : ''}`}> 
                        {images.map((image, index) => (
                        <div
                            key={index}
                            id={image.path}
                            ref={(el) => (descriptionRefs.current[index] = el)}
                            className="my-8 flex flex-col items-center font-varelaround text-white"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full max-w-4xl h-auto rounded-lg shadow-lg mb-4"
                            />
                            <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold italic p-[1%]">{image.title}</h2>
                            <h3 className="sm:text-md md:text-xl lg:text-2xl pb-[1%] w-2/3">{image.description}</h3>
                            <h3 className="sm:text-md md:text-lg lg:text-xl">medium: {image.medium}</h3>
                            <h3 className="sm:text-md md:text-lg lg:text-xl pb-[5%]">completed: {image.date}</h3>

                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Creations;