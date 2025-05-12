import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import html from "../../../../assets/html5.png";
import css from "../../../../assets/CSS3.png";
import tailwind from "../../../../assets/tailwindcss.png";
import js from "../../../../assets/JS.png";
import react from "../../../../assets/react.png";
import daisyUI from "../../../../assets/daisyUI.svg";
import firebase from "../../../../assets/firebase.png";
import node from "../../../../assets/Node.js.png";
import express from "../../../../assets/Express.png";
import mongoDB from "../../../../assets/MongoDB.png";
import jwt from "../../../../assets/jwt.png";
import git from "../../../../assets/git.png";

const skills = [
    { src: html, label: "HTML5" },
    { src: css, label: "CSS3" },
    { src: tailwind, label: "Tailwind" },
    { src: js, label: "JavaScript" },
    { src: react, label: "React" },
    { src: daisyUI, label: "daisyUI" },
    { src: firebase, label: "Firebase" },
    { src: node, label: "Node" },
    { src: express, label: "Express" },
    { src: mongoDB, label: "Mongo DB" },
    { src: jwt, label: "JWT" },
    { src: git, label: "GitHub" },
];

const Skills = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <div
            ref={sectionRef}
            className="mx-auto border-2 border-amber-500 rounded-xl my-7 py-5"
            id="skills"
        >
            <p className="text-2xl mx-auto text-center my-5 font-bold">My Skills</p>
            <hr className="h-1 mx-5 my-5 text-amber-500" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-4 justify-items-center">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="border-2 border-amber-500 rounded-xl p-3 w-32 h-40 text-center bg-white shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img
                            src={skill.src}
                            alt={skill.label}
                            className="mx-auto h-20 object-contain"
                        />
                        <h2 className="text-xl font-semibold mt-2">{skill.label}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
