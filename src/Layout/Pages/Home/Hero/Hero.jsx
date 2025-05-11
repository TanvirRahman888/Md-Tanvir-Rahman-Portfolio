import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-1/2 border-2 mt-12 border-amber-500 rounded-xl" id='about'>
            <div className="hero-content grid grid-cols-1 lg:grid-cols-3 ">
                <img
                    src="https://i.imgur.com/u5WeD1Q.jpeg"
                    className=" rounded-lg shadow-2xl "
                />
                <div className='col-span-2'>
                    <h1 className="text-5xl font-bold"><span className='text-amber-500'>M</span>d <span className='text-amber-500'>T</span>anvir <span className='text-amber-500'>R</span>ahman</h1>
                    <h2 className="text-3xl font-medium"><span className='text-amber-500'>F</span>rontend <span className='text-amber-500'>D</span>eveloper</h2>
                    <p className="py-6 text-justify">
                        Passionate Front-End Developer skilled in React.js, Tailwind CSS, and JavaScript (ES6), with hands-on experience building responsive, user-friendly web applications and integrating Firebase authentication. Proficient in backend technologies like Node.js, Express.js, and MongoDB, with strong soft skills in communication, teamwork, and problem-solving.

                    </p>
                    
                    <a
                        href="https://drive.google.com/file/d/1kIzq-NLLtdxuaCITa4-28bNKAgkniH3r/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn bg-amber-500 rounded-xl">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;