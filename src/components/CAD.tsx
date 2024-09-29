import Navbar from './Navbar';
import React, { useState, useEffect, useRef } from 'react';
import AnimatedText from './AnimatedWelcome';
import '../styling/styles.css';

// images
import img1 from '../media/cad/ewh.png';
import img2 from '../media/cad/booknook.png';
import img3 from '../media/cad/batarang.png';
import img4 from '../media/cad/piano.png';
import img5 from '../media/cad/satellite.png';
import img6 from '../media/cad/snowman.png';
import img7 from '../media/cad/gingerbread.png';
import img8 from '../media/cad/padHolder.png';
import img9 from '../media/cad/octopus.png';

interface Image {
    src: string;
    alt: string;
    title: string;
    date: string;
    software: string;
    description: string;
    path: string;
  }  

const images: Image[] = [
    { src: img1, alt: 'Image 1', title: 'oxygen tank encasing', date: 'may 2022', software: 'fusion360', description: 'I designed this for an engineering competition I won :)', path: 'encasing' },
    { src: img2, alt: 'Image 2', title: 'book nook', date: 'january 2024', software: 'fusion360', description: 'I love reading books, and I wanted to design a book nook I could use for my bookshelf that illustrated a setting from a book', path: 'book-nook' },
    { src: img3, alt: 'Image 3', title: 'batarang', date: 'june 2023',software: 'fusion360', description: 'I designed this for a friend', path: 'batarang' },
    { src: img4, alt: 'Image 1', title: 'piano', date: 'july 2023', software: 'fusion360', description: 'I designed this because I love playing piano', path: 'encasing' },
    { src: img5, alt: 'Image 2', title: 'satellite', date: 'august 2023', software: 'fusion360', description: 'I was inspired by an origami satellite I saw', path: 'book-nook' },
    { src: img6, alt: 'Image 3', title: 'snowman', date: 'november 2023',software: 'fusion360', description: 'During the holiday season, I wanted to design decor', path: 'batarang' },
    { src: img7, alt: 'Image 1', title: 'gingerbread', date: 'march 2024', software: 'fusion360', description: 'I wanted to learn more about joints, so I designed this based on an image of a CAD I found online', path: 'encasing' },
    { src: img8, alt: 'Image 2', title: 'holder', date: 'november 2023', software: 'fusion360', description: 'I wanted to design something practical', path: 'book-nook' },
    { src: img9, alt: 'Image 3', title: 'octopus', date: 'april 2024',software: 'fusion360', description: 'I designed this for my dorm decor', path: 'batarang' },
    
  ]; 

const CAD = () => {
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
        <div className="cad bg-dark-indigo">
            <Navbar />

            <div className="container mx-auto text-center py-8">
                <div className="flex justify-center items-center" style={{ marginBottom: '5%', marginTop: '5%'}}>
                    <h1 className="font-dancingscript text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                        <AnimatedText text="engineering and design..." speed={0.04}/>
                    </h1>
                </div>
                <div className={`${fadeIn ? 'fade-in' : ''}`}>
                  <div className="grid grid-cols-10 gap-4 ml-4 mr-4">
                    {/* First image: horizontal, spans across the first 6 columns */}
                    <div className="col-span-6">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                        onClick={() => handleGalleryImageClick(0)}
                      >
                        <img
                          src={images[0].src}
                          alt={images[0].alt}
                          className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{images[0].title}</p>
                        </div>
                      </div>
                    </div>

                    {/* Second image: vertical, spans across 4 columns and 2 rows */}
                    <div className="col-span-4 row-span-2">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-full"
                        onClick={() => handleGalleryImageClick(1)}
                      >
                        <img
                          src={images[1].src}
                          alt={images[1].alt}
                          className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{images[1].title}</p>
                        </div>
                      </div>
                    </div>

                    {/* Third image: horizontal, spans across the first 6 columns */}
                    <div className="col-span-6">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                        onClick={() => handleGalleryImageClick(2)}
                      >
                        <img
                          src={images[2].src}
                          alt={images[2].alt}
                          className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{images[2].title}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 ml-4 mr-4">
                    <div className="col-span-1">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
                        onClick={() => handleGalleryImageClick(3)}
                      >
                        <img
                          src={images[3].src}
                          alt={images[3].alt}
                          className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{images[3].title}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
                        onClick={() => handleGalleryImageClick(4)}
                      >
                        <img
                          src={images[4].src}
                          alt={images[4].alt}
                          className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{images[4].title}</p>
                        </div>
                      </div>
                    </div>

                    {/* Fourth row: 3 more images with equal spacing */}
                    <div className="col-span-1">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
                        onClick={() => handleGalleryImageClick(5)}
                      >
                        <img
                          src={images[5].src}
                          alt={images[5].alt}
                          className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{images[5].title}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
                        onClick={() => handleGalleryImageClick(6)}
                      >
                        <img
                          src={images[6].src}
                          alt={images[6].alt}
                          className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{images[6].title}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
                        onClick={() => handleGalleryImageClick(7)}
                      >
                        <img
                          src={images[7].src}
                          alt={images[7].alt}
                          className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{images[7].title}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
                        onClick={() => handleGalleryImageClick(8)}
                      >
                        <img
                          src={images[8].src}
                          alt={images[8].alt}
                          className="w-full h-full object-cover transform group-hover:scale-100 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <p className="text-white sm:text-sm md:text-md lg:text-lg p-4 font-varelaround">{images[8].title}</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>



                  <div className={`m-[7%] ${fadeIn ? 'fade-in' : ''}`}>
                        <h1 className="font-dancingscript text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            more about each design...
                        </h1>
                    </div>

                    <div className={`container mx-auto text-center ${fadeIn ? 'fade-in' : ''}`}> 
                        {images.map((image, index) => (
                        <div
                            key={index}
                            id={image.path}
                            ref={(el) => (descriptionRefs.current[index] = el)}
                            className="my-8 mr-8 ml-8 flex flex-col items-center font-varelaround text-white"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full ml-4 mr-4 max-w-4xl h-auto rounded-lg shadow-lg mb-4"
                            />
                            <h2 className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-bold italic p-[1%]">{image.title}</h2>
                            <h3 className="text-xs sm:text-md md:text-xl lg:text-2xl pb-[1%] w-2/3">{image.description}</h3>
                            <h3 className="text-xs sm:text-md md:text-lg lg:text-xl pb-[5%]">completed: {image.date}</h3>
                        </div>
                        ))}
                    </div>

                    <div className="m-[3%]">
                        <h1 className="mb-[2%] font-dancingscript text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            more to come... :)
                        </h1>
                    </div>

                </div>

            </div>



        </div> 
    );
}
 
export default CAD;