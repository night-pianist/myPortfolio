import Navbar from './Navbar';
import React, { useState, useEffect, useRef } from 'react';
import AnimatedText from './AnimatedWelcome';
import '../styling/styles.css';

// images
import img1 from '../media/cad/ewh.png';
import img2 from '../media/cad/booknook.png';
import img3 from '../media/cad/batarang.png';

interface Image {
    src: string;
    alt: string;
    title: string;
    date: string;
    description: string;
    path: string;
  }  

const images: Image[] = [
    { src: img1, alt: 'Image 1', title: 'oxygen tank encasing', date: 'may 2022', description: 'I designed this for an engineering competition I won :)', path: 'encasing' },
    { src: img2, alt: 'Image 2', title: 'book nook', date: 'january 2024', description: 'I love reading books, and I wanted to design a book nook I could use for my bookshelf that illustrated a setting from a book', path: 'book-nook' },
    { src: img3, alt: 'Image 3', title: 'batarang', date: 'june 2023', description: 'I designed this for a friend', path: 'batarang' },
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
                    <h1 className="font-dancingscript text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        <AnimatedText text="engineering and design..." speed={0.04}/>
                    </h1>
                </div>
                <div className={`${fadeIn ? 'fade-in' : ''}`}>
                  <div className="grid grid-cols-10 gap-4">
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

                    {/* Second image: vertical, spans across 3 columns and takes up 2 rows */}
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

                    {/* Third image: horizontal, spans across the first 7 columns on the next row */}
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
                            className="my-8 flex flex-col items-center font-varelaround text-white"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full max-w-4xl h-auto rounded-lg shadow-lg mb-4"
                            />
                            <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold italic p-[1%]">{image.title}</h2>
                            <h3 className="sm:text-md md:text-xl lg:text-2xl pb-[1%] w-2/3">{image.description}</h3>
                            <h3 className="sm:text-md md:text-lg lg:text-xl pb-[5%]">completed: {image.date}</h3>
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