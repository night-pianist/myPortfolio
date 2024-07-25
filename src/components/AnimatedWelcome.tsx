import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styling/landing.css';

interface AnimatedTextProps {
    text: string;
  }  

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Optional: only trigger the animation once
        threshold: 0.1,    // Trigger when 10% of the element is visible
    });
    return (
        <div
            ref={ref}
            className={`flex space-x-1 ${inView ? 'animate-fadeIn' : ''}`}
        >
        {text.split('').map((char, index) => (
            <span
            key={index}
            className={`inline-block ${inView ? 'opacity-100' : 'opacity-0'} animate-fadeInLeft`}
            style={{ animationDelay: `${index * 0.1}s` }}
            >
            {char === ' ' ? '\u00A0' : char}
            </span>
        ))}
        </div>
    // <div className="flex space-x-1">
    //   {text.split('').map((char: string, index: number) => (
    //      <span
    //         key={index}
    //         className="inline-block opacity-0 animate-fadeInLeft"
    //         style={{ animationDelay: `${index * 0.1}s` }}
    //     >
    //         {char === ' ' ? '\u00A0' : char}
    //     </span>
    //   ))}
    // </div>
    );
};

export default AnimatedText;
